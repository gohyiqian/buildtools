# Buildtools

## Using Webpack

```
npm install --save-dev webpack webpack-cli
```

### Add to Package.json

```json
"scripts": {
  "build": "webpack --watch",
},
```

### Entry point

- Default entry point is `./src/index.js.`
- But we can define a entry point

### Run Build

`npm run build` will create a `/dist` that stores the bundled file

### Create Webpack Config

```
touch webpack.config.js
```

### Add the following mode

- 'development' mode is used when we develop our app, producing a more readable version of the output.
- We switch to 'production' when we have a finished version, which makes the output less readable and more compact.

```js
module.exports = {
  mode: 'development',
  entry: './application/home.js',
  output: {
    filename: 'fast.js',
    path: path.resolve(__dirname, 'built'),
  },
};
```

### Add webpack dev server

A tool to preview our code and update it as we make changes.

```
npm install --save-dev webpack-dev-server
```

```json
"scripts": {
  "build": "webpack --watch",
  "start": "webpack serve"
},
```

```html
<script src="./dist/main.js"></script>
```

- Run npm run build on terminal.
- Then launch a second terminal and run the start command to serve the site.

### CSS Loaders

CSS files use two loaders: `css-loader` and `style-loader`

```
npm install --save-dev style-loader css-loader
```
