![crying_picture](crying.gif)

-----
*Me, trying to make SCSS modules working on styleguidist for the first time*

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


That's all set ?? I thought so but ... NO

With these settings, styleguidist will build but, if you try to create a new `.scss` file linked to a component, it won't work.. at all (or if it worked, you are a lucky one.). Actually, our configuration lacks of a thing : activate modules. So, go back to `styleguide.config.js` and replace the area dealing with scss with these rules : 

``` xml
   {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },

``` 

NOW thanks to https://blog.jakoblind.no/css-modules-webpack/, we can play o/