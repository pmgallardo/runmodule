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

Remove (or update) the files that refer to the original Quartz project:s

```text
README.md
LICENSE.md
CHANGELOG.md
CODE_OF_CONDUCT.md
```

If you are sure that you're not using that file in your project, you can add it to `.gitignore` or removed from git cache to ensure they are never updated:

```shell
git rm --cached FILENAME.md
```

These optional steps are "optional" because the expected repo updates should affect only (or mainly) ``. But you can do it just to make sure.

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

# Updating Quartz

Perform a commit before updating Quartz, as a backup.

```shell
git add .
git commit -m "Save local configuration and content changes"
```

Pull changes from the backup:

```shell
git pull https://github.com/jackyzha0/quartz.git v4
```

