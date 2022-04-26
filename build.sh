#!/bin/sh

sass --style compressed ./src/styles/scss/index.scss ./dist/style.css
cp -r ./src/fonts ./dist/fonts/