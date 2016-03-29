#!/bin/bash
mkdir -p platforms/android/res/
mkdir -p platforms/ios/Resources

cp -r resources/android/* platforms/android/res/
cp -r resources/ios/* platforms/ios/Resources/
