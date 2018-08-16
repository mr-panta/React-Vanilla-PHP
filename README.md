# React + Vanilla PHP practice
This repository was created to demonstrate communications between React which is a frontend framework and Vanilla PHP which a backend language.

## Server Requirements
- PHP latest version
- NPM latest version

## Developing and Testing
1. Open `frontend` directory and type `npm install` to install node dependencies.
2. Type `npm start` to start React in development mode.
3. Open `backend` directory and type `php -S localhost:3001` to start backend php server.
4. Browse `http://localhost:3000` to test it.

## Deployment
Normally, React won't be going to deploy with NodeJS-wrapped which used in the development mode. React project has to be builded into a chuck of standard Javascript files and placed in the same directory on backend by doing the following steps.

1. Open `frontend` directory and type `npm install` to install node dependencies. (if you didn't do it before)
2. Edit the file named `frontend/src/env.json` by changing the value of `backendRoot` from `"backendRoot": "http://localhost:3001"` into `"backendRoot": ""`
3. Type `npm run-script build` to build React into ready-to-use files. Then, a directory named `build` will be created.
4. Copy all files in the `build` directory and paste on the `backend` directory.
5. Open `backend` directory and type `php -S localhost:3001` to start backend php server.
6. Browse `http://localhost:3001` to test it.

## To-see files
- backend/*
- frontend/src/App.js
