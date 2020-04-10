##### Add fonts
To maka a component, I will probably will need to add additionnal fonts to my library. Styleguide offers a way to import fonts, stylesheet, favicons and others utils through a very useful tool : the template section of your `styleguide.config.js`. Let's go on Google Fonts and choose one. I will do as usual and then, instead of import into an index html I will add this to my config file: 

```xml
template: {
    head: {
      links: [
        {
          href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap",  
          rel: "stylesheet",
        },
      ],
    },
  },

```


##### Multiple props
##### Disabled components


```jsx                       
import Button from "./MultipropsButton"; 

<div>
<Button />
<Button text='Sorry for colors'/>
<Button size='M' text='Do better next time'/>
<Button size='L' text='I swear'/>
</div>
```