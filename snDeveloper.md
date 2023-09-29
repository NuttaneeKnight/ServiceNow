# Objective
- Waht is scripting in ServiceNow
- When to script
- Where to script
- Types of Scripts

# When you should do scripting
- Show an alert if field values changes and push the value of a reference field value
- Copy comments from parent to child
- Don't resolve the incident if chhild tasks are opened.
- Show Assignment group values as per the assignment groups
- Push the field value on change of other field value. 

# When you should not do scripting
- Make field read-only
- Hide a field when form loads
- Set the value of a field when Assignment group changes

# Where  to script in ServiceNow?
- ServiceNow provides script editor which can be added a feild on any form and script can be written in the field
- JavaScript is written in this script editor

# Types of scripting
- Client Side - (UI, showing hiding)
- Server Side - (fetch data CRUD) 
- Mid Server - (HTTPS SOAP, integrate with other application)

# Client Side Scripting
- Ajax Client Scripts
- Service Catalog UI Policy
- UI Policy
- Client Scripts
- UI Actions
- UI Contect Menus
- Validation Scripts

# Glide Class Overview
- ServiceNow provides JavaScript classes exposed by Glide
- You can work with table using scripts with the help of these API
- You can perform database operations with these Glide API
- There are 2 Glide Classes
    1. Server Side Glide Classes
    2. Client Side Glide Classes

# Server-side Glide Class
- GlideRecord
- GlideSystem
- GlideAggregate
- GlideDateTime
- GlideElement

# Client-side Glide Class
- GlideAjax
- GlideDialog Window
- GlideForm
- GlideList2
- GlideMenu
- GlideUser

# Script Execution Engine
- Before Business Rule with order less than 1000
- Before Engine (Approvals, Data Policy, Field Normalization, Workflow)
- Before Business rule with order more than 1000
- Databaase operation (Insert, Update, Delete)
- After Business Rule with order less than 1000
- After Engines (Table notifications engine, Update Sync Engine)
- Emil Notifications
- After Business rule with order more than 1000

# Syntax Editor
- ServiceNow provides support to write JavaScript in Syntax editor
- It has features like syntax coloring, keyword search, autoomatic closure of braces, cde assistance
- Script macros can be used in the editor

# Syntax Coloring
- Green is note
- Purple - js commands
- Blue - string value

# Syntax Editor Macros
- Macros provides shortcut for commonly used scripts
- It can be inserted in Script editor with a text saved in Macros
- All > Mocro (Syntax Editor Macros) - This will show the list of all the syntax shortcuts ex. type vargr and click tab will give you the boiler plate

