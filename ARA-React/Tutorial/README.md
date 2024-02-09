## Getting Started with the creation of React App
#### Create React App:
1. 
```
npx create-react-app my-react-app
```
2. 
```
cd my-react-app
``` 
3. 
```
npm run start
```
![[Pasted image 20231115234503.png]]

#### Create Vite App:
Above strategy would take a lot of time to start our react project. There is another utility to opt, using vite:
1. 
```
npm create vite@latest
```
2. 
```
cd project-name
```
3. 
```
npm run dev
```
![[Pasted image 20231115234537.png]]

### *Note:* 
*Got Confused which type of command should we use to start our particular app (vite or basic app)?
`npm run ?`
Go to the `packge.json -> scripts` and choose the appropriate command to run app.*

### React with bootstrap

#### By staying at `.html` file
Add the following tags to your index.html file
At `<head>`:
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
```
At bottom of the `<body>`
```
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

#### By adding dependencies:
You can also add bootstrap at your dependencies by the following commands
```
npm i bootstrap jquery popper.js
```
After this command the bootstrap will be added in your dependencies.
Import the following packages/bundle in component `.jsx` files to use bootstrap
```
import 'bootstrap/dist/css/bootstrap.min.css';   
import $ from 'jquery';   
import Popper from 'popper.js';   
import 'bootstrap/dist/js/bootstrap.bundle.min';
```


### React with Tailwind CSS
1. Setup a Vite project
2. Inject tailwind through the following commands
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
3. Now change the content of `tailwind.config.js`
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
4. Add the directives to `.css` files:
```
@tailwind base; 
@tailwind components; 
@tailwind utilities;
```

## About Components
Always capitalize first letter of components that have been exported in both vite and basic react app.
*Use uppercase letter in file names as it is the best practice.*

## How to create custom react with JSX
In this section, there is an idea implemented by me in order to have a glance over the inner working of `REACT JSX`. 
How does it work with simple HTML code when it is unable to read/implement it directly? By directly, I mean, It converts into JavaScript code under the hood to make it readable for compiler to display our actual HTML code.
![[Pasted image 20231116230640.png]]
This is the simple JSX code that will be converted into JavaScript code in order to run it. In the following, we can see how that code is converted to the JavaScript code.

1. Create a folder named as `custom-react`
2. Create `index.html` and `custom_react.js` in which we will see how react jsx will convert for its readability.

![[Pasted image 20231116225620.png]]
In this file, the `body` has `#root` in which JSX html would be injected by `custom_react.js` 
![[Pasted image 20231116225922.png]]
![[Pasted image 20231116230045.png]]
The `custom_react.js` is the implementation of JSX html code, I have attached a picture of function `Link()`, using JavaScript. You can have an idea of how does each attributes make and implemented under the hood.

*Save it -> Go Live with `index.html` file and you'll see a button of `a` tag that will redirect you to `href: 'google.com'` in a new page `target: _blank` when you'll click on it.*


### Getting deeper into JSX file and its syntax

Now returning back to the vite(React) app, we have created our custom attribute of type `a` in vite.  But it will never display/render `reactElement` because in vite project it uses `REACT.render` mechanism in order to display our object which means it requires a different syntax to populate our element with html code. 

![[Pasted image 20231118144200.png]]

#### Note:
Here the question rise that how was it running in our custom react?
- In our `custom_react.js` it was running successfully without any kind of synthetic error because we created our own `customRender` function.

First thing to keep in mind is that we can use the same function using simple HTML code under some function like below
![[Pasted image 20231118144425.png]]

But if you want to see how can we implement the same function using another way that is different from simple HTML code.
![[Pasted image 20231118145025.png]]

*If you will use that variable `reactElement` under some tag in `.render` then It will not display our react tag but a text of our variable name `reactElement`*
![[Pasted image 20231118150139.png]]

*The last text is our variable name used in `React.render` function.* 
![[Pasted image 20231118150156.png]]

*To use variable with multiple functions under some tag or with multiple tags like `<App />` then we have to use curly brace syntax `evaluated expression` in which our `reactElement` would be treated as a variable not as a text.*
![[Pasted image 20231118150623.png]]
![[Pasted image 20231118150631.png]]

*Voila! We have got our `a` tag attribute.*

### Knowledge regarding REACT and Virtual DOM 
#### React Fiber:
React Fiber is an algorithm that is used for rendering the whole document, under the hood. But what's so special about it?
In previous times, if we want to update a simple and small task it used to create the whole tree again to layout web and then inject JavaScript that we call `hydration process`. In simpler terms, it re-render the whole document which takes a lot of time and that was the reason we saw the loading sign. We have not just got rid of loading sign yet but it is now limited.

Now, the `incremental rendering` is being introduced in which it split the rendering work into multiple chunks and update only those UI components or animations that needs to be updated despite the whole virtual DOM. 

#### Reconciliation
This is an algorithm that REACT uses to differentiate one tree with another and it then determines 
which part needs to be updated.
Reconciliation is also known as `Virtual DOM`. Under the hood, it works like this:
If we use a hook `setState` then it generates the whole new tree. It diffed with the previous one and determines which chunks of operations need to be used in order to update our document according to our requirement. 

*Please dont mix-up the terms reconciliation and rendering. These both are different methods that REACT use in order to update our DOM. 
Firstly, REACT uses `reconciliation` process that determines which part of a tree needs to be changed then `rendering` display our document.

### Hooks
React is more powerful tool when it comes to the UI. If we want to update the counter that is located at different places, we use hooks to update values accordingly and simultaneously.
![[Pasted image 20231120210030.png]]

Here when I click `Increase Value` it should update the counter located at our virtual DOM.
There are multiple hooks that have different jobs associated with them. But to accomplish our job, the appropriate hook is `useState`
#### useState
	useState is a type of hook that changes the value of our variable that is used at different locations, instantly, with just a click of a button.
- useState take a data as a parameter and return value [that we passed as a parameter] and a function through which we can modify/update the value/data.
- In the following image, we passed `15` as a parameter in `useState` hook that returns a value in a variable named `counter` and a function that we named after `setCounter`. 
- In `check` function we have `setCounter`(ed) with the addition of 1 to the recent value present at the `counter` variable.

![[Pasted image 20231120210740.png]]


### REACT Components
In `src` folder, create `components`. Add `.jsx` files and write your appropriate functions. In the below image, I have inserted bootstrap code available in [Cards | React Bootstrap (react-bootstrap.github.io)](https://react-bootstrap.github.io/docs/components/cards):
![[Pasted image 20231121213125.png]]
In the `BasicExample` I am receiving two types of parameters `name` and `age` with default value `Age is missing`. 
The method of passing the values from `App.jsx` folder to the components is:
![[Pasted image 20231121213359.png]]
We have imported `Card` from `components` directory then used it in return function. You can have an idea how how can we pass values as a parameter by having a glance over the image.

#### Most Common React Interview Question
In the following image, is our value incremented by 3 when we press `Increase Value`
![[Pasted image 20231122200752.png]]
![[Pasted image 20231122200847.png]]
It won't increment our counter to 3. Because react schedules the time for our setter used inside the same function. Since all the setters are same, then latest would be manipulated and others would be overwritten/ignored. 
If we want to overcome this scenario, we have to store the value of counter by implementing it via function. 
![[Pasted image 20231122210020.png]]
We are using functional form of setter state to store value in `prevCounter` and whenever the latest setter would implement, it will have the value incremented by 2. 

*REACT batches all the state updater to be implemented before the termination of a function or at the time when it is scheduled. Whenever REACT tries to implement the state updater it will implement the callback function then store the value received by callback and use it in the next state updater, in order. 
REACT ensures that when the latest state updater will be implemented then all callback functions is executed in its order.*


#### useCallback
If you create a function inside a component then it needs to be compiled every time you call a component to re-render. It will slow the performance of your app when there are multiple functions. To solve this issue, `useCallback` can be used where it will memoize the function and whenever the dependencies change or a slight change occurs then it will fetch the memoized version of function instead of compiling the whole function again.   
Usage of `useCallback`:
#### useEffect
`useEffect` is often used in conjunction with `useCallback` to perform actions whenever dependencies change. 
Usage of `useEffect`:
#### useRef
It is used to add reference in a component. We can perform actions to referenced object with the re-rendering of an object or the change of its state
Usage of `useRef`:

### `_____________________________________________________________`
*Written By: Abdul Rehman Amer*