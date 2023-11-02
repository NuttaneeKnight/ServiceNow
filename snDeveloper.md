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

What are we going to learn
- What is client side scripting
- Where to use Client side scripting
- Client side API and Methods
- Use cases of Client side scripting

# Client Side Scripting
- Client-side scripting execute within a user's browser and are used to manage forms and form fields. Following are examples:
    - Show an alert when form loads
    - Validate form data
    - Show/hide choices of fields
    - Hide/show section
    - Set a value on the form
    - confirmation on submit

# Where to use Client Side Scripting
- Ajax Client Scripts
- UI Policy
- Service Catalog UI Policy
- Client Scripts
- UI Actions
- UI Context Menus
- Validations Scripts

# Client-Side Glide Class - Provided by ServiceNow
- GlideAjax
- GlideDialog Window
- GlideForm
- GlideList2
- GlideMenu
- GlideUser

# Client Side API
- GlideAjax
- GlideDialogWindow
- GlideList2
- GlideFlow
- GlideUser
- GlideForm
- GlideModal
- GlideDocumentV3

# Glide User
- GlideUser is used to get information about the logged in user
- The object which is used to access GlideUser methods is g_user
- It is used only in Client
- Syntax - g_user.<GlideUserMethod()>

# GlideAjx
- GlideAjax is used to call server side code from Client
- GlideAjax instance called with GlideAjax constructor
- It is used client Scripting
- Syntax - var ga = new GlideAjax(,Script Include)


//43.21