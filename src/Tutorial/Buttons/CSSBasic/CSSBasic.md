##### Add default props

First of all, we gonna set default properties to our button. Look at the chart and the snippet dealing with the first button. Nothing is set, whereas, our button have a text. Why ? Default props ! 

Try to remove the text property on the second button, now, its text is exactly the same as the first button. Default props will never bring you down (actually, this is now exactly true, if don't remove all code the button will be white, but we gonna see how to fix that later), and allow your components to still look like a respectable component, even if there no special properties to add to it. (if you are wondering what I am saying this, try to remove properties from the basic button and see the disaster 
 :D)


##### SCSS time 😻😎
SCSS is not included with CRA. If we want to use it, we'll have to install it and to make it interact with styleguidist. If you don't get it, see the [Installing SCSS modules without going mad](#/Tutorial/Install%20SCSS%20modules%20without%20going%20mad) section.
OK Here it is! Actually, there is another bug to fix to use the '&' operator in scss, but we shall see that tomorrow XD. We have now three buttons and we want to make different sizes. 

###### Set S, M and L sizes
To start we gonna decide that size will be S = padding '1em', M = padding '1.5em' and then... Default size will be S. Ok now how to translate that in code ?


```jsx                       
import Button from "./CSSBasic"; 

<div>
<Button />
<Button text='Sorry for colors'/>
<Button size='M' text='Do better next time'/>
<Button size='L' text='I swear'/>
</div>
```