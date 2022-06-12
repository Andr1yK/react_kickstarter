#!/usr/bin/env bash

git config user.name "andr1yk"
git config user.email "andriykobetiak@bots.github.com"

git add dist && git commit -m "Update gh-page"
git push origin `git subtree split --prefix dist gh-pages` --force
