# Object-Oriented programming

The four basic principles of object-oriented programming are:
- `Abstraction` - Modeling the relevant attributes and interactions of entities as classes to define an abstract representation of a system.
- `Encapsulation` - Hiding the internal state and functionality of an object and only allowing access through a public set of functions.
- `Inheritance` - Ability to create new abstractions based on existing abstractions.
- `Polymorphism` - Ability to implement inherited properties or methods in different ways across multiple abstractions.


## Abstraction

Abstraction is one of the key concepts of object-oriented programming (OOP) languages. Its main goal is to handle complexity by hiding unnecessary details from the user. That enables the user to implement more complex logic on top of the provided abstraction without understanding or even thinking about all the hidden complexity.

I’m a coffee addict. So, when I wake up in the morning, I go into my kitchen, switch on the coffee machine and make coffee. Sounds familiar?

Making coffee with a coffee machine is a good example of abstraction.

You need to know how to use your coffee machine to make coffee. You need to provide water and coffee beans, switch it on and select the kind of coffee you want to get.

The thing you don’t need to know is how the coffee machine is working internally to brew a fresh cup of delicious coffee. You don’t need to know the ideal temperature of the water or the amount of ground coffee you need to use.

Someone else worried about that and created a coffee machine that now acts as an abstraction and hides all these details. You just interact with a simple interface that doesn’t require any knowledge about the internal implementation.

Objects in an OOP language provide an abstraction that hides the internal implementation details. Similar to the coffee machine in your kitchen, you just need to know which methods of the object are available to call and which input parameters are needed to trigger a specific operation. But you don’t need to understand how this method is implemented and which kinds of actions it has to perform to create the expected result.

## Encapsulation

By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java. This concept is also often used to hide the internal representation, or state of an object from the outside. This is called information hiding.

The general idea of this mechanism is simple. For example, you have an attribute that is not visible from the outside of an object. You bundle it with methods that provide read or write access. Encapsulation allows you to hide specific information and control access to the internal state of the object.

If you’re familiar with any object-oriented programming language, you probably know these methods as getter and setter methods. As the names indicate, a getter method retrieves an attribute and a setter method changes it. Depending on the methods that you implement, you can decide if an attribute can be read and changed. You may also control if the attribute is read-only or not visible at all. 

### Access Modifiers

- private
- protected
- public