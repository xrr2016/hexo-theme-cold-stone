# Cold Stone

A simple, clean, text-based [Hexo](https://hexo.io) blog theme.

[中文文档](README-zh.md)

## Foreword

In my opinion the main content of the blog should be text, but many Hexo themes with a lot of pictures, easy to distract the reader's attention, and some of the text-based theme features are somewhat simple, so the Cold Stone theme was born!

## Preview

![responsive](images/response.png)

[preview address](https://coldstone.fun)

## Feature

- night mode
- PWA (progressive web application)
- Utteranc comment System
- Mobile friendly
- English/Chinese

## Quick start

First you need to install [Hexo](https://hexo.io) to create the project. You can skip this step if you have already started.

```sh
npm install -g hexo-cli

hexo init <folder>

cd <folder>

npm install
```

### Install theme

```sh
git clone https://github.com/xrr2016/hexo-theme-cold-stone.git themes/cold-stone
```

### Usage

1. Modify the `_config.yml` file in your Hexo blog root directory to set theme to

```yml
theme: cold-stone
```

2. Move `icons` in the `themes/cold-stone` directory to the `source` directory

3. Craete pages you need

```sh
hexo new page proejcts

hexo new page tags
```

Add the layout of `source/projects/index.md` to

```md
---
title: Projects
date: 2019-07-30 10:34:53
layout: projects
---
```

Add the layout of `source/tags/index.md` to

```md
---
title: tags
date: 2019-08-16 15:34:49
layout: tags
---
```

4. Add a `avatar.png` image to the `source` directory

5. Modify the configuration of your Hexo blog, examples are as follows

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
  ga: xxxxxxxxxxxxxx
```

### 本地运行

```sh
hexo server
```

### 发布

- install hexo-deployer-git

```sh
 npm install hexo-deployer-git --save
```

- set config

```yml
deploy:
  type: git
  repo: https://github.com/your-username/your-repo
  branch: gh-pages
```

- publish

```sh
hexo clean && hexo deploy
```

More ways to refer：https://hexo.io/docs/deployment

## Using

[冷石的博客](https://coldstone.fun) 💯

![audits](images/audits.gif)

# TODOS

- [ ] Search

- [ ] Category

- [ ] Show page views

- [ ] Friends link page

## License

[MIT](LICENSE)

## PS

If you think this theme is no bad, please star this repo.
