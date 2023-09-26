# What is ServiceNow Discovery
- Discovery is an application on the ServiceNow platform that allows usto find, classify, and identify hardware and software on the network and populate the ServiceNow CMDB.

# What is the ServiceNow CMDB?
The CMDB is a set of database tables that provides a logical model of your company's IT infrastructure including all the components (hardware & software) and how they're connected and finfigured to provide services. 

# Discovery Fact Sheet
- Discovery is an application that scans a network and finds:
    - Hardware Devices (Computers, Servers, Routers, etc.)
    - Applications (Databases, VM's, Web Servers, Apps.)
- Discovery identifies an sets relationships between Applications and Hardware ( and Applications and Applications)
- Discovery is agent-less, meaning no software needs installed on the discovery devices. 
- Discovery is not included as part of the ServiceNow base system
- Discovery is one of ServiceNow's largest application bundles
    - Discovery Home, Discovery Dashboard, Schedule, Credentials, MID Servers, Discovery Definitions, Range Sets, Behaviors, Probes, Sensors, Port Probes, Classifications, etc. 

# How Discovery works (Discovery Architecture)
- First install Discover Server or MID Server
- Communicating with Sevicenow server on port 443
- Communicate through ECC (external communication channel)
- Mid server only makes the outbound calls not the other way around
- MID then send the ECC Queue (pinging it)
- Place the output record and scan to find the data via input record. 
- Can have more than 1 MID server
- 