// // //it is the firat file in the project
// // //it needs to be called as index.js because webpack looks for this file by default
// // // it is the entry point of the application and  which is the module bundler in this project expects to find
// // //it is the first file to be executed when the application starts

// // import React from "react";
// // import ReactDom from "react-dom/client";

// // function App() {
// //   return <h1>Hello World!</h1>;
// // }
// // //version 18 of React uses the new root API for rendering components
// // // const root = ReactDom.createRoot(document.getElementById("root"));
// // // root.render(<App />);

// // //before version 18, React used ReactDom.render to render components
// // //but now it uses ReactDom.createRoot for better performance and features/
// // //React.render(<App />, document.getElementById("root"));

// // // here we are importing React and ReactDom from their respective packages
// // // React is used to create components and ReactDom is used to render those components to the DOM
// // // We define a simple functional component called App that returns a heading element
// // // Finally, we create a root element using ReactDom.createRoot and render the App component into the DOM
// // // This is the basic setup for a React application using Webpack as the module bundler
// // // This code will be bundled by Webpack and served to the browser
// // // The application will display "Hello World!" on the web page when it is run
// // // This is a simple React application setup using Webpack
// // // It serves as a starting point for building more complex applications
// // // You can add more components, styles, and functionality as needed
// // // This file is essential for the application to run and is the first point of entry for the
// // // React application
// // // It is important to ensure that this file is correctly configured in the Webpack configuration
// // // to ensure that the application builds and runs correctly
// // // This file is typically located in the src directory of a React project
// // // and is the main entry point for the application
// // // It is a good practice to keep this file clean and organized
// // // as it serves as the foundation for the entire application
// // // You can also add comments to explain the code and its purpose

// // //strict mode is a way to opt in to a restricted variant of JavaScript
// // // that helps you write cleaner and more reliable code
// // // It can help you catch common mistakes and unsafe actions
// // // such as using deprecated APIs or accessing properties that are not defined
// // // It is a good practice to use strict mode in your React applications
// // // You can enable strict mode by wrapping your application in <React.StrictMode> tags
// // // This will enable strict mode for the entire application
// // // It is especially useful during development to catch potential issues early
// // // You can also use strict mode in specific components by wrapping them in <React.StrictMode> tags
// // // This allows you to enable strict mode for specific parts of your application
// // // It is a good practice to use strict mode in your React applications
// // // as it helps you write cleaner and more reliable code
// // // It is also a good practice to keep your code organized and modular
// // // by separating components into different files and directories
// // // This makes it easier to maintain and scale your application

// // const root = ReactDom.createRoot(document.getElementById("root"));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // // This will render the App component inside the root element
// // // The <React.StrictMode> component is used to enable strict mode for the application

// // //debugging is an important part of the development process
// // // It helps you identify and fix issues in your code
// // //if you want to see the output of your updates in your code first check wheather the webpage is running or not
// // // If it is not running, you can start the development server using the command `npm start in the terminal
// // // This will start the development server and open the application in your default web browser
// // //if it is running and you cannot seee the output of your updates, you can try refreshing the page or
// // // 'control+c' in the terminal to  stop the webpage and start again using `npm start`
// // // This will ensure that you are seeing the latest version of your code
// // // You can also use the browser's developer tools to inspect the elements and see if there are
// // // any errors in the console

// // //eslint is a tool that helps you find and fix problems in your JavaScript code
// // // It can help you catch common mistakes and enforce coding standards
// // // You can configure eslint to use specific rules and plugins
// // // to ensure that your code follows best practices and is consistent

// // //COMPONENTS AND COMPONENT TREE ??

// // from now below we will see the concept of resuabiility in React components
// import React from "react";
// import ReactDom from "react-dom/client";

// function App() {
//   return (
//     //<h1>Hello World!!!!</h1><Pizza />

//     <div>
//       <h1>Hello World!!!!</h1>
//       <Pizza />
//     </div>
//   );
// }
// // so basically what happened in the above code is that we can execute  only one component at a time when because we return a single element every time
// // but we can return multiple elements by wrapping them in a single parent element like a div
// // this is called the component tree in React, where components can be nested inside each other
// // and this allows us to create complex UIs by combining simple components
// // now we will create a new component called Pizza and render it inside the App component
// //this is how we can create reusable components in React or nesting components inside each other

// // By nesting we can nest componets in the top level but not the function/component  declaration
// //like we cannot nest the Pizza component inside the App component function declaration
// // but we can nest it inside the return statement of the App component

