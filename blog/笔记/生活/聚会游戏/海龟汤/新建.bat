@echo off

for /f %%A in ('dir /a-d /b "¿â" 2^>nul ^| find /c /v ""') do set count=%%A
set /a count+=2

copy Ä£°å.html ¿â\
rename ¿â\Ä£°å.html %count%.html
start "" "C:\mq\app\code.lnk" "%cd%\¿â\%count%.html"
start "" "C:\mq\app\code.lnk" "%cd%\0.html"