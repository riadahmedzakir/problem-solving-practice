# Spring boot interview prep
## Spring vs Spring Boot

| Spring | Spring Boot | 
| ------ | ----------- |
| A web application framework based on Java | A module of Spring | 
| Provides tools and libraries to create customized web applications | Used to create a Spring application project which can just run/ execute | 
| Spring is more complex than Spring Boot | Spring Boot is less complex than the Spring framework |
| Takes an unopinionated view | Takes an opinionated view of a platform | 

## What is Spring Boot and mention the need for it?

Spring Boot is a Spring module that aims to simplify the use of the Spring framework for Java development. It is used to create stand-alone Spring-based applications that you can just run. So, it basically removes a lot of configurations and dependencies. Aiming at the Rapid Application Development, Spring Boot framework comes with the auto-dependency resolution, embedded HTTP servers, auto-configuration, management endpoints, and Spring Boot CLI.

So, if you ask me why should anybody use Spring Boot, then I would say, Spring Boot not only improves productivity but also provides a lot of conveniences to write your own business logic.

## Mention the advantages of Spring Boot

- Provides auto-configuration to load a set of default configuration for a quick start of the application
- Creates stand-alone applications with a range of non-functional features that are common to large classes of projects
- It comes with embedded tomcat, servlet containers jetty to avoid the usage of WAR files
- Spring Boot provides an opinionated view to reduce the developer effort and simplify maven configurations
- Provides CLI tool to develop and test applications
- Comes with Spring Boot starters to ensure dependency management and also provides various security metrics
- Consists of a wide range of APIs for monitoring and managing applications in dev and prod.
- Integrates with Spring Ecosystem like Spring JDBC, Spring ORM, Spring Data, Spring Security easily by avoiding boilerplate code. ( boilerplate—are sections of code that are repeated in multiple places with little to no variation.)

## Mention a few features of Spring Boot.

- `Spring CLI` – Spring Boot CLI allows you to Groovy for writing Spring boot application and avoids boilerplate code.
- `Starter Dependency` – With the help of this feature, Spring Boot aggregates common dependencies together and eventually improves productivity
- `Auto-Configuration` – The auto-configuration feature of Spring Boot helps in loading the default configurations according to the project you are working on. In this way, you can avoid any unnecessary WAR files.
- `Spring Initializer` – This is basically a web application, which can create an internal project structure for you. So, you do not have to manually set up the structure of the project, instead, you can use this feature.
- `Spring Actuator` –  This feature provides help while running Spring Boot applications.
- `Logging and Security` – The logging and security feature of Spring Boot, ensures that all the applications made using Spring Boot are properly secured without any hassle.

## Explain how to create a Spring Boot application using Maven.

Well, there are various approaches to create a Spring Boot application using maven, but if I have to name a few, then following are the ways to create a Spring Boot project/ application using maven:

- Spring Boot CLI
- Spring Starter Project Wizard
- Spring Initializr
- Spring Maven Project

## Mention the possible sources of external configuration.

There is no doubt in the fact that Spring Boot allows the developers to run the same application in different environments. Well, this is done with the support it provides for external configuration. It uses environment variables, properties files, command-line arguments, YAML files, and system properties to mention the required configuration properties. Also, the @value annotation is used to gain access to the properties. So, the most possible sources of external configuration are as follows:

- `Application Properties` – By default, Spring Boot searches for the application properties file or its YAML file in the current directory, classpath root or config directory to load the properties.

- `Command-line properties` – Spring Boot provides command-line arguments and converts these arguments to properties. Then it adds them to the set of environment properties.

- `Profile-specific properties` –  These properties are loaded from the application-{profile}.properties file or its YAML file. This file resides in the same location as that of the non-specific property files and the{profile} placeholder refers to an active profile.