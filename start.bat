@echo off
echo ========================================================
echo   WorkRadar - AI Academic Workload Intelligence Platform
echo ========================================================
echo Starting local web server on port 3000...
set NODE_EXE="C:\Users\Student\AppData\Local\Autodesk\webdeploy\production\bce2902bbfcb27678033cbb9e17a3529631b97a7\NODEJS\node.exe"

if exist %NODE_EXE% (
    %NODE_EXE% server.js
) else (
    node server.js
)
pause
