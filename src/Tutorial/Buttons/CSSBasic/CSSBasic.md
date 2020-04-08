##### Add default props

First of all, we gonna set default properties to our button. Look at the chart and the snippet. Only color button is set, whereas, our button still have a text. Why ? Default props ! 

Try to remove the color property on the button, now, it is red. Default props will never bring you down (actually, this is now exactly true, if you'll only let the property color, the button will be white, but we gonna see how to fix that later), and allows your components to still look like a component, even if there no special properties to add to it. (if you are wondering what I am saying this, try to remove properties from my previous button :D)


##### SCSS time 😻😎
SCSS is not included with CRA. If we want to use it, we'll have to install it and to make it interact with styleguidist. If you don't get it, see the [Installing SCSS without going mad]() section


```jsx                       
import Button from "./CSSBasic"; 

<Button color='blue'/>
```