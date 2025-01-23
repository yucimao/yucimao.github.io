@echo off
@set /p a=zk码

if exist "C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\%a%.html" (
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\%a%.html"
) else (
    echo 不存在
)
exit