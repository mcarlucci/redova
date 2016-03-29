#!/bin/bash
mkdir www/css
touch www/css/main.css
stylus www/stylus/main.styl --out www/css
# postcss --use autoprefixer www/css/*.css --replace
