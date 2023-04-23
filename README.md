# buildtools

## Using Babel

```
npm init -y
npm i -D @babel/preset-env @babel/cli
touch .babelrc
```

### Add the following preset to `.babelrc`:

```js
{
  "presets": ["@babel/preset-env"]
}
```

### Add this build command to `package.json`:

```json
// run on babel and store output in a out folder
"scripts" : {
  "build" : "babel src -d out"
}
```

```
npm run build
```
