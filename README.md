# Buildtools

## There are 3 branches:

1. learn-babel
2. learn-webpack
3. rock-paper-bundle

## Comaparing different Build Tools

1. Webpack

- Custom configuration
- Support for a variety of module types and languages
- able to write our own custom loader

2. Parcel

- little configuration needed
- easy to install and use right away
- supports code-splitting with no entry point configuration
- built-in bundling for HTML, CSS and JavaScript
- Live reloading via Hot Module Replacement (HMR)

3. esbuild

- is a JavaScript bundler that is designed to be fast
- Extremely fast bundling
- known for its fast bundling times, with the ability to bundle approximately 10 to 100 times faster than similar build tools

4. Vite

- a build tool that uses `Rollup` for bundling
- provides a development server that supports ES module imports and exports
- uses `esbuild` behind-the-scenes to pre-bundle dependencies in the browser to reduce dev server start times
