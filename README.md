## BabylonJS starter ##
This repo offers an easy to use starter kit for a BabylonJS project. You
can use it to create a client only but if you also want to do some 
server side stuff you can easily implement it in the server class.

## Features ##
* BabylonJS
* TypeScript
* Webpack

## Project structure ##
```
├── README.md
├── bin
│   └── server.ts - Used to start the node server
├── nodemon.json - Nodemon config
├── package.json - Dependencies
├── src
│   ├── client
│   │   ├── assets - Place your assets here
│   │   ├── index.html - Index html template
│   │   ├── main.ts - Client code starts here
│   │   ├── style.css - Global styling
│   │   └── vendor.ts - Import vendor packages here
│   ├── config
│   │   ├── environment.ts - Environment configuration
│   │   ├── paths.ts - Paths to client, server, dist, etc
│   │   ├── webpack.common.ts - Webpack common config
│   │   ├── webpack.dev.ts - Webpack development config
│   │   └── webpack.prod.ts - Webpack production config
│   └── server
│       └── server.ts - Express Node.js server
└── tsconfig.json

```

## Getting Started ##
1. Run `npm install`
1. Run `npm start`
1. Check http://localhost:3000 in your browser
1. Start developing in `src/client/main.ts`

## Available commands ##
* `npm start` - Start a local development server with a watcher for 
client and server side changes
* `npm run build` - Bundle the client to the dist folder
* `npm run start:prod` - Start a server with the dist version
