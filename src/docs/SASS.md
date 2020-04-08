![crying_picture](crying.gif)

-----
*Me, trying to make SCSS working on styleguidist for the first time*

-----

##### Ingredients : 
- `yarn add node-sass`
- `yarn add css-loader`
- `yarn add style-loader`
- if not already : `yarn add babel-loader`
- `yarn add [@babel/preset-react]`
- modifications on `styleguide.config.js`
- a new `.babelrc` file
- Thanks so much Musti-91 -> https://dev.to/musti91/set-up-react-styleguidist-with-cra-3ec2 

**Optionnal** : to initiate a global SCSS stylesheet, create a new styles folder, an index.scss file into it and add to your `styleguide.config.js`
``` xml
    require: ['./src/styles/index.scss']
```


##### Recipe 

- yarn add all items that can be 
- in your fresh new `.babelrc`, paste this to activate :

``` xml
{
    "presets": ["@babel/preset-react"]
}
```

- In your `styleguide.config.js` add : 

``` xml
 webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },
```
- Replace all CSS files and import in your React app by SCSS
- restart your server


That's all set 💥