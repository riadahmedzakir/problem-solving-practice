# React Interview Prep

## What is React? 
- React is a front-end JavaScript library developed by Facebook in 2011.
- It follows the component based approach which helps in building reusable UI components.
- It is used for developing complex and interactive web and mobile UI.
- Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.

## Differentiate between Real DOM and Virtual DOM.

| Real DOM | Virtual DOM |
| --- | ----------- |
| It updates slow.| It updates faster.|
|Can directly update HTML | Can't directly update HTML. |
|Creates a new dom if element updates. | Updatese the JSX if element update |
|Dom manipulation is very expensive | DOM manipulation is very easy | 
| Too much of memory wastage | No memory wastage | 


## What are the features of React? 

- It uses the virtual DOM instead of the real DOM.
- It uses server-side rendering.
- It follows uni-directional data flow or data binding.

## List some of the major advantages of React.

- It increases the application’s performance
- It can be conveniently used on the client as well as server side
- Because of JSX, code’s readability increases
- React is easy to integrate with other frameworks like Meteor, Angular, etc
- Using React, writing UI test cases become extremely easy

## What are the limitations of React?

- React is just a library, not a full-blown framework
- Its library is very large and takes time to understand
- It can be little difficult for the novice programmers to understand
- Coding gets complex as it uses inline templating and JSX

##  What is JSX?

JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:

    render(){
        return(                
            <div>                    
                <h1> Hello World from Edureka!!</h1>        
            </div>
        );
    }

## What do you understand by Virtual DOM? Explain its works.

A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.

This Virtual DOM works in three simple steps.

- Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.
<img src="./../assets/virtual-dom-1.png">
- Then the difference between the previous DOM representation and the new one is calculated.
<img src="./../assets/virtual-dom-2.png">
- Once the calculations are done, the real DOM will be updated with only the things that have actually changed. 
<img src="./../assets/virtual-dom-3.png">

## Why can’t browsers read JSX?

Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.

## How different is React’s ES6 syntax when compared to ES5?

- require vs import

        // ES5
        var React = require('react');
    
        // ES6
        import React from 'react';

- export vs exports

        // ES5
        module.exports = Component;
 
        // ES6
        export default Component;

- component and function

        // ES5
        var MyComponent = React.createClass({
            render: function() {
                return
        
        <h3>Hello Edureka!</h3>
        ;
            }
        });
        
        // ES6
        class MyComponent extends React.Component {
            render() {
                return
        
        <h3>Hello Edureka!</h3>
        ;
            }
        }

- props

        // ES5
        var App = React.createClass({
            propTypes: { name: React.PropTypes.string },
            render: function() {
                return
        
        <h3>Hello, {this.props.name}!</h3>
        ;
            }
        });
        
        // ES6
        class App extends React.Component {
            render() {
                return
        
        <h3>Hello, {this.props.name}!</h3>
        ;
            }
        }

- state

        // ES5
        var App = React.createClass({
            getInitialState: function() {
                return { name: 'world' };
            },
            render: function() {
                return
        
        <h3>Hello, {this.state.name}!</h3>
        ;
            }
        });
        
        // ES6
        class App extends React.Component {
            constructor() {
                super();
                this.state = { name: 'world' };
            }
            render() {
                return
        
        <h3>Hello, {this.state.name}!</h3>
        ;
            }
        }

## How is React different from Angular?

| Topic | React | Angular |
| ----- | ----- | ------- |
| ARCHITECTURE | Only the View of MVC | Complete MVC | 
| RENDERING	| Server-side rendering | Client-side rendering |
|  DOM | Uses virtual DOM | Uses real DOM | 
| DATA BINDING | One-way data binding | Two-way data binding | 
| DEBUGGING	| Compile time debugging | Runtime debugging |
|  AUTHOR | Facebook | Google | 

## “In React, everything is a component.” Explain.

Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.

## What is the purpose of render() in React.

Each React component must have a render() mandatorily. It returns a single React element which is the representation of the native DOM component. If more than one HTML element needs to be rendered, then they must be grouped together inside one enclosing tag such as form, group,div etc. This function must be kept pure i.e., it must return the same result each time it is invoked.

## How can you embed two or more components into one?

    class MyComponent extends React.Component{
        render(){
            return(          
                <div>
                    <h1>Hello</h1>
                    <Header/>
                </div>
            );
        }
    }
    class Header extends React.Component{
        render(){
            return
                <h1>Header Component</h1>
        };
    }
    ReactDOM.render(
        <MyComponent/>, document.getElementById('content')
    );


## What is Props?

Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.

## What is a state in React and how is it used?

States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().

## Differentiate between states and props.

| Conditions | State | Props |
| ---------- | ----- | ----- |
| Receive initial value from parent component |	Yes | Yes | 
| Parent component can change value	| No | Yes |
| Set default values inside component | Yes | Yes |
| Changes inside component | Yes| No |
| Set initial value for child components | Yes | Yes |
| Changes inside child components | No | Yes | 

## How can you update the state of a component?

State of a component can be updated using this.setState().