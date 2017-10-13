### todo:
- 列表页
- 详情页
- QQ 微信 github 登录留言、评论、分享
- 用户评论数据存储用[野狗](http://www.wilddog.com)
- 分类包括菜单和标签

- 草稿：首页增加邮箱 留言 右上角登录 列表页参考woolson 增加右边角联系栏目 详情页左边书目可伸缩 下面评论区 可浮动提纲 点击定位
- 参考
https://bryceyang.github.io/
http://woolson.cn
https://itgoyo.github.io

# 用 Github Pages 搭建 Personal WebSite

#### 目录结构
```
|---site
|     |---docs  # MD 文档
|     |
|     |---common #通用子系统
|     |      |---config 配置文件
|     |      |---widget #组件的资源目录，包括模板组件,JS组件,CSS组件等
|     |      |     └── menu   #widget模板组件
|     |      |     |    └── menu.tpl
|     |      |     |    └── menu.js
|     |      |     |    └── menu.css
|     |      |     └── ui   #UI组件
|     |      |          └── dialog  #JS组件
|     |      |          |    └──dialog.js
|     |      |          |    └──dialog.css
|     |      |          └── reset #CSS组件
|     |      |               └── reset.css
|     |      |---plugin #模板插件目录(可选，对于特殊需要的产品线，可以独立维护)
|     |      |---fis-conf.js #fis配置文件
|     |---module1 #module1子系统
|     |      |---test
|     |      |---config
|     |      |---page
|     |            └── index.tpl
|     |      |---static
|     |      |     └── index #index.tpl模板对应的静态资源
|     |      |          └── index.js
|     |      |          └── index.css
|     |      |---fis-conf.js #fis配置文件

        ......
```

#### Github Pages

#### docs 仓库提供 md 数据

#### 第三方登录

#### 数据存储：野狗