// function Pizza() {
//   return <h1>Pizza</h1>;
// }
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import reactdom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    // for using className in JSX, we use className instead of class
    // because class is a reserved keyword in JavaScript
    // and JSX is a syntax extension for JavaScript
    // so we use className to apply CSS classes to elements in JSX here we are using markup rules so we have made the div  to main in menu function
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  //these below three lines are rendering the pizzas data using conditional rendering
  // we can use the pizzaData array to render the list of pizzas
  // if the array is empty, we get output of "zero"
  //the logic i mean the conditional rendering happened below with the ul the pizza data.

  const pizzas = pizzaData;
  //const pizzas = [];
  const numpizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* we rendered the list of pizza learn more below */}

      {/* {numpizza > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza obj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/*the above code is rendered with conditional or logical operator . the below code is rendered with ternaries statements which has 3 parts in the statement */}
      {numpizza > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza obj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}

      {/* The above code is a conditional rendering that checks if the numpizza is greater than 0

      {/* <Pizza
        name="pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}
// props are the properties that we pass to a component
// they are used to pass data from a parent component to a child component more detiled explaination is below
function Pizza({ obj }) {
  console.log(obj);
  //we can use multiple return statements in a component to return some output we want like below
  //if (obj.soldOut) return null;
  return (
    <li className={`pizza${obj.soldOut ? " sold-out" : ""}`}>
      {/* we can use template literals to conditionally add a class to the li element by " ` ` "  see the above line of code*/}
      <img src={obj.photoName} alt={obj.name} />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{obj.soldOut ? "Sold Out" : obj.price}</span>
      </div>
    </li>
  );
}
// the above code also is updated by removing props and using destructuring to access the properties directly
// destructuring is a way to extract values from an object or an array and assign them to variables
// in the above code, we are destructuring the obj parameter to access the properties directly
// this allows us to write cleaner and more concise code
// for example, instead of writing obj.name, we can write name directly
// this makes the code more readable and easier to understand
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openhour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour} and {closeHour} hours.
        </p>
      )}
    </footer>
  );
}
// The Order component is used above in the Footer component but as the code is more complex we have moved it to a separate function
// It receives props and uses them to display a message and a button
function Order(closeHour, openHour) {
  <div className="order">
    <p>
      Wer'e open from {openHour}:00 to {closeHour}:00. Come visit us or order
      online.
    </p>
    <btn className="btn">Order</btn>
  </div>;
}
const root = reactdom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//what is jsx?
//there is a difference between library and a framework
//react is a library for building user interfaces, not a framework
//it allows you to create reusable components and manage the state of your application
//jsx is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files
//it is not a requirement to use jsx in react, but it is a common practice

// Assuming you mean "object," the object in that code is the style variable.
// In JavaScript, an object is a collection of key-value pairs enclosed in curly braces {}. It's used to group related data and functionality.
// Breakdown of the Code
// In your example:
// const style = { color: "red", fontSize: "44px", textTransform: "uppercase" };
// style is the name of the constant variable holding the object.
// The {...} defines the object itself.
// color, fontSize, and textTransform are the keys (or properties).
// "red", "44px", and "uppercase" are the values assigned to those keys.
// This style object is then passed to the style attribute of the <h1> element in your React JSX code, applying those CSS properties as inline styles.

//PROPS
//props are short for properties and they are used to pass data from a parent component to a child component in React
//they are read-only and cannot be modified by the child component
//props are passed as attributes to the child component when it is rendered
//in the above code, we are passing the name, ingredients, photoName, and price
//as props to the Pizza component
//the Pizza component receives these props as an object and can access them using the props parameter
//for example, props.name will give us the name of the pizza
//this allows us to create reusable components that can be used with different data
//props are a fundamental concept in React and are used to create dynamic and reusable components

//span
//is used to apply styles to a specific part of the text
//in the above code, we are using span to apply styles to the price of the pizza
//it allows us to style the price separately from the rest of the text
//this is useful when we want to apply different styles to different parts of the text
//span is an inline element and does not create a new line in the document
//it is commonly used to apply styles to a specific part of the text without affecting the layout
//this is a simple React application that displays a list of pizzas
//it uses components to create a modular and reusable structure

//RENDERING A LIST OF PIZZAS
// // The Menu component renders a list of pizzas using the Pizza component
// // It maps over the pizzaData array and passes each pizza object as props to the Pizza
// // component
// // The Pizza component receives the props and renders the pizza details
// // This allows us to create a dynamic and reusable component that can be used with different data
// here we render because we want to display the list of pizzas in the Menu component
// // we can also use the map method to iterate over the pizzaData array and render each
// pizza as a list item in the Menu component
// // The map method creates a new array by applying the provided function to each element of the
// pizzaData array
// // This allows us to create a dynamic list of pizzas that can be rendered in the Menu component
// // The Pizza component receives the props and renders the pizza details
//  <ul className="pizzas">
//         {pizzaData.map((pizza) => (
//           <Pizza obj={pizza} key={pizza.name} />
//         ))}
//       </ul>
