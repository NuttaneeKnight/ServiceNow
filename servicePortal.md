# Service Portal 
- Service Portal is a portal framework that allows administrators to build a mobile-friendly self service experience for users. It interacts with parts of the ServiceNow platform, so users can access specific platform features using Service Portal.

# Why?
- Provide an end-user portal
- Self-help functionality 
- Performs 3 primary features
    1. Submit requests (service catalog)
    2. Browse knowledge (knowledge management)
    3. Check statuses
- Other features incude
    - HR functionality
    - Custon apps

# Pros of Service Portal
- CMS is old and a complete pain
- Render data in a modern user interface
- Leverage 3rd-party libraries
- Mobile friendly

# Service Portal Users
    1. End User - Has no roles an is typically ono-IT (HR, Finance)
    2. Managerial User - Manages users
    3. Admin/Develper - Has admin rights to the platform

# Core Service Portal Technologies
    - AngularJS
    - Bootstraps
    - SASS
    - Others AngularJS UI, moment.js

# Out-of-Box Service Portal
- Loaded with ServiceNow
- Name: ServicePortal
- URL: sp

Platform view = Catalog
Client = Service Portal

# OOB Knowledge Base
- On the top right you should find the id number of the kowledge base article such as KB0000016

# Additional Service Portal Features
- The current status table is: cmdb_ci_outage 
- the param is sp?id=services_status , showing all the business services table, the related list is located in the bottom of the screen

# Why come to the SP?
1. Request a service
2. View knowledge articles
3. Cheeck statuses

# Portal Structure, anatomy
- Service Portal structure
- Primary Service Portal tables
- Page layout
- Styling
- Modular by design

# Service Portal Structure
- Portal
- Pages
    - Containers
        - Rows
            - Columns
                - Widget instances

- Widget
- Theme
    - Style sheets
    - JavaScript files
    - Header & Footer
# Primary Tables
- Portal [sp_portal]
- Page [sp_page] + (extended associated tables)
- Theme [sp_theme]
- Widget [sp_widget] +
- Widget instance [sp_instance] +

Hot Link sp_portal in the SNutils or sp_portal.list in the search bar

Navigtion to the list of tables
 - Go to sp_portal.list
 - In the header >> click right >> Configure >> Table
 - The list of Service portal will show up
 - Go to related list and click "Show Schema Map"
# The Portal Record
- Entry Point
- Contains properties
    - URL suffixes
    - Hoomepage
    - Service ctalog
    - Knowledge base
    - And more
# The Page Record
- Key properties
    - ID, title, short description
    - Access controls
    - Container for structure of page

Portal A    ]
Portal B    >>>>>>              Page
Portal C    ]

**All 3 portals can access to Page**
https://dev90700.service-now.com/sp?id=404 => can change the id to anything that we set the param

# Checklist for updates

https://dev90700.service-now.com/sp?id=security_home to access the security home pge. 

# The Widget
- Contains the actual content in ServiceNow
    - HTML, CSS, JavaScript.
- Acts as blueprint
- Each widget is an Angular directive

# The Widget Instance - the way we display widget on the page
- Automatically created from Service Portal Designer
- Many useful options that help to define a widget

# Cloning
- Out-of-box widgets cannot be modified
- Clone in one click
- Preserve out-of-box functionality

# Page Layout
- Defines structure of a page
- Based on Bootstrap 3's grid system
    - containers, rows, columns

# The container
- Fixed or Fluid
- Backgrounf color or image
- CSS classes
- Order

# The Row 
- Groups colums
- CSS class
- Order

# The Column
- Groups widget instances
- CSS class
- Grid size

# The Theme
- Defines a portl look and feel
    - store SASS variables
    - CSS
    - JavaScript

# The Menu
- Define menu items for a portal
- No HTML or scripting required

# Modular !! stands by itself
- Portal A Page 1, Page 2 with Theme A
- Portal B shares Page 1 and PAge 3 with Theme A 
# Service Portal Tools
- Branding Editor
- Page Designer
- Page Editor
- Wdget Editor

# Platform View of Records
- Every record can be updated from the platform view
- You don't need to use the Service Portal tools, but they typically provide a better experience
# Branding Editor
- Modify titles, logos, colors
- Similar to WordPress
- Very easy to use

# Designer
- Great for building the layout of a page

# Control + Click
- Control _ Click on a widget within Service Portal
- Require sp_admin role
- A number of useful options

# Navigate to All navigation and typr "Service Portal Configuration" to access the editor.

# Page Editor
- Useful for
    - Modifying instances
    - Modifying containers, rows, column
    - Viewing the layout of a page

# Widget Editor 
- Best way to edit a widget
- There is an eye icon for a preview(live on vs code) to see our changes and progress on the component. This can be a powerful tool. 
- The hamburger bar on the top right, you can Edit option schema. We will revisit that later. 
- If you want to find the list of different methods on the service portal, Go to server script => Go inside the finction scope than type $sp. this will render the method list with explanation that can be useful for calling the method on the server side. 
- The same goes fr the Client Script method call, if you type spUtil. the method list will show up 

# What is a Widget? 
- An analogu = Cover Letter
    - Have a templete for each job posting and edit it from there
    - This will help make things fater and minimize the error. 
- Resuable, modular component
- Defines content and behavior
- Almost everything is a widget
- Exampes: 
    - KB Article
    - Sc Cat Item
    - Top rated Articles

