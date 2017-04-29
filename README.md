![alt text](http://s18.postimg.org/ryklfhjwp/redova_logo.png "Redova")

Redova is a bare-bones [ReactJS](https://facebook.github.io/react/docs/getting-started.html) + [Cordova](https://cordova.apache.org/docs/en/5.0.0/guide/overview/index.html) boilerplate to get you started creating awesome mobile apps quickly.

## Setup
```
npm install -g jspm
npm install -g cordova
npm install -g stylus
npm install
jspm install
cordova prepare
```

## Add Platforms
- `cordova platform add ios`
- `cordova platform add android`

## Run
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
