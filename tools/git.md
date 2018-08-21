### 专用名词

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）
- Remote：远程仓库(默认origin)

### 安装、配置

- 去 [https://git-scm.com/downloads](https://git-scm.com/downloads)，下载 git，安装到本机
- 配置ssh key
```bash
# 查看是否已有ssh秘钥
$ cd ~/.ssh
# 若无，则生成：id_rsa、id_rsa.pub
$ ssh-keygen -t rsa -C "[email address]"
# 添加密钥到ssh-agent
$ ssh-add ~/.ssh/id_rsa
# 在github上添加ssh密钥，将“id_rsa.pub”里面的公钥复制粘贴进去
# 测试
$ ssh -T git@github.com
```
- 配置邮箱，密码（参见下面命令表）

### 命令表

> 配置

```bash
# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"

# 删除git全局配置文件中的用户名
$ git config --unset --global user.name
$ git config --unset --global user.email

# 设置命令别名（简写）
$ git config --global alias."[简写命令]" "命令"
```

> 新建代码库

```bash
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

> 增加/删除文件

```bash
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# (递归)添加当前目录的所有文件到暂存区
$ git add .
# 使用-u参数调用了git add命令，会将本地有改动（包括删除和修改）的已经追踪的文件标记到暂存区中
$ git add -u
# 使用-A参数会将添加所有改动的已跟踪文件和未跟踪文件。
$ git add -A
# 交互式的方式进行添加
$ git add -i

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

> 代码提交

```bash
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
```

> 远程仓库相关命令

```bash
# 克隆
$ git clone [url]
# 查看远程仓库
$ git remote -v
# 删除远程仓库(remoteName:远程仓库地址，默认origin)
$ git remote rm [remoteName]
# 添加远程仓库
$ git remote add [remoteName] [url]
# 修改远程仓库
$ git remote set-url --push [remoteName] [newUrl]
# 拉取远程仓库
$ git pull [remoteName] [localBranchName]
# 推送远程仓库
$ git push [remoteName] [localBranchName]
# 提交本地某个分支到远程某个分支
$ git push origin [localBranchName]:[remoteBranchName]
```

> 分支(branch)操作相关命令

```bash
# 查看本地分支
$ git branch
# 查看远程分支
$ git branch -r
# 列出所有本地分支和远程分支
$ git branch -a

# 创建本地分支
$ git branch [name]
# 创建新分支并立即切换到新分支
$ git checkout -b [name]
# 创建新分支并指向指定commit
$ git branch [branch] [commit]
# 创建远程分支(本地分支push到远程)
$ git push origin [name]
# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 创建空的分支(执行命令之前先提交当前分支的修改，否则会被强制清除工作区修改)
$ git symbolic-ref HEAD refs/heads/[name]
$ rm .git/index
$ git clean -fdx

# 切换分支
$ git checkout [name]
# 切换到上一个分支
$ git checkout -
# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [name]
# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除本地（已经合并过的）分支
$ git branch -d [name]
# 强制删除本地（已/未合并）分支
$ git branch -D [name]
# 删除远程分支
$ git push origin :heads/[name]
# 或
$ git push origin :[name]
```

> 查看信息

```bash
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

> 远程同步

```bash
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

> 撤销

```bash
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
# reset 必须是未提交的 commit, 否则提交不了，需要强制提交
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard HEAD^^/[commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
# 可以直接提交
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

> 标签(tag)操作相关命令

```bash
# 查看标签
$ git tag
# 查看远程标签
$ git tag -r
# 查看tag信息
$ git show [tag]

# 在当前commit创建标签
$ git tag [name]
# 创建远程标签(本地标签push到远程)
$ git push [remote] [name]
# 创建带注释的tag
$ git tag -a [name] -m 'yourMessage'

# 删除本地标签
$ git tag -d [name]
# 删除远程标签
$ git push [remote] :refs/tags/[name]

# 提交指定tag
$ git push [remote] [tag]
# 上传本地所有tag到远程仓库
$ git push [remote] --tags
# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]

# 合并远程仓库的tag到本地
$ git pull origin --tags
```

> 子模块(submodule)相关操作命令

```bash
# 添加子模块
$ git submodule add [url] [path]
# 如：
$ git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs
# 初始化子模块(只在首次检出仓库时运行一次就行)
$ git submodule init
# 更新子模块(每次更新或切换分支后都需要运行一下)
$ git submodule update
# 一步 初始化 + 更新子模块
$ git submodule update --init
# 一步 克隆仓库 + 初始化子模块 + 拉取子模块代码
$ git clone --recursive [url]

# 删除子模块：（分4步）
1. $ git rm --cached [path]
2. 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉
3. 编辑“ .git/config”文件，将子模块的相关配置节点删除掉
4. 手动删除子模块残留的目录
```

> 文件忽略

```bash
# 忽略从未提交的文件：分两步
# 在仓库根目录下创建名称为“.gitignore”的文件
$ touch .gitignore
# 写入不需要的文件夹名或文件，每个元素占一行即可，如
node_modules
.DS_Store
dist
*.log

# 忽略已跟踪文件的改动
$ git update-index --assume-unchanged [filesPATH]
# 取消忽略已跟踪文件改动
$ git update-index --no-assume-unchanged [filesPATH]
```

> 其他

```bash
# 生成一个可供发布的压缩包
$ git archive
```

### 一些基于git的代码托管平台

> github

- git page 做博客
- 开源代码，团队合作
- star、fork ...

> 其他还有 gitlab、coding ...

### git 的其他应用：
- 服务器自动更新：Webhook   
在远程代码更时，设置了 git webhook 的地址的仓库会请求一次设置的地址。

我们可以在服务器上起个webhook的服务，在接收到请求后，执行回调操作（拉取代码，安装依赖包，拷贝文件，重启目标服务等），实现服务器的自动更新。

webhook 的 nodejs 实现：[webhook](https://github.com/zhanglingrd/webhook)


### 最后，附上一张图表

![image](http://pic002.cnblogs.com/img/1-2-3/201007/2010072023345292.png)
