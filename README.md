# Redova

Redova is a bare-bones Cordova + ReactJS project setup to get you started creating awesome mobile apps quickly.

Setup
=======
```
npm install -g jspm
npm install -g cordova
npm install -g stylus
npm install
jspm install
cordova prepare
```

Add Platforms
=============
- `cordova platform add ios`
- `cordova platform add android`

Run
======
To run in a web browser:
```
cordova run browser
```

To run in an iOS simulator (xcode is required):
```
cordova build ios
cordova emulate ios
```

To run in an android simulator:
```
cordova build android
cordova emulate android
```
