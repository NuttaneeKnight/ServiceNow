# Course Overview
- Basic of REST Integration
- Table API
- Import API
- Scripted Webservices API
- Bi-dirrectional Integration


# Introduction to REST INTEGRATION

# INTEGRATION
- UNI-DIRECTIONAL: Servicenow -> and <- Other System
- BI-DIRECTIONAL: Servicenow <-> Other System

# REST
- ServiceNow-REST(HTTP)-OTHER System
# 5 Basic Building Blocks of REST
- Endpoints = Reference to URI whcih accepts web requests
- Methods
- Authentication
- Content/Body
- Content Type


# Endpoints
- Reference tp URI which accepts web requests
- The address to send the data to

# Methods
- GET - Get records informations
- POST
- PUT
- PATCH
- DELETE

- Authentication - Accept only identified users
- Content Type - JSON/XML
- Content - Data
# Integration Flow
- System One
    Endpoint
    Method
    Content Type
    Content
    Authentication

# The structure
- System One - End point, Method, Content Type, Content, Authentication
- HTTP(s) - Request, Response
- System Two - Auth, Method, Parse, Reply
- This is called a REST call (controller), Integration

# ServiceNow APIs
- Table API (Direct Webservices)
- Import Sets API
- Scripted API

# Table API (Direct Webservices)

- API Exploer - This is the place where we can generate the API calls 
- You can generate that within the ServiceNow platform
- PUT(modify) / PATCH(update)
- It will generate the JSON underneath it. 

# Authentication 
- You have t have a user created first to pass the data to your desired instance
- Create a user under - System Security > User
- ZS&*FnSIm)#ON=2xtPLvxbytJQN4Qdckik6n%,UQRF{]HVy]?%igm}C%n&-.;=ox:{
- Add the key role in the related list in the bottom > rest_service
- Look through Thunder Client for references for the 201
- INC0010018	

# REST CALLS FROM ServiceNow(send)
- How to send data within servicenow

- Send Rest Calls
    - Rest Messages
    - Rest Message Methods
    - Authentication
    - Trigger - Business Rule/UI Action

- Receive Rest Calls
    - Authentication
    - Authorization
    - Table API (or)
    - Import Set API (or)
    - Scripted API (or) 

# Demo
- Go to the First Instnce(SNOW) and navigate to REST Message
- Best prcetice is to capture everything in the update set. 
- Go to the local update set and create one. 
- Name it and make it current and navigate back to create a new REST Message
- Name it, Instance 2 Incidents
- Put the endpoint of the target system 
- You will need another SNOW instance to get the endpoint 
- Go to REST API Explorer of the other instance 
- put that endpoint there ex. https://dev90700.service-now.com/api/now/table/{tableName}
- Set the Authentication type to Basic
- Create a new Basic auth profile
- Name: Instance 2 User, Username: test_user_2, Password: 123
- You have to go to the 2nd instance and create that above user in the second instance first as well. 
- Make sure that the new user has the rest_service type 
- Save the record and go to the related link in the bottom, you can find test there. 
- It showed 401 because we did not properly set the user name and the passworde. the aut failed
- This time we do an outbound rest message (POST)
- follow the same process

# Create Business Rule - Trigger REST to Instance 2
(function executeRule(current, previous /**null when async/) {

    var request = new sn_ws.RESTMessageV2("Instance 2 Incidents", "create_incident");
    request.setStringParameterNoEscape("sd", current.short_description)
    request.setStringParameterNoEscape("desc", current.description)
    request.setStringParameterNoEscape("ctype",current.contact_type)
    var response = request.execute();
    var responseBody = response.getBody();

    var statusCode = response.getStatusCode()
    gs.log(will help too)
})(current, previous)

# Send REST calls from ServiceNow - PUT
- Go and update business rule

# Recap
- Send Rest Calls
    - Rest messages
    - Rest Message Methods
    - Authentication
    - Trigger - Business Rule/UI Action
- Receive Rest Calls
    - Authentication
    - Authorization
    - Table API (or)
    - Import Set API (or)
    - Scripted API (or)

# Introduction to Import Set API
- Import Set API - REST