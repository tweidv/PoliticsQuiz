const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Data storage (in production, use a proper database)
const dataFile = path.join(__dirname, '..', 'quiz-results.json');

// Load existing data
let quizResults = [];
if (fs.existsSync(dataFile)) {
    try {
        const data = fs.readFileSync(dataFile, 'utf8');
        quizResults = JSON.parse(data);
    } catch (error) {
        console.error('Error loading quiz results:', error);
    }
}

// Save data to file
function saveData() {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(quizResults, null, 2));
    } catch (error) {
        console.error('Error saving quiz results:', error);
    }
}

// Save quiz results
app.post('/api/quiz-results', (req, res) => {
    try {
        const { session_id, timestamp, topic, responses } = req.body;
        
        // Validate required fields
        if (!session_id || !timestamp || !topic || !responses) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Add to results
        const result = {
            session_id,
            timestamp,
            topic,
            responses,
            id: Date.now().toString()
        };
        
        quizResults.push(result);
        saveData();
        
        res.json({ 
            success: true, 
            message: 'Quiz results saved successfully',
            id: result.id
        });
        
    } catch (error) {
        console.error('Error saving quiz results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all quiz results
app.get('/api/quiz-results', (req, res) => {
    res.json(quizResults);
});

// Get results by topic
app.get('/api/quiz-results/topic/:topic', (req, res) => {
    const { topic } = req.params;
    const topicResults = quizResults.filter(result => result.topic === topic);
    res.json(topicResults);
});

// Export results as CSV
app.get('/api/export/csv', (req, res) => {
    try {
        let csv = 'Session ID,Timestamp,Topic,Question ID,User Answer,Correct Answer,Accuracy\n';
        
        quizResults.forEach(result => {
            result.responses.forEach(response => {
                csv += `${result.session_id},${result.timestamp},${result.topic},${response.question_id},${response.user_answer},${response.correct_answer},${response.accuracy}\n`;
            });
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=quiz-results.csv');
        res.send(csv);
        
    } catch (error) {
        console.error('Error exporting CSV:', error);
        res.status(500).json({ error: 'Error exporting data' });
    }
});

// Get statistics
app.get('/api/stats', (req, res) => {
    const stats = {
        totalSessions: quizResults.length,
        topics: {},
        averageAccuracy: 0
    };
    
    let totalAccuracy = 0;
    let totalResponses = 0;
    
    quizResults.forEach(result => {
        // Count by topic
        if (!stats.topics[result.topic]) {
            stats.topics[result.topic] = 0;
        }
        stats.topics[result.topic]++;
        
        // Calculate average accuracy
        result.responses.forEach(response => {
            totalAccuracy += response.accuracy;
            totalResponses++;
        });
    });
    
    stats.averageAccuracy = totalResponses > 0 ? totalAccuracy / totalResponses : 0;
    
    res.json(stats);
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Export the Express app as a Vercel serverless function
module.exports = app;