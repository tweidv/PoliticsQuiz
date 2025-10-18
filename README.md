# 🧠 Tablet Quiz App

A modern, tablet-friendly web quiz application with interactive numeric slider questions. Built with vanilla JavaScript, CSS3, and Node.js backend.

## ✨ Features

- **One question per page** with smooth transitions
- **5-second countdown timer** per question with visual progress
- **Interactive sliders** for numeric answers
- **Progress tracking** and step indicators
- **Results page** with accuracy calculations
- **Responsive design** optimized for tablets and desktops
- **Clean, modern UI** with Typeform-style interface
- **Backend API** for storing quiz results
- **GDPR-compliant** data handling

## 🎯 Quiz Topics

1. **Migration** (7 questions) - UK migration statistics
2. **AI & Automation** (7 questions) - Public opinion on AI
3. **UK Tax Money** (8 questions) - Government spending data
4. **Free Speech** (6 questions) - Public attitudes on free speech

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
4. **Open your browser** and go to `http://localhost:3000`

### Development Mode

For development with auto-restart:
```bash
npm run dev
```

## 🏗️ Project Structure

```
TempQuiz/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # Frontend JavaScript logic
├── server.js           # Node.js backend server
├── package.json        # Dependencies and scripts
├── README.md          # This file
└── quiz-results.json  # Generated data file (after first quiz)
```

## 🎨 Design Features

- **Clean greyscale color scheme** (no gradients)
- **Inter font family** for modern typography
- **Smooth animations** and transitions
- **Touch-friendly** interface for tablets
- **Accessibility features** with proper focus states
- **High contrast mode** support

## 🔧 API Endpoints

- `POST /api/quiz-results` - Save quiz results
- `GET /api/quiz-results` - Get all results
- `GET /api/quiz-results/topic/:topic` - Get results by topic
- `GET /api/export/csv` - Export results as CSV
- `GET /api/stats` - Get quiz statistics
- `GET /api/health` - Health check

## 📊 Data Structure

Quiz results are stored in JSON format:

```json
{
  "session_id": "session_1234567890_abc123",
  "timestamp": "2025-01-18T10:30:00Z",
  "topic": "migration",
  "responses": [
    {
      "question_id": "migration_1",
      "user_answer": 500000,
      "correct_answer": 431000,
      "accuracy": 84.0,
      "question_text": "What was the UK's net migration..."
    }
  ]
}
```

## 🎮 How to Use

1. **Choose a topic** from the landing page
2. **Read the question** and use the slider to make your guess
3. **Watch the countdown timer** - you have 5 seconds per question
4. **Click Next** to proceed (or wait for auto-advance)
5. **Review your results** and see your accuracy score
6. **Retake or share** your results

## 🛠️ Customization

### Adding New Questions

Edit the `quizData` object in `script.js`:

```javascript
{
  id: "unique_question_id",
  text: "Your question text?",
  subtext: "Additional instructions",
  correctAnswer: 100,
  min: 0,
  max: 200,
  step: 1,
  unit: "%"
}
```

### Styling

Modify `styles.css` to change colors, fonts, or layout. The app uses CSS custom properties for easy theming.

### Backend

The `server.js` file handles data storage and API endpoints. Modify it to integrate with your preferred database.

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & GDPR

- No personal data is collected
- Session IDs are generated locally
- Data is stored locally or on your server
- No third-party tracking

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in `server.js` or kill the process using port 3000
2. **Slider not working**: Ensure JavaScript is enabled and the browser supports HTML5 range inputs
3. **Timer issues**: Check browser console for JavaScript errors

### Debug Mode

Open browser developer tools and check the console for detailed logs.

## 📈 Performance

- **Lightweight**: ~50KB total (HTML + CSS + JS)
- **Fast loading**: Optimized assets and minimal dependencies
- **Smooth animations**: CSS transitions and transforms
- **Responsive**: Works on all screen sizes

## 🤝 Contributing

Feel free to submit issues, feature requests, or pull requests to improve the app.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

**Built with ❤️ for interactive learning**
