@echo off
@set /p a=zk��

if exist "C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\%a%.html" (
    start "" "C:\mq\app\code.lnk" "C:\mq\����\yucimao.github.io\blog\˽��\�ҵ����а�\zk\%a%.html"
) else (
    echo ������
)
exit