*All this text is from the BasicButton.md file [why saying that ? See you next comp']* 🚀 

-----

##### Step 1 : JS file -> Do your component 

Here, the code in our js file will be the simplier React component ever : 
 
 `const BasicButton = () => {<button> It works! </button>}`
 
  Notice difference between the title of our component and its title inside the page. This can be set by the use of the `@visible` tag as a comment above targeted component. 
  
  ##### Step 2 : MD file -> Import it
  Then, import that component into your .md file, using markdown enclosing tag ```jsx```, to make it public.
  

The ```jsx``` section into your .md file generates the two areas below : 
- the window that demonstrates the component (here, this astonishing button)
- the view of the code which shows all code that has been placed into the section

It is real important to make the difference between the code below (which make the element effective through the page) and the code of our component which is located in the js file.



```jsx                       
import Button from "./BasicButton"; 

<Button/>
```


Now, we have a glorious HTML5 fancy button 😁
It does actually do ... nothing. We can do better and add some steps !