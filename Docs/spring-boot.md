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

## Can you explain what happens in the background when a Spring Boot Application is “Run as Java Application”?

When a Spring Boot application is executed as “Run as Java application”, then it automatically launches up the tomcat server as soon as it sees, that you are developing a web application.

## What are the Spring Boot starters and what are available the starters?

- `spring-boot-starter`: – This is the core starter and includes logging, auto-configuration support, and YAML.
- `spring-boot-starter-jdbc` – This starter is used for HikariCP connection pool with JDBC
- `spring-boot-starter-web` – Is the starter for building web applications, including RESTful, applications using Spring MVC
- `spring-boot-starter-data-jpa` – Is the starter to use Spring Data JPA with Hibernate
- `spring-boot-starter-security` – Is the starter used for Spring Security
- `spring-boot-starter-aop`: This starter is used for aspect-oriented programming with AspectJ and  Spring AOP
- `spring-boot-starter-test`: Is the starter for testing Spring Boot applications

## Explain Spring Actuator and its advantages.

Spring Actuator is a cool feature of Spring Boot with the help of which you can see what is happening inside a running application. So, whenever you want to debug your application, and need to analyze the logs you need to understand what is happening in the application right? In such a scenario, the Spring Actuator provides easy access to features such as identifying beans, CPU usage, etc. The Spring Actuator provides a very easy way to access the production-ready REST points and fetch all kinds of information from the web. These points are secured using Spring Security’s content negotiation strategy.

## What is Spring Boot dependency management?

Spring Boot dependency management is basically used to manage dependencies and configuration automatically without you specifying the version for any of that dependencies.

## Explain what is thymeleaf and how to use thymeleaf?

Thymeleaf is a server-side Java template engine used for web applications. It aims to bring natural template for your web application and can integrate well with Spring Framework and HTML5 Java web applications. To use Thymeleaf, you need to add the following code in the pom.xml file:

    <dependency>    
        <groupId>org.springframework.boot</groupId>    
        <artifactId>spring-boot-starter-thymeleaf</artifactId>    
    </dependency>    

## Can we change the port of the embedded Tomcat server in Spring boot?

Yes, we can change the port of the embedded tomcat server by using the application properties file. In this file, you have to add a property of “server.port” and assign it to any port you wish to. For example, if you want to assign it to 8081, then you have to mention server.port=8081. Once you mention the port number, the application properties file will be automatically loaded by Spring Boot and the required configurations will be applied on to the application.

## What is the need for Spring Boot DevTools?

Spring Boot Dev Tools are an elaborated set of tools and aims to make the process of developing an application easier. If the application runs in the production, then this module is automatically disabled, repackaging of archives are also excluded by default. So, the Spring Boot Developer Tools applies properties to the respective development environments.

## Mention the steps to create a Spring Boot project using Spring  Initializer.

Spring Initializr is a web tool provided by Spring. With the help of this tool, you can create Spring Boot projects by just providing project details. The following steps need to be followed to create a Spring Boot project using Spring Initializer:

- Choose the maven project and the required dependencies. Then, fill in the other required details like Group, Artifact, and then click on Generate Project.
- Once the project is downloaded, extract the project onto your system
Next, you have to import this project using the import option on the Spring Tool Suite IDE
- While importing the project, remember that you have to choose the project type to be Maven and the source project should contain the pom.xml file.

Once, all the above steps are followed you will see that the Spring Boot project is created with all the required dependencies.

## Mention the steps to connect Spring Boot application to a database using JDBC.

Spring Boot starter projects provide the required libraries to connect the application with JDBC. So, for example, if you just have to create an application  and connect it with MySQL database, you can follow the below steps:

- Step 1: Create a database in MySQL
    
        CREATE DATABASE example;

- Step 2: Then you have to create a table inside this database.

        CREATE TABLE customers(customerid INT PRIMARY KEY NOT NULL AUTO_INCREMENT, customername VARCHAR(255));

- Step 3: Now, create a Spring Boot project and provide the required details
- Step 4: Add the JDBC, MySQL and web dependencies.
- Step 5: Once the project is created, you have to configure the database into application properties

        spring.datasource.url=jdbc:mysql://localhost:3306/example
        spring.datasource.username=root  
        spring.datasource.password=123456  
        spring.jpa.hibernate.ddl-auto=create-drop  

- Step 6: The main application.java class should have the following code:


        package com.example;  
        import org.springframework.boot.SpringApplication;  
        import org.springframework.boot.autoconfigure.SpringBootApplication;  
        @SpringBootApplication  
        public class SampleApplication {  
            public static void main(String[] args) {  
                SpringApplication.run(SampleApplication.class, args);  
            }  
        } 

- Step 7: Next, you have to create a controller to handle the HTTP requests, by mentioning the following code:


            package com.example;
            import org.springframework.web.bind.annotation.RequestMapping;
            import org.springframework.beans.factory.annotation.Autowired;
            import org.springframework.jdbc.core.JdbcTemplate;
            import org.springframework.web.bind.annotation.RestController;
            @RestController
            public class JdbcController {

            @Autowired
            JdbcTemplate jdbc;

            @RequestMapping("/insert")
            public String index(){
                    jdbc.execute("insert into customers(name)values('Aryya')");
                    return "Data Entry Successful";
                }
            }

- Step 8: Finally, execute this project as a Java application.
- Step 9: Next, open the URL (localhost:8080/insert), and you will see the output as Data Entry Successful. You can also go forward and check if the data is entered into the table.

## How to enable HTTP/2 support in Spring Boot?

You can enable the HTTP/2 support in Spring Boot by: server.http2.enabled=true

## What are the @RequestMapping  and @RestController annotation in Spring Boot used for?

| @RequestMapping | @RestController |
| --------------- | --------------- | 
| This annotation is used to provide the routing information and tells to Spring that any HTTP request must be mapped to the respective method. | This annotation is used to add the @ResponseBody and @Controller annotation to the class | 
| To use this annotation, you have to import org.springframework.web. bind.annotation.RequestMapping; | To use this annotation, you have to import org.springframework.web. bind.annotation.RestController; | 

Example: Consider you have a method example() which should map with /example URL.

    package com.example; 
    import org.springframework.web.bind.annotation.RequestMapping; 
    import org.springframework.web.bind.annotation.RestController; 

    @RestController 
    public class SampleController { 
    @RequestMapping("/example") 
        public String example(){ 
            return"Hello World"; 
        } 
    } 

## Mention the differences between JPA and Hibernate.

JPA is a Data Access Abstraction used to reduce the amount of boilerplate code. While, Hibernate is an implementation of Java Persistence API and offers benefits of loose coupling.