# Cold Stone :tada:

A simple, refreshing, text-based [Hexo](https://hexo.io/zh-cn) blog theme.

[中文文档](README-zh.md)

[日本語ドキュメント](README-ja.md)

## Preview

light
![demo](images/home.jpg)

dark
![demo](images/home_night.jpg)

[Preview Link](https://coldstone.fun)

## Feature

- Auto night mode
- PWA (progressive web application)
- [Utteranc](https://utteranc.es/) comment System
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
git clone https://github.com/xrr2016/hexo-theme-cold-stone.git themes/cold-stone --depth 1
```

### Usage

1. Modify the `_config.yml` file in your Hexo blog root directory to set theme to

```yml
theme: cold-stone
```

2. Move `icons` in the `themes/cold-stone` directory to the `source` directory

3. Execute the following command at the project root directory, create pages you need

```sh
hexo new page projects

hexo new page categories

hexo new page tags

hexo new page about
```

Add the layout of `source/projects/index.md`

```md
---
layout: projects
---
```

Add the layout of `source/categories/index.md`

```md
---
layout: categories
---
```

Add the layout of `source/tags/index.md`

```md
---
layout: tags
---
```

4. Modify the configuration of your Hexo blog `_congfig.yml`, examples are as follows

```yml
# blog config
seo_title: 冷石的博客
project_dir: projects

# user config
avatar: avatar.png

# Utteranc comment system
comment:
  repo: xrr2016/blog

# sns link：
sns:
  github: xrr2016
  juejin: 576666b7207703006b1e0f09

# page stat
track:
  gaid: xxxxxxxxxxxxxx
```

5. Add a `avatar.png` image to the `source` directory

6. Install hexo-wordcount (word count)

```sh
npm i --save hexo-wordcount
```

7. Install hexo-all-minifier (Compress blog code)

```sh
npm i --save hexo-all-minifier
```

### RSS

Install hexo-generator-feed (generate rss link)

```sh
npm i --save hexo-generator-feed
```

Set rss to true in `_congfig.yml`

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

### Run local

```sh
hexo server
```

### Deploy

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

[cold stone's blog](https://coldstone.fun) 💯

![audits](images/audits.gif)

## TODOS

- [x] Search

- [x] Category

- [x] Show page views

- [x] Friends link page

## Release log

v2019-10-10

- Add blog traffic statistics
- Modified the article font statistics display position
- Added the number of blog posts to display
- Fixed safari homepage error reporting [issue8](https://github.com/xrr2016/hexo-theme-cold-stone/issues/8)

v2019-10-08

- Added Japanese language interface and documentation, thanks @[dongsu-iis](https://github.com/dongsu-iis)
- Fix code highlighting #[issue](https://github.com/xrr2016/hexo-theme-cold-stone/issues/7), need to disable the code highlighting that comes with hexo
- Added [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier#readme) to compress your blog code and let your blog open faster
- Add a previous/next link in the article
- Updated article label style, link style within article

V2019-09-30

- Modify the navigation bar style
- Increse homepage loading animation time
- Automatically set night mode according to system theme

v2019-09-25

- Added homepage loading animation
- Reduced body content width

v2019-09-23

- Modified PC home page layout
- Added article word count function (need install hexo-wordcount under blog folder)
- Added Google Site Search on the PC side
- Added friends chain page

## License

[MIT](LICENSE)

If you think this theme is no bad, please star this repo. 😎
