# TypeScript-Express-React Starter
This is a basic layout for a web application built with [TypeScript](https://www.typescriptlang.org), powered by [React](https://reactjs.org/), and served with [Express](https://expressjs.com/). It uses [Webpack](https://webpack.js.org/) for compilation/minification and [React-Bootstrap](https://react-bootstrap.github.io/) for styling.

## Installation

### Cloning
After cloning the repository, simply run `npm install` to get things ready (This project will require NodeJS and NPM to be installed).

### NPM
Eventually I'd like to get around to making this an NPM module

## Usage
There are two key steps before this project will run.

### Step 1: Transpile to JavaScript
This app is built on TypeScript, which will need to be compiled.

The following command is used to run the TypeScript compiler
```bash
npm run compile
```

However, the following command will set file watchers that will automatically cause changed files to be recompiled.
```bash
npm run compile_watch
```

*Note: The source code for the app sits in the `src` folder, but compiles to the `public` folder.*

### Step 2: Pack your JavaScript
Webpack is used to take all of the JavaScript you've written and smash it down into a single, lightweight file.

The following command is used to run Webpack
```bash
npm run webpack
```

However, the following command will set file watchers that will automatically cause changed files to be recompiled.
```bash
npm run webpack_watch
```

Your newly packed code can be found in `public/javascript/app.js`, and is already linked into the base html.

If you are running both the TypeScript and Webpack watchers, then the TypeScript will create the JavaScript files first, which Webpack will eventually notice and compile down into the single `app.js` file.

## Deploying
Once your code is compiled and packed, the app is ready to go.

Start your express server using the following.
```bash
npm start
```

This app by default starts on port 3500. You can always change that in `bin/www`.

## Contact
If you find major bugs, feel free to log them on [github](https://github.com/calvinMcM/TypeScript-Express-React-Starter).
Same with feature requests, though honestly, I'm not looking to run a whole lot of maintenance.

## Licensing
This project is literally mostly just npm modules with a little bit of duct tape. Use it, change it, do whatever you like - I'm not even putting license headers on, so...