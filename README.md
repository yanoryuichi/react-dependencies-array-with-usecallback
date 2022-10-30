Setting up a React app
======================

```
mkdir myapp
cd myapp
git init
npm init -y

npm install --save react@17 react-dom@17
npm install --save @babel/runtime
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader @babel/plugin-transform-runtime
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin style-loader css-loader file-loader
npm install --save-dev cross-env
```