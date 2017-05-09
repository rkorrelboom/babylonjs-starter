## BabylonJS starter ##
This repo offers an easy to use starter kit for a BabylonJS project. You
can use it to create a client only but if you also want to do some 
server side stuff you can easily implement it in the server class.

## Features ##
* BabylonJS
* TypeScript
* Webpack

## Directory structure ##

* bin
    * server.ts
* src
    * client
        * assets - Put your assets here
        * index.html
        * main.ts - The client starts here
        * style.css
        * vendor.ts - Import vendor packages here
    * config
        * environment.ts
        * paths.ts
        * webpack.common.ts
        * webpack.dev.ts
        * webpack.prod.ts
    * server
      * server.ts

## Getting Started ##
1. Run `npm install`
1. Run `npm start`
1. Check http://localhost:3000 in your browser

## Available commands ##
* `npm start` - Start a local development server with a watcher for 
client and server side changes
* `npm run build` - Bundle the client to the dist folder
* `npm run start:prod` - Start a server with the dist version