# Widgets and Angular
- Widgets are AngularJS directives. When a page is loaded, a directivve is created for each widget on the page. They are tightly coupled to the server-side Javascript code which is powered by the Rhini engine inder the ServiceNow Platform

# Primary Widget Components
- Ex. Top Rated Articles
1. Server
2. Client

The components are:
1. Server Script 
2. HTML Template 
3. CSS 
4. Client Script 
5. Option Schema 

# The Widget Instance
1. Widget A [sp_widget] - the widget instance got created right away as a place holder
    ||
    \/
    Widget A Instance

# Commonly Used Instance Options
    - Title
    - Short description
    - Bootstrap color
    - Bootstrap size
    - HREF/URL
    - Additional options*

- Hero text is the header navigation text that shows on instance title og the form  
- Secondary text wll be right below the hero text -> Short description

# Option Schema
- Widget-specific parameters
- Copied over from the widget to the widget instance
- Stored in JSON format in the widget record
- Support types:
    - Strings
    - Lists
    - References
    - Booleans
    - More...

# Extending Widgets Through the Option Schema
- Cool Clock Widget -> Cool Clok Widget Instance
- With that instance, we will have the ability to midify

# Adding Fields to the Instance Option modal
- Widget A [sp_widget] -> Widget A Instance
- Fields (Title, Shortdescription, Bootcamp color)
- If you go into the widget form >> scroll down >> *Data table >> "Fields" that way you can access the instace field from the sn field table.

# Instance Option Revisited
- The Different Instance Types
    Instance >> Title & Short Description (Branch below)
        - Instance with Menu >> Menu items
        - In stance with Link >> Page
        - Instance with Carousel >> Carousel Image
        - * Instance with Table >> Table & filter (which table do we want to show [sp_instance] to the user)
# Choosing an Instance Type
- Widget A [sp_widget] (* Data table >> Instance[sp_instance])
- Widget A Instance [sp_instance]

# Widget Instance
- Go to navigation
- Type "widget instance"
- This will show the list of the widget instance
- On the "class" field is where we can find which instance the widget uis from.
- If you group by class you will see all of them in the different instances class

***Select Box in ServiceNow is a dropdown***
# Widget - things to consider
- Before creating the widget go and look back if there is any that is out of the box

# Creating a Wudget
- Submit an Incident widget
- Build onto this widget
- Focusing on HTML

# Demo - How to create a new widget
- Type > Service Portal Configuration
- Navigate to Widget Editor
- Click - Create a new Widget
- Name it > Create an incident
- check off "Create test page" > Submit
- Click on the hanburger menu on the top rright > check off "Enable Preview" 

# Primary Widget Development
- Examine page & Widget lifecycles
- Explore global objects
- Introduct server & client-side development
- Look at a common AngularJS directives
- Inspect AngularJS in developer tools
- OOB components are your friends. Use it as a boiler plate

# Widget Lifecycle
- Server side >> Widget instance >> Instance Options >> Server Script
- Then the Angular will bootstrap and send it back to the Client side in HTML template, CSS, Client Script along with the "DATA" 

# Global Objecct
- There are 3 global objects
1. Data
2. Options
3. Inputs

# Global Objects in Action

- data = {a: 1}
- options = {[[[]]]}

***When we send it back the names transformed***
- c.data{a:1}
- c.options = {[[[]]]}
***c represent the controller view***
- c.data.a = 2
- c.server.update(O); >> This will bundle up
# Server-Side Development
- Power of ServiceNow (Rhino JS Engine)
- $sp API - useful api 
- Invoke script includes from server script
# Server Script Example
- Display the current user's active incidents

***Client-Side***
1. For each object in array, display number and short_description

***Server-Side***
1. Query incident table
2. For each incident
    1. add the number and short_description to a temp object
    2. Push object to array 

# The $sp API
- GlideSPScriptable
- Helper methods specific for Service Portal
    - canReadRecord() - testswhether a user can read a specific GlideRecord. *User Criteria
    - getForm() - returns a form
    - getParameter() - returns specified URL parameter
    - getPortalRecord() - returns GlideRecord of portal record
    - getRecordDisplayValues() - Copies display values for the specified fields into the data parameter
    - getWidget() - Gets a widget by id or sys_is, execute that widget's server script using the provided options, then returns the widget model. 
- Go to developer API documentation to see all the $sp API call
- $sp. is usually the method, go to the documentation for more info
- $sp.getRecordElements(obj, incidentGR, data.fields) - takes 3 params

# Client-Side Development
- Power of AngularJS
- Additional Service Portal functionality 
    - Handles passing data from server script to client script
    - Automaticcally creates a directive for each widget
    - access to the server API
    - access to spUtil
- Dependency injection

# AngularJS Controller in Service Portal (Similar to react)
- Service Portal bootstraps AngularJS for us!

# Client Script Example
- Rating a knowledge article

***Server-Side***
1. Query kb_knowledge table
2. Get article data
3. Store star rating on kb_feedback table

[PASS_TO_CLIENT-SIDE]

***Client-Side***
1. Display article
2. Store star rating (From the click event)
3. Send star rating to server

# Client-Side APIs
- server - AJAX utility (call the server sode script to the client side)
- spUtil - other useful utility methods
spModal - modal utility
- i18n - internationaliization utility
- spAriaUtil - ARIA utility



