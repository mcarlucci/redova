#!/bin/bash
rm -rf www/bundle.js
rm -rf www/bundle.js.map
jspm bundle-sfx js/app www/bundle.js
