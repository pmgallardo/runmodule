---
title: Hugo software
contentType: reference
---

**Hugo** is a static site generator (SSG).

# Characteristics

It is written in the Go programming language, though the average user doesn't need to master this language to use the SSG.

# Installation

## Linux

### Debian-based Linux

You can install on Debian-based Linux (e.g. Debian, Ubuntu, LinuxMint, etc.) by opening a terminal and using the `apt` command:

```bash
sudo apt install hugo
```

On systems that prioritize stability over modernity, you may find that the themes available on the internet are built for Hugo version more moderns than yours. You can use alternatives package managers such as `mise` to get the :

```bash
mise use hugo@latest
```

## Checking installation

```shell
hugo version
```

# Configuration

## Create site

Open a terminal, go to the folder where the project folder should be created, and type:

```shell
hugo new site <SITENAME>
```

When the command `git` is going to be used within the project, it is necessary to enter the folder and init it by typing:

```shell
git init
```

## Add a theme

Create a theme:

```shell
hugo new theme <THEMENAME>
```

You can also browse between existing themes from <https://themes.gohugo.io/>. It will redirect you to the corresponding GitHub project. 

Once you have identified a git project for the theme, you can download it using the command `git`:

```shell
git submodule add https://github.com/<USERNAME>/<PROJECTNAME>.git themes/<THEMENAME>
```

Taking the template PaperMod as an example:

```shell
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

Once it has been downloaded, edit `hugo.toml` and add the theme:

```toml
theme = 'THEMENAME'
```

## Create content

```shell
hugo new content <SECTIONNAME>/<FILENAME>.<FORMAT>
```

## Start the embedded web server

```shell
hugo server --buildDrafts"
```

You can also:

```shell
hugo server -D
```

## Generate a site

```shell
hugo
```

It will generate the site from the source code within the folder `public`. 

