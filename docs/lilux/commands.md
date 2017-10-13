# 常用命令行

- cd    
```bash
# 进入目录
cd [file name]
# 回退
cd ..
# 查看当前目录路径
pwd
```

- add

```bash
# 新建文件
echo 内容>>文件名

# 按递归方式保留原目录结构复制文件
cp -r [path/name] [new path/new name]

# 强制覆盖同名文件
cp -f [path/name] [new path/new name]
```

- delete
```bash
# 强制删除
rm -rf [name]
```

- cat
```bash
# 查看文件内容
cat [file name]
```

- vim
```bash
# 切换到vim编辑器，若无该文件则创建
vim [file name]
# 插入状态
i
# 退出插入状态
esc
# 保存退出
：wq || ZZ || shift + zz
# 强制退出（不保存）
：q!
# 正常退出（打开后文件没有被改动过，否则要强退）
：q
```

- mkdir
```bash
# 创建文件夹
mkdir [dirName]
```

- ssh 操作
```bash
# 登录
ssh [name]@[ip]
# 上传文件
scp [filePath] [name]@[ip]:[originFilePath]
# 上传文件夹
scp -r [dirPath] [name]@[ip]:[originDirPath]
```

- 压缩与解压
```bash
# 压缩.zip
zip -r [zipName].zip [dirName]
# 解压.zip
unzip [zipName].zip -d dirName
```
