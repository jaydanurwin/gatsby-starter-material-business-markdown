---
title: How to Set Up a Chromebook for Web Development
date: 2019-05-18T06:00:00.000+00:00
featured_image: "./chrome-os-web-dev-logos.jpg"
---

I don't know if you've heard this yet but Chromebooks are awesome now! You might already know they have Android support but just within the last year Google has added full Linux support to a  majority of Chromebooks out there. [According to ZDNet](https://www.zdnet.com/article/all-chromebooks-will-also-be-linux-laptops-going-forward/), they've also announced that all chromebooks released from May 2019 forward will support it. I've used Macbooks as my personal computers for as long as I can remember but since I jumped over to #teampixel back in 2016 I've always wanted to get a Chromebook. So once I heard Linux support was officially coming I decided it was time to jump the Apple ship and give Chrome OS a chance.

About 2 months ago I went with the [Google Pixel Slate](https://store.google.com/us/product/pixel_slate?hl=en-US) as my Chromebook (Chrome tablet) of choice and it has been amazing! Just like anything it took some time to learn the ropes of how things work in Chrome OS. However, I can say after the growing pains it really has increased my productivity and the fact that I can use the same device as my media consumption tablet(web browsing and YouTube), laptop, and desktop workstation is a game changer for me. 

The biggest challenge for me was finding a comprehensive guide on how to set a Chromebook up for web development. So I thought I would write my own and hopefully it helps you if you decide to give Chrome OS a shot yourself. 

Sidenote: This post is definitely for the more tech savvy individual but I wanted to write it in a way that a beginner wouldn't miss steps and someone with more experience could get what they need quickly.



## Enable Linux for Chrome OS A.K.A. Crostini

1. At the bottom right, select the time. 
2. Select Settings.
3. Open the left hand menu.
4. Under "Linux (Beta)," select Turn On.
5. Follow the steps on the screen. Setup can take 10 minutes or more.
6. A terminal window opens. You can run Linux commands, install more tools using the APT package manager, and customize your shell.

[Learn more](https://support.google.com/chromebook/answer/9145439?hl=en) about Linux for Chrome OS

## Setup SSH for Crostini

```shell
ssh-keygen -t rsa

cat ~/.ssh/id_rsa.pub
```

Copy the output and you now have an SSH Key you can add to Github or Gitlab!

## Install Visual Studio Code

1. Go to the website for [Visual Studio Code](https://code.visualstudio.com/)
2. Download the .deb package
3. Open your downloads folder
4. Right Click on the .deb package
5. Install with Linux(Beta)

It should install and you'll see a Visual Studio Code icon in your app drawer! 🙌🏼

Here are some of my favorite VSCode Extensions!

* [Material Theme](https://store.google.com/us/product/pixel_slate?hl=en-US)
* [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
* [Atom Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


## Install Git

First, use the apt package management tools to update your local package index. With the update complete, you can download and install Git:

```shell
sudo apt update
sudo apt install git
```

You can confirm that you have installed Git correctly by running the following command:

```shell
git --version
```
Output should be

```shell
git version 2.x
```

## Install Node.js and NPM
 
### For nodejs version 10 (recommended):

```shell
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E shell -

sudo apt-get install -y nodejs
```

### For nodejs version 8:

```shell
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E shell -

sudo apt-get install -y nodejs
```
