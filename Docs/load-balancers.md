# Load balancers

## What is a load balancer? 

Load balancers is a machine that runs a reverse proxy software. It can be a virtual machine or a physical machine. The goal of the software is to distribute the request between multiple servers that host the actual application.

<img src="./../assets/load-balancers.png">

## Load balancing strategies

- Round Robin 
- Least Connections
- Resource based
- Weighted variants of the above
- Random

## Types of load balancers

- Network Load Balancer / Layer 4 (L4) Load Balancer:

        Based on the network variables like IP address and destination ports, Network Load balancing is the distribution of traffic at the transport level through the routing decisions. Such load balancing is TCP i.e. level 4, and does not consider any parameter at the application level like the type of content, cookie data, headers, locations, application behavior etc. Performing network addressing translations without inspecting the content of discrete packets, Network Load Balancing cares only about the network layer information and directs the traffic on this basis only.

- Application Load Balancer / Layer 7 (L7) Load Balancer:

        Ranking highest in the OSI (Open Systems Interconnection) model, Layer 7 load balancer distributes the requests based on multiple parameters at the application level. A much wider range of data is evaluated by the L7 load balancer including the HTTP headers and SSL sessions and distributes the server load based on the decision arising from a combination of several variables. This way application load balancers control the server traffic based on the individual usage and behavior.

- Global Server Load Balancer/Multi-site Load Balancer:

        With the increasing number of applications being hosted in cloud data centers, located at varied geographies, the GSLB extends the capabilities of general L4 and L7 across various data centers facilitating the efficient global load distribution, without degrading the experience for end users. In addition to the efficient traffic balancing, multi-site load balancers also help in quick recovery and seamless business operations, in case of server disaster or disaster at any data center, as other data centers at any part of the world can be used for business continuity.

## Benefits of load balancers

- Makes our system more resilient, meaning if one of our servers in the server pool fails, we can still serve the users from the other servers available in the pool.
- Makes our server scalable. If avaiable servers cannot handle the request at current time, we can just add more servers too the pool to make it work, and during off time we can reduce the numbers of server to save resources.