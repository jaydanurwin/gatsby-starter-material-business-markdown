---
title: How to Setup a Chromebook for Web Development
date: 2019-05-18T06:00:00.000+00:00
featured_image: "./anoun-share-image.png"
---

This post is definitely for the more tech savvy individual but I wanted to write it in a way that a beginner wouldn't miss steps and someone with more experience could get what they need quickly.


## How to Enable Linux for Chrome OS A.K.A. Crostini

1. At the bottom right, select the time. 
2. Select Settings Settings.
3. Under "Linux (Beta)," select Turn On.
4. Follow the steps on the screen. Setup can take 10 minutes or more.
5. A terminal window opens. You can run Linux commands, install more tools using the APT package manager, and customize your shell.

[Learn more](https://support.google.com/chromebook/answer/9145439?hl=en) about Linux for Chrome OS

## How to Setup SSH for Crostini

ssh-keygen -t rsa

cat ~/.ssh/id_rsa.pub

Copy the output and you now have an SSH Key you can add to Github or Gitlab!

## How to Install Visual Studio Code

Here are some of our favorite VSCode Extensions!

* Material Theme
* Material Icon Theme
* Atom keybindings
* Prettier
* Flutter
* Dart


## How to Install Git

First, use the apt package management tools to update your local package index. With the update complete, you can download and install Git:

sudo apt update

sudo apt install git

You can confirm that you have installed Git correctly by running the following command:

git --version

Output
git version 2.x

## How Install Node.js and NPM

Run
Sudo apt update
Finally follow the directions from the nodejs site
 
 
### For nodejs version 10 (recommended)
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

sudo apt-get install -y nodejs

### For nodejs version 8:
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs
 
> Ever wonder the difference between apt and apt-get?
> Check [this](https://itsfoss.com/>apt-vs-apt-get-difference/) article out!
