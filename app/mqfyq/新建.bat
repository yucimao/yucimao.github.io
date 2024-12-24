@echo off
@set /p a=笔记名：
if "%a%"=="" (
    echo 笔记名不能为空。
    pause
) else if exist "C:\mq\博客\yucimao.github.io\app\mqfyq\wc\%a%.json" (
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\yucimao.github.io\app\mqfyq\wc\%a%.json"
) else (
    copy CC:\mq\目录\子\代码\mqfyq.json C:\mq\博客\yucimao.github.io\app\mqfyq\wc\
    rename C:\mq\博客\yucimao.github.io\app\mqfyq\wc\mqfyq.json %a%.json
    start "" "C:\mq\app\code.lnk" "C:\mq\博客\yucimao.github.io\app\mqfyq\wc\%a%.json"
)