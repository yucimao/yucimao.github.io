@echo off
chcp 65001 > nul 2>&1  :: 解决中文文件名乱码问题
setlocal enabledelayedexpansion

:: 遍历当前文件夹下的所有文件（不包含子文件夹）
for %%f in (*) do (
    :: 排除脚本自身，避免修改脚本文件
    if not "%%~nxf"=="%~nx0" (
        :: 判断文件是否已经是.jpg后缀
        if /i not "%%~xf"==".jpg" (
            :: 重命名文件，添加.jpg后缀
            ren "%%f" "%%~nf.jpg"
            echo 已为文件 [%%f] 添加.jpg后缀，新文件名：%%~nf.jpg
        ) else (
            echo 跳过 [%%f]，该文件已带有.jpg后缀
        )
    )
)

echo.
echo 操作完成！按任意键退出...
pause > nul
endlocal