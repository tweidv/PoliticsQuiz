// Quiz App JavaScript
class QuizApp {
    constructor() {
        this.currentTopic = null;
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.sessionId = this.generateSessionId();
        this.timer = null;
        this.timeLeft = 5;
        this.showingAnswer = false;
        
        this.quizData = {
            migration: {
                title: "Migration",
                questions: [
                    {
                        id: "migration_1",
                        text: "What was the UK's net migration for the year ending December 2024?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 431000,
                        min: 0,
                        max: 1000000,
                        step: 1000,
                        unit: ""
                    },
                    {
                        id: "migration_2",
                        text: "By roughly what percentage did net migration fall from 2023 to 2024?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 50,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "migration_3",
                        text: "How many non-EU+ immigrants entered the UK in 2024 compared with 2023 — what was the drop?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 350000,
                        min: 0,
                        max: 500000,
                        step: 1000,
                        unit: " fewer"
                    },
                    {
                        id: "migration_4",
                        text: "What was the percentage drop in work-related immigration (main applicants) in 2024 vs 2023?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 49,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "migration_5",
                        text: "What percentage did student dependant visas fall by in 2024?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 86,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "migration_6",
                        text: "What was total immigration (long-term arrivals) in 2024?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 948000,
                        min: 0,
                        max: 2000000,
                        step: 1000,
                        unit: ""
                    },
                    {
                        id: "migration_7",
                        text: "What was estimated emigration (departures) in 2024?",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 517000,
                        min: 0,
                        max: 1000000,
                        step: 1000,
                        unit: ""
                    }
                ]
            },
            ai: {
                title: "AI & Automation",
                questions: [
                    {
                        id: "ai_1",
                        text: "% believing more jobs lost to AI than created",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 64,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_2",
                        text: "% who think AI will replace their own job within 30 years",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 25,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_3",
                        text: "% worried about AI's effect on their job",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 14,
                        min: 0,
                        max: 50,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_4",
                        text: "% lacking confidence in tech companies to develop AI responsibly",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 66,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_5",
                        text: "% lacking confidence in UK Govt to regulate AI effectively",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 68,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_6",
                        text: "% of global consumers \"very well informed\" on AI",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 10,
                        min: 0,
                        max: 50,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "ai_7",
                        text: "% of UK consumers thinking AI will harm society",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 33,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    }
                ]
            },
            tax: {
                title: "UK Tax Money",
                questions: [
                    {
                        id: "tax_1",
                        text: "UK Health & Social Care spend (2024–25)",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 205,
                        min: 100,
                        max: 300,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_2",
                        text: "Education spending",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 95,
                        min: 50,
                        max: 150,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_3",
                        text: "Defence spending",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 60,
                        min: 30,
                        max: 90,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_4",
                        text: "Home Office spending",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 20,
                        min: 10,
                        max: 30,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_5",
                        text: "Work & Pensions spending",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 10,
                        min: 5,
                        max: 25,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_6",
                        text: "Scotland expenditure limits",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 45,
                        min: 20,
                        max: 60,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_7",
                        text: "Wales expenditure limits",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 20,
                        min: 10,
                        max: 30,
                        step: 1,
                        unit: " billion"
                    },
                    {
                        id: "tax_8",
                        text: "Northern Ireland expenditure limits",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 18,
                        min: 5,
                        max: 25,
                        step: 1,
                        unit: " billion"
                    }
                ]
            },
            speech: {
                title: "Free Speech",
                questions: [
                    {
                        id: "speech_1",
                        text: "% saying free speech very important",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 80,
                        min: 40,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "speech_2",
                        text: "% saying UK less tolerant recently",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 57,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "speech_3",
                        text: "% supporting protest restrictions",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 42,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "speech_4",
                        text: "% saying people are too easily offended",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 65,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "speech_5",
                        text: "% favouring tighter regulation of misinformation",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 55,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    },
                    {
                        id: "speech_6",
                        text: "% saying media bias limits free speech",
                        subtext: "Use the slider to make your guess",
                        correctAnswer: 60,
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: "%"
                    }
                ]
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showPage('landing-page');
    }
    
    bindEvents() {
        // Topic selection
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const topic = e.currentTarget.dataset.topic;
                this.startQuiz(topic);
            });
        });
        
        // Slider input
        const slider = document.getElementById('answer-slider');
        slider.addEventListener('input', (e) => {
            this.updateSliderValue(e.target.value);
            if (!this.showingAnswer) {
                this.enableNextButton();
            }
        });
        
        // Navigation button
        document.getElementById('next-btn').addEventListener('click', () => {
            if (this.showingAnswer) {
                this.nextQuestion();
            } else {
                this.showAnswer();
            }
        });
        
        // Results page button
        document.getElementById('home-btn').addEventListener('click', () => {
            this.goHome();
        });
    }
    
    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    startQuiz(topic) {
        this.currentTopic = topic;
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.showPage('question-page');
        this.loadQuestion();
    }
    
    loadQuestion() {
        const questions = this.quizData[this.currentTopic].questions;
        const question = questions[this.currentQuestionIndex];
        
        // Reset showing answer state
        this.showingAnswer = false;
        
        // Hide answer section
        document.getElementById('answer-section').style.display = 'none';
        
        // Update progress
        document.getElementById('current-question').textContent = this.currentQuestionIndex + 1;
        document.getElementById('total-questions').textContent = questions.length;
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / questions.length) * 100;
        document.querySelector('.progress-fill').style.width = progress + '%';
        
        // Update question content
        document.getElementById('question-text').textContent = question.text;
        document.getElementById('question-subtext').textContent = question.subtext;
        
        // Update slider
        const slider = document.getElementById('answer-slider');
        slider.min = question.min;
        slider.max = question.max;
        slider.step = question.step;
        slider.value = (question.min + question.max) / 2;
        
        // Update labels
        document.getElementById('min-label').textContent = this.formatNumber(question.min);
        document.getElementById('max-label').textContent = this.formatNumber(question.max);
        
        // Update slider value display
        this.updateSliderValue(slider.value);
        
        // Reset button
        document.getElementById('next-btn').disabled = true;
        
        // Start countdown
        this.startCountdown();
    }
    
    updateSliderValue(value) {
        const question = this.quizData[this.currentTopic].questions[this.currentQuestionIndex];
        const formattedValue = this.formatNumber(value) + question.unit;
        document.getElementById('slider-value').textContent = formattedValue;
    }
    
    formatNumber(num) {
        return parseInt(num).toLocaleString();
    }
    
    enableNextButton() {
        document.getElementById('next-btn').disabled = false;
        document.getElementById('next-btn').textContent = 'Show Answer';
    }
    
    startCountdown() {
        this.timeLeft = 5;
        this.updateCountdownDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateCountdownDisplay();
            
            if (this.timeLeft <= 0) {
                this.autoAdvance();
            }
        }, 1000);
    }
    
    updateCountdownDisplay() {
        const percentage = (this.timeLeft / 5) * 100;
        const circumference = 283; // 2 * PI * 45
        const offset = circumference - (percentage / 100) * circumference;
        
        document.querySelector('.countdown-progress').style.strokeDashoffset = offset;
        document.getElementById('countdown-timer').textContent = this.timeLeft;
        
        // Change color based on time left
        const countdownProgress = document.querySelector('.countdown-progress');
        
        if (this.timeLeft <= 2) {
            countdownProgress.style.stroke = '#dc3545';
        } else if (this.timeLeft <= 3) {
            countdownProgress.style.stroke = '#ffc107';
        } else {
            countdownProgress.style.stroke = '#28a745';
        }
    }
    
    autoAdvance() {
        clearInterval(this.timer);
        this.showAnswer();
    }
    
    showAnswer() {
        this.showingAnswer = true;
        
        // Save current response
        this.saveResponse();
        
        // Get current question and user answer
        const question = this.quizData[this.currentTopic].questions[this.currentQuestionIndex];
        const userAnswer = parseInt(document.getElementById('answer-slider').value);
        const accuracy = this.calculateAccuracy(userAnswer, question.correctAnswer);
        
        // Update answer display
        document.getElementById('user-answer-display').textContent = this.formatNumber(userAnswer) + question.unit;
        document.getElementById('correct-answer-display').textContent = this.formatNumber(question.correctAnswer) + question.unit;
        
        const accuracyElement = document.getElementById('accuracy-display');
        accuracyElement.textContent = Math.round(accuracy) + '%';
        
        // Add accuracy class for styling
        accuracyElement.className = 'answer-value accuracy';
        if (accuracy >= 80) {
            accuracyElement.classList.add('high');
        } else if (accuracy >= 60) {
            accuracyElement.classList.add('medium');
        } else {
            accuracyElement.classList.add('low');
        }
        
        // Show answer section
        document.getElementById('answer-section').style.display = 'block';
        
        // Update button text and enable it
        document.getElementById('next-btn').textContent = this.currentQuestionIndex < this.quizData[this.currentTopic].questions.length - 1 ? 'Next Question' : 'See Results';
        document.getElementById('next-btn').disabled = false;
    }
    
    nextQuestion() {
        // Clear timer
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        const questions = this.quizData[this.currentTopic].questions;
        
        if (this.currentQuestionIndex < questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }
    
    
    saveResponse() {
        const question = this.quizData[this.currentTopic].questions[this.currentQuestionIndex];
        const userAnswer = parseInt(document.getElementById('answer-slider').value);
        const accuracy = this.calculateAccuracy(userAnswer, question.correctAnswer);
        
        this.responses.push({
            question_id: question.id,
            user_answer: userAnswer,
            correct_answer: question.correctAnswer,
            accuracy: accuracy,
            question_text: question.text
        });
    }
    
    calculateAccuracy(userAnswer, correctAnswer) {
        const question = this.quizData[this.currentTopic].questions[this.currentQuestionIndex];
        const range = question.max - question.min;
        const discrepancy = Math.abs(userAnswer - correctAnswer);
        const percentageError = (discrepancy / range) * 100;
        return Math.max(0, 100 - percentageError);
    }
    
    showResults() {
        this.showPage('results-page');
        this.displayResults();
        this.saveToBackend();
    }
    
    displayResults() {
        const overallAccuracy = this.calculateOverallAccuracy();
        document.getElementById('overall-accuracy').textContent = Math.round(overallAccuracy) + '%';
        
        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = '';
        
        this.responses.forEach((response, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            const accuracyClass = response.accuracy >= 80 ? 'high' : 
                                 response.accuracy >= 60 ? 'medium' : 'low';
            
            resultItem.innerHTML = `
                <div class="result-question">
                    <strong>Question ${index + 1}:</strong> ${response.question_text}
                </div>
                <div class="result-answers">
                    <div class="result-answer">Your answer: ${this.formatNumber(response.user_answer)}</div>
                    <div class="result-answer">Correct: ${this.formatNumber(response.correct_answer)}</div>
                    <div class="result-accuracy ${accuracyClass}">${Math.round(response.accuracy)}% accurate</div>
                </div>
            `;
            
            resultsList.appendChild(resultItem);
        });
    }
    
    calculateOverallAccuracy() {
        if (this.responses.length === 0) return 0;
        const totalAccuracy = this.responses.reduce((sum, response) => sum + response.accuracy, 0);
        return totalAccuracy / this.responses.length;
    }
    
    async saveToBackend() {
        const data = {
            session_id: this.sessionId,
            timestamp: new Date().toISOString(),
            topic: this.currentTopic,
            responses: this.responses
        };
        
        try {
            const response = await fetch('/api/quiz-results', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log('Quiz results saved successfully:', result);
            } else {
                console.error('Failed to save quiz results:', response.statusText);
            }
            
        } catch (error) {
            console.error('Error saving quiz results:', error);
            // Fallback: save to localStorage
            this.saveToLocalStorage(data);
        }
    }
    
    saveToLocalStorage(data) {
        try {
            const existingData = JSON.parse(localStorage.getItem('quizResults') || '[]');
            existingData.push(data);
            localStorage.setItem('quizResults', JSON.stringify(existingData));
            console.log('Quiz results saved to localStorage');
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }
    
    goHome() {
        // Reset quiz state
        this.currentTopic = null;
        this.currentQuestionIndex = 0;
        this.responses = [];
        this.showingAnswer = false;
        
        // Clear any active timers
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        // Go back to landing page
        this.showPage('landing-page');
    }
    
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
