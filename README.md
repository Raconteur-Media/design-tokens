# Raconteur Design Tokens

Raconteur Media Ltd Design Tokens.

-   [Edit](src/raconteur-theme.js)
-   [Export](index.js)

## Installation

Before installing, make sure you have an `.npmrc` file at the same level of `package.json` containing:

```
@yumyo:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<token>
```

_See_ "[Configuring npm for use with GitHub Package Registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry)."

## Usage

`$ npm install @raconteur-media/desing-tokens`

Or add this package to your `package.json` file:

```
"dependencies": {
    "@raconteur-media/desing-tokens": "1.0.0"
  }
```

## Content

```
.
├── CHANGELOG.md
├── README.md
├── dist
│   ├── index.cjs               // Theme UI Raconteur Design Tokens in CommonJS format
│   ├── index.css               // Theme UI Raconteur Design Tokens as CSS variables 
│   ├── index.js                // Theme UI Raconteur Design Tokens in ES format (entry point copy of raconteur-theme.js)
│   ├── index.json              // Theme UI Raconteur Design Tokens in JSON format 
│   ├── index.scss              // Theme UI Raconteur Design Tokens as SASS variables
│   ├── rac-dsm-theme.cjs       // DSM Raconteur Design Tokens in CommonJS format
│   ├── rac-dsm-theme.js        // DSM Raconteur Design Tokens in ES format
│   ├── rac-dsm-theme.json      // DSM Raconteur Design Tokens in JSON format
│   └── rac-dsm-theme.scss      // DSM Raconteur Design Tokens in SASS format
├── node_modules [237 entries exceeds filelimit, not opening dir]
├── package.json
├── scripts
│   ├── js-to-scss.js
│   ├── json-to-css-variables.js
│   ├── theme-to-custom-properties.js
│   └── theme-to-json.js
├── src
│   ├── raconteur-theme.js      // Theme UI Raconteur Design Tokens
│   └── style-data.json         // DSM Design Tokens
└── yarn.lock
```

### Build

#### Theme UI

Any update shoudl occur in `src/raconteur-theme.js` To generate any other variation just run `yarn theme`

#### DSM

To get InVision DSM tokens and generate any other variation just run `yarn dsm`

### Script

`yarn dsm` To update tokens based on InVision DSM

`yarn theme` To update tokens based on Theme UI

### Refs

-   [Js to SCSS](https://github.com/MakhBeth/js-to-scss#readme)
-   [JSON to CSS Variables](https://github.com/tcarlsen/json-to-css-variables#readme)

### TO DO

- [ ] Get InVision DSM tokens in a Theme UI Format to achive an autoated design/dev sync.
- [ ] Add more refs.
