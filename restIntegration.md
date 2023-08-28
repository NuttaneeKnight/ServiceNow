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
