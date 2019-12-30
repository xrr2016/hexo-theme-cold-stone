# Cold Stone :tada:

一个简洁，清爽，文字为主的 [Hexo](https://hexo.io/zh-cn) 博客主题

## 预览

light
![demo](images/home.jpg)

dark
![demo](images/home_night.jpg)

[预览地址](https://coldstone.fun)

## 特性

- 自动切换夜间模式
- PWA（渐进式应用）
- [Utteranc](https://utteranc.es/) 评论系统
- 移动端友好
- English/中文

## 快速开始

首先需要安装 [Hexo](https://hexo.io) 用来创建项目，已经初始过的可以跳过此步

```sh
npm install -g hexo-cli

hexo init <folder>

cd <folder>

npm install
```

### 安装主题

```sh
git clone https://github.com/xrr2016/hexo-theme-cold-stone.git themes/cold-stone --depth 1
```

### 使用

1. 修改你的 Hexo 博客根目录下 `_config.yml` 文件 theme 设置为

```yml
theme: cold-stone
```

2. 将 `themes/cold-stone` 目录下的 `icons` 移动到 `source` 目录下

3. 在项目根目录执行以下命令，新建需要的页面

```sh
hexo new page projects

hexo new page categories

hexo new page tags

hexo new page about
```

添加 `source/projects/index.md` 的 layout 配置为

```md
---
layout: projects
---
```

添加 `source/categories/index.md` 的 layout 配置为

```md
---
layout: categories
---
```

添加 `source/tags/index.md` 的 layout 配置为

```md
---
layout: tags
---
```

4. 修改你的 Hexo 博客的配置 `_congfig.yml`，示例如下

```yml
# 博客设置
seo_title: 冷石的博客
project_dir: projects

# 用户设置
avatar: avatar.png

# Utteranc 评论系统
comment:
  repo: xrr2016/blog

# 社交平台链接：
sns:
  github: xrr2016
  juejin: 576666b7207703006b1e0f09

# 博客访问数据
track:
  gaid: xxxxxxxxxxxxxx
```

5. 在 `source` 目录下添加 `avatar.png` 图片

6. 安装 hexo-wordcount (字数统计)

```sh
npm i --save hexo-wordcount
```

7. 安装 hexo-all-minifier (压缩博客代码)

```sh
npm i --save hexo-all-minifier
```

### RSS

安装 hexo-generator-feed (生成 rss 链接)

```sh
npm i --save hexo-generator-feed
```

在 `_congfig.yml` 设置 rss 为 true

```yml
# RSS
rss: true
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
  order_by: -date
  icon: avatar.png
  autodiscovery: true
```

### 本地运行

```sh
hexo server
```

### 发布

安装 hexo-deployer-git

```sh
 npm install hexo-deployer-git --save
```

修改配置

```yml
deploy:
  type: git
  repo: https://github.com/your-username/your-repo
  branch: gh-pages
```

发布

```sh
hexo clean && hexo deploy
```

更多方式参考：https://hexo.io/docs/deployment

## 谁在使用

[冷石的博客](https://coldstone.fun) 💯

![audits](images/audits.gif)

## TODOS

- [x] 搜索功能

- [x] 分类页面

- [x] 显示页面访问量

- [x] 友站链接页面

## 发布日志

v2019-10-10

- 添加博客访问量统计
- 修改了文章字体统计显示位置
- 增加了博客文章数量显示
- 修复 safari 首页动画报错问题 [issue8](https://github.com/xrr2016/hexo-theme-cold-stone/issues/8)

v2019-10-08

- 添加了日文语言界面及文档，感谢 @[dongsu-iis](https://github.com/dongsu-iis)
- 修复代码高亮问题 #[issue](https://github.com/xrr2016/hexo-theme-cold-stone/issues/7)，需要禁用 hexo 自带的代码高亮
- 添加 [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier#readme) 压缩博客代码，让博客更快的打开
- 添加文章内上一篇/下一篇链接
- 更新了文章标签样式，文章内链接样式

v2019-09-30

- 修改导航栏样式
- 增加了首页加载动画时间
- 根据系统主题自动设置夜间模式

v2019-09-25

- 添加了首页加载动画
- 减小的主体内容宽度

v2019-09-23

- 修改了 PC 端首页布局
- 新增了文章字数统计功能 (需要在仓库目录安装 hexo-wordcount)
- PC 端添加了 Google 站内搜索
- 新增了友链页面

## 协议

[MIT](LICENSE)

如果觉得这个主题不错，请个这个仓库一个 star 吧。😎
