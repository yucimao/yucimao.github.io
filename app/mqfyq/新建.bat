@echo off
echo Сд
echo ��ť�ãۣݣ����뷨��q2��q3��
echo ������br
echo -
set /p a=�ʼ�����

if "%a%"=="" (
    echo �ʼ�������Ϊ�ա�
    pause
) else if exist "C:\mq\����\yucimao.github.io\app\mqfyq\wc\%a%.json" (
    start "" "C:\mq\app\code.lnk" "C:\mq\����\yucimao.github.io\app\mqfyq\wc\%a%.json"
) else (
    copy C:\mq\Ŀ¼\��\����\mqfyq.json C:\mq\����\yucimao.github.io\app\mqfyq\wc\
    rename C:\mq\����\yucimao.github.io\app\mqfyq\wc\mqfyq.json %a%.json
    start "" "C:\mq\app\code.lnk" "C:\mq\����\yucimao.github.io\app\mqfyq\wc\%a%.json"
)