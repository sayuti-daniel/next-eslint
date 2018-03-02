# Next.js + ESLint

On the fly ESLint for Next.js project

## Installation

```bash
npm install --save next-eslint
```

or

```bash
yarn add next-eslint
```

## Usage

We will use `xo` for this example but you can choose any configuration out there.

### Setup

```bash
npm install --save-dev eslint-config-xo
```

or

```bash
yarn add --dev eslint-config-xo
```

### Configuration

#### ESLint

Add some ESLint config to your `package.json`

```json
{
  "name": "my-awesome-project",
  "eslintConfig": {
    "extends": "xo"
  }
}
```

Or use `.eslintrc`

```json
{
  "extends": "xo"
}
```

#### Next.JS

Create a `next.config.js` in your project

```js
// next.config.js
const withESLint = require('next-eslint')
module.exports = withESLint()
```

### Try it

Create a page file `pages/index.js`

```js
import logo from "../logo.svg"

export default () => <div><img src={logo} /><br />Hello World!</div>
```

### With options

You can also pass a list of options to the `eslint-loader` by passing an object called `eslintLoaderOptions`.

For instance, [to process and report errors only and ignore warnings](https://github.com/webpack-contrib/eslint-loader#quiet-default-false), you can write:

```js
// next.config.js
const withESLint = require('next-eslint')
module.exports = withESLint({
  eslintLoaderOptions: {
    quiet: true
  }
})
```

For a list of supported options, [refer to the webpack `eslint-loader` README](https://github.com/webpack-contrib/eslint-loader#options).

### Configuring Next.js

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withESLint = require('next-eslint')
module.exports = withESLint({
  webpack(config, options) {
    return config
  }
})
```
