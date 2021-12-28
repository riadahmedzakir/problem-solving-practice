# TCP (Transmission control protocol)

The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol (IP). Therefore, the entire suite is commonly referred to as TCP/IP. TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP, which is part of the Transport Layer of the TCP/IP suite. SSL/TLS often runs on top of TCP.

TCP is connection-oriented, and a connection between client and server is established before data can be sent. The server must be listening (passive open) for connection requests from clients before a connection is established. Three-way handshake (active open), retransmission, and error-detection adds to reliability but lengthens latency. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service that prioritizes time over reliability. TCP employs network congestion avoidance. However, there are vulnerabilities to TCP including denial of service, connection hijacking, TCP veto, and reset attack.

# UDP (User datagram protocol)

User Datagram Protocol (UDP) is one of the core members of the Internet protocol suite. With UDP, computer applications can send messages, in this case referred to as datagrams, to other hosts on an Internet Protocol (IP) network. Prior communications are not required in order to set up communication channels or data paths.

UDP uses a simple connectionless communication model with a minimum of protocol mechanisms. UDP provides checksums for data integrity, and port numbers for addressing different functions at the source and destination of the datagram. It has no handshaking dialogues, and thus exposes the user's program to any unreliability of the underlying network; there is no guarantee of delivery, ordering, or duplicate protection. If error-correction facilities are needed at the network interface level, an application may use Transmission Control Protocol (TCP) or Stream Control Transmission Protocol (SCTP) which are designed for this purpose.

UDP is suitable for purposes where error checking and correction are either not necessary or are performed in the application; UDP avoids the overhead of such processing in the protocol stack. Time-sensitive applications often use UDP because dropping packets is preferable to waiting for packets delayed due to retransmission, which may not be an option in a real-time system.

# HTTP (Hypertext transfer protocol)

The Hypertext Transfer Protocol (HTTP) is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen in a web browser.

## HTTP Methods

- GET : The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
- HEAD : Same as GET, but transfers the status line and header section only.
- POST : A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
- PUT : Replaces all current representations of the target resource with the uploaded content.
- DELETE : Removes all current representations of the target resource given by a URI.
- CONNECT : Establishes a tunnel to the server identified by a given URI.
- OPTIONS : Describes the communication options for the target resource.
- TRACE : Performs a message loop-back test along the path to the target resource.

## HTTP Status code

- 100-199 : Informational
- 200-299 : Successful
- 300-399 : Redirection
- 400-499 : Client Error
- 500-599 : Server Error

# WebSockets

WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection.

WebSocket is distinct from HTTP. Both protocols are located at layer 7 in the OSI model and depend on TCP at layer 4. Although they are different, WebSocket "is designed to work over HTTP ports 443 and 80 as well as to support HTTP proxies and intermediaries", thus making it compatible with HTTP. To achieve compatibility, the WebSocket handshake uses the HTTP Upgrade header to change from the HTTP protocol to the WebSocket protocol.

The WebSocket protocol enables interaction between a web browser (or other client application) and a web server with lower overhead than half-duplex alternatives such as HTTP polling, facilitating real-time data transfer from and to the server. This is made possible by providing a standardized way for the server to send content to the client without being first requested by the client, and allowing messages to be passed back and forth while keeping the connection open. In this way, a two-way ongoing conversation can take place between the client and the server. The communications are usually done over TCP port number 443 (or 80 in the case of unsecured connections), which is beneficial for environments that block non-web Internet connections using a firewall.

## gRPC (Google Remote Procedure Call)

Google Remote Procedure Call is an open source remote procedure call (RPC) system initially developed at Google in 2015 as the next generation of the RPC infrastructure Stubby. It uses HTTP/2 for transport, Protocol Buffers as the interface description language, and provides features such as authentication, bidirectional streaming and flow control, blocking or nonblocking bindings, and cancellation and timeouts. It generates cross-platform client and server bindings for many languages. Most common usage scenarios include connecting services in a microservices style architecture, or connecting mobile device clients to backend services.

## GraphQL

At its core, GraphQL is a language for querying databases from client-side applications. On the backend, GraphQL specifies to the API how to present the data to the client. GraphQL redefines developers’ work with APIs offering more flexibility and speed to market; it improves client-server interactions by enabling the former to make precise data requests and obtain no more and no less, but exactly what they need.

Initially created by Facebook in 2012, GraphQL was used internally for their mobile applications to reduce network usage by means of its specific data-fetching capabilities. Since GraphQL specifications and reference implementation in JavaScript were open-sourced in 2015, major programming languages now support it, including Python, Java, C#, Node.js, and more.

A GraphQL server provides a client with a predefined schema – a model of the data that can be requested from the server. In other words, the schema serves as a middle ground between the client and the server while defining how to access the data.

Written down in Schema Definition Language (SDL), basic components of a GraphQL schema – types – describe kinds of object that can be queried on that server and the fields they have. The schema defines what queries are allowed to be made, what types of data can be fetched, and the relationships between these types. You can create a GraphQL schema and build an interface around it with any programming language.

Having the schema before querying, a client can validate their query against it to make sure the server will be able to respond to the query. While the shape of a GraphQL query closely matches the result, you can predict what will be returned. This eliminates such unwelcome surprises as unavailable data or a wrong structure.

Based on the graph data modeling with the schema at its core, GraphQL has three primary operations:

- Query for reading data
- Mutation for writing data
- Subscription for automatically receiving real-time data over time.
