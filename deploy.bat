@echo off
echo Starting Tablet Quiz App Setup...
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Starting server...
echo The quiz app will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm start
