@echo off
@set /p a=笔记名：
if "%a%"=="" (
    echo 笔记名不能为空。
    pause
) else if exist "C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\%a%.html" (
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\%a%.html"
) else (
    copy C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\0\模板.html C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\
    rename C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\模板.html %a%.html
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\yucimao.github.io\blog\私人\我的排行榜\zk\%a%.html"
)