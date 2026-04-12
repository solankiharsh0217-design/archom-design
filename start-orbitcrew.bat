@echo off
cd /d "%~dp0orbitcrew"
if errorlevel 1 (
    echo Error: Could not find orbitcrew folder
    pause
    exit /b 1
)
echo Starting OrbitCrew website...
echo.
echo Option 1 - Development mode (with hot reload):
echo   npm run dev
echo.
echo Option 2 - Production mode:
echo   npx serve dist -l 3000
echo.
echo Starting production server now...
npx serve dist -l 3000
pause