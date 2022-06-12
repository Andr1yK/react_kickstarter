#!/usr/bin/env bash

git config user.name "andr1yk"
git config user.email "andriykobetiak@bots.github.com"

git add dist && git commit -m "Update gh-page"
git checkout -b gh-pages-temp
git push -f origin `git subtree split --prefix dist -b gh-pages`:gh-pages
git branch -D gh-pages
