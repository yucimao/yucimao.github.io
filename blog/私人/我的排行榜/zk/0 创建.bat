@echo off
@set /p a=�ʼ�����
if "%a%"=="" (
    echo �ʼ�������Ϊ�ա�
    pause
) else if exist "C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\%a%.html" (
    start "" "C:\mq\app\code.lnk" "C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\%a%.html"
) else (
    copy C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\0\ģ��.html C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\
    rename C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\ģ��.html %a%.html
    start "" "C:\mq\app\code.lnk" "C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\%a%.html"
)