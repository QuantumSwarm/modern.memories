
---

### 2. ⚙️ `setup_sanity.bat`
*Save this file as `setup_sanity.bat` in your root directory. Double-click it to run.*

```batch
@echo off
echo ==========================================
echo   Unfiltered Fashion: Sanity Setup Tool
echo ==========================================
echo.

REM Check if sanity folder exists, if not create it
if not exist "sanity" (
    echo [!] Warning: 'sanity' folder not found.
    echo     Please run 'npm create sanity@latest' first and select './sanity' as the path.
    echo     Pausing for 5 seconds...
    timeout /t 5
    echo     Attempting to create structure anyway...
    mkdir sanity
)

echo [+] Creating directory structure...
mkdir sanity\schemaTypes
mkdir sanity\lib
mkdir sanity\components

echo [+] Creating schema files...
type nul > sanity\schemaTypes\designer.ts
type nul > sanity\schemaTypes\collection.ts
type nul > sanity\schemaTypes\eventInfo.ts
type nul > sanity\schemaTypes\index.ts

echo [+] Creating utility files...
type nul > sanity\lib\client.ts
type nul > sanity\components\PortableText.tsx

echo.
echo ==========================================
echo   Setup Complete!
echo ==========================================
echo.
echo Next Steps:
echo 1. Open VS Code.
echo 2. Open 'SANITY_SETUP.md'.
echo 3. Copy the code blocks into the newly created files.
echo 4. Run 'npm run dev' to start your server.
echo.
pause