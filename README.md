# Cold Stone :tada:

A simple, clean, text-based [Hexo](https://hexo.io) blog theme.

[中文文档](README-zh.md)

## Foreword

In my opinion the main content of the blog should be text, but many Hexo themes with a lot of pictures, easy to distract the reader's attention, and some of the text-based theme features are somewhat simple, so the Cold Stone theme was born!

## Preview

![responsive](images/response.png)

[Link](https://coldstone.fun)

## Feature

- night mode
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
git clone https://github.com/xrr2016/hexo-theme-cold-stone.git themes/cold-stone
```

### Usage

1. Modify the `_config.yml` file in your Hexo blog root directory to set theme to

```yml
theme: cold-stone
```

2. Move `icons` in the `themes/cold-stone` directory to the `source` directory

3. Execute the following command at the project root directory, craete pages you need

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

# TODOS

- [ ] Search

- [x] Category

- [ ] Show page views

- [ ] Friends link page

## License

[MIT](LICENSE)

If you think this theme is no bad, please star this repo.
