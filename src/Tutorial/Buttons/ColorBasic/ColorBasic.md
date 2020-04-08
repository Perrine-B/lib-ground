##### JS File -> Have you met Proptypes ?
If you are a bit accustomed to React, you should know its type validator. And, because world is great, you can use it to generate that props and methods' chart above. Ok, cool but how ?

For a first try, we gonna add two props : color and text and document the onClick method. Well then, how make that props to be seen into the chart ? Just by using Proptypes definition as usual.

``` xml
 ColorBasic.propTypes = {
    /** Text content belonging to the button */
    text: PropTypes.string,
  
    /** Color used for background and border */
    color: PropTypes.string,
  
    /** What happened when you click */
    onClick: PropTypes.func
};

```

-----
Adding those lines into the js file will automatically generate the corresponding chart on the top of your component. You can see that the 'default' column is empty by now. But its usage gonna go with the third component.



```jsx
import Button from "./ColorBasic";  

/**
 * Your event Listener callback
 */
const doSmthg = () => {
    /* Open your console and click on the button*/
        console.log('hey ya you!')
    }

/** 
 * Your component and its props 
 */

<Button text='it works' color='blue' onClick={() => doSmthg()}/>
```
