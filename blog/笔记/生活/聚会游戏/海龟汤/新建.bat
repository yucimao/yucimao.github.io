@echo off

for /f %%A in ('dir /a-d /b "��" 2^>nul ^| find /c /v ""') do set count=%%A
set /a count+=2

copy ģ��.html ��\
rename ��\ģ��.html %count%.html
start "" "C:\mq\app\code.lnk" "%cd%\��\%count%.html"
start "" "C:\mq\app\code.lnk" "%cd%\0.html"