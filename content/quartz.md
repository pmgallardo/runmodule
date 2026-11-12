---
title: Quartz
contentType: reference
---

**Quartz** is a digital garden static site generator (SSG).

# Installation

The prerrequisites are:

- git
- npm

Quartz is installed just by cloning the GitHub

```shell
git clone https://github.com/jackyzha0/quartz.git
```

Rename the created folder to your project's name. Enter into the project root folder.

```shell
npm i
```

Run the interactive setup wizard:

```shell
npx quartz create
```

Update the `README.md` file. To avoid the file to be overwritten with future updates, create a `.gitattributes` file and add the following line:

```text
README.md merge=ours
```

If your project license is the same as Quartz (MIT), you don't need to do anything. But if it's different, you should add a note within the `README.md` file.

If a file isn't used in your project and it must never be updated, you can add it to `.gitignore` or removed from git cache to ensure they are never updated:

```shell
git rm --cached FILENAME.md
```

These optional steps are "optional" because the expected repo updates should affect only (or mainly) ``. But you can do it just to make sure.

# Update

Before performing updating Quartz, ensure all changes are committed or they will be discarded:

```shell
git add .
git commit -m "Save local configuration and content changes"
```

You can update it by using Quartz:

```shell
npx quartz update
```

Alternatively, you can use the `git` command:

```shell
git pull
```

# Customizing Quarts

Edit file `quartz.config.yaml` to update the site main info.

Edit file `quartz.layout.ts` to update the site layout.

Create files under the `content` folder to add entries.

# Preview

You can preview the website and see live changes on:

```shell
npx quartz build --serve
```

Then, open a browser and visit the website (by default, <https://localhost:8080>)

# Syncing

If the project is being published at a remote destination, you can avoid manual updates using git with the following command:

```shell
npx quartz sync
```

