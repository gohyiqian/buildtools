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

### babel-preset-env

- Documentation: https://github.com/browserslist/browserslist
- `babel-preset-env` allows us to provide a list of browsers we want to be supported using a file named `.browserslistrc`.
- `defaults` - A good default configuration, which covers most of the browsers a developer could expect users to be on.
- `last 2 Explorer versions` - make sure that our project is supported by the last two versions of Internet Explorer.
- `cover 99.5%` - make sure your application supports 99.5% of the users of the internet.

List all browsers supported by your .browserlist file using the following command:

```
npx browserslist
```
