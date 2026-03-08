@echo off
setlocal enabledelayedexpansion

REM One-click fixer for local Vite startup issues (Windows CMD)
REM Run in project root: tools\fix-dev-and-run.bat

echo.
echo [1/6] Checking project root...
if not exist "package.json" (
  echo [ERROR] package.json not found. Please run this script in project root.
  exit /b 1
)

echo.
echo [2/6] Checking Node.js...
for /f "tokens=*" %%i in ('node -v 2^>nul') do set NODE_VER=%%i
if "%NODE_VER%"=="" (
  echo [ERROR] Node.js is not installed or not in PATH.
  exit /b 1
)
echo Detected Node: %NODE_VER%

set NODE_MAJOR=%NODE_VER:~1,2%
if "%NODE_VER:~2,1%"=="." set NODE_MAJOR=%NODE_VER:~1,1%

if not "%NODE_MAJOR%"=="20" (
  echo [WARN] Recommended Node is v20.x (current is %NODE_VER%).
  echo        Current version may cause "spawn EPERM" on Vite/esbuild.
  choice /m "Continue anyway"
  if errorlevel 2 exit /b 1
)

echo.
echo [3/6] Cleaning dependencies...
if exist "node_modules" (
  rmdir /s /q node_modules
)
if exist "package-lock.json" (
  del /f /q package-lock.json
)

echo.
echo [4/6] Installing dependencies...
call npm install
if errorlevel 1 (
  echo [ERROR] npm install failed.
  exit /b 1
)

echo.
echo [5/6] Rebuilding esbuild...
call npm rebuild esbuild
if errorlevel 1 (
  echo [WARN] npm rebuild esbuild failed. Trying to continue...
)

echo.
echo [6/6] Starting dev server...
echo Open: http://127.0.0.1:5173/subjects/physics
call npm run dev -- --host 127.0.0.1 --port 5173

endlocal
