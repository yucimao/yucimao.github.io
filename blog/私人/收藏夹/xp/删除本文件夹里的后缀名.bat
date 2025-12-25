@echo off
chcp 65001 > nul 2>&1
setlocal enabledelayedexpansion

:: 设置目标文件夹路径（默认是脚本所在文件夹，可手动修改）
set "target_dir=%~dp0"

:: 遍历目标文件夹下的所有文件（不含子文件夹）
for %%f in ("%target_dir%\*.*") do (
    :: 排除脚本自身（避免把脚本自己的后缀也删掉）
    if not "%%~nxf"=="%~nx0" (
        :: 只处理有后缀的文件（*.* 会匹配无后缀文件，这里过滤掉）
        if not "%%~xf"=="" (
            :: 重命名：删除后缀（只保留文件名主体 %%~nf）
            ren "%%f" "%%~nf"
            echo 已处理文件：%%~nxf → %%~nf
        )
    )
)

echo.
echo 所有符合条件的文件已删除后缀名！
pause