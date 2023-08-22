# Service Portal 
- Hint String Note: 
    [2:05 PM] Howie Austin

<hints><entry key='sysparm_processing_hint' value='setfield:request.u_cartpop=district*609b73280f65b500b1c0ee68b1050eb0%5Eschool*c552b44e0f3de600738649bce1050e2c%5Edesc*test%5Econtactname*3253fgfgd%5Econtactphone*2253352352%5EliftGate*No%5Edock*No'/></hints>

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



# Common AngularJS Directives
- ng-repeat = repeat or loop through an array and display
- ng-if = checks if we wanna rnder or not
- ng-click = trigger with the click events
- ng-model = attached the variable to the views
- ng-href 
- ng-change
- ng-hide
- ng-show
- ng-required
- ng-disabled

# What's in $scope
- Properties
    - c (controller)
    - data* passed from server script
    - options* passed from server script
    - page
    - portal
    - theme
    - user
    - user
    - widget
    - widget_parameters

    # Advanced Widget Developmeent
    - Templates
    - Porviders
    - Dependencies
    - Leveraging script includes
    - Embedding widgets
    - Communication between widgets
    - Link function
    - Record watch

# DRY in Action
(Script Include) Action - function getQuery{}
(Global Style Sheet) Style - .btn {}
(Directive) HTML - <div></div>
- With those 3 above components you get a service portal.

# Templates
- Stores HTML
- Change the way data is displayed
- Widgets may have 0 to many templates, A template can only belong to one widget. 

***In the All Navigator type sp_ng_template.list to see al the list of the temlate***

- Navigate to = small_shopping_cart_v2.html
- Click the Widget information icon
- Navigate down to the related list and go to "Angular ng-templates", we will see that there are 2 templates. Small and Large

# Angular Providers
- Shares context between widgets
- Helps to maintain state
- Creates reusable components which maybe injected into multiple widgets
- Provider types: 1. Directive, 2 Factory, 3. Service 

# Dependencies
- May Include:
    JavaScript (UI scripts)
    CSS (style sheets)
- 3rd party libraries

Sample code: 

(function () {
    angular.module('ellipsisFilter', []).filter('ellipsis', function() {
        return function(value, length) {
            if (value.length < length) {
                return value
            }
            if (length) {
                length = parseInt(length);
                value = value.substr(0, length)
                var laastSpace = value.lastIndexOf(' ')
                if (lastSpace != -1) {
                    if (value.charAt(lastSpace -1) === '.' || value.charAt(lastSpace - 1) == ',') {

                    }
                }
            }
        } return value + ' ...';
    })
})();

# Leveraging Script Includes
- Calling a Script Include From a Widget
- Server Script
    var api = new ScriptInclude();
    var stuff = api.methodName();
- Script Include
    ...
    methodName : function() {
        ...
        return stuff;
    };
    ...
# Embding Widgets
- 3 methods to do so
    1. HTML template
    2. Server Script
    3. Client Script

# Communicating Between Widgets
- Event => Widget A => Widget B (On broadcast message, do this...)
- The methods are:
    - $rootScope.$broadcast() = Takes 2 params 1.name of the event (incident.issue) 2.the data that we want to pass (c.data.newIncident.issue)

    - $rootScope.$on() (Another option iis $scope.$on()) = Will explain when to use it. Takes in 2 params 1.name of the event and the 2.name of the function that we want to capture the event

# Linked Functtion
- Advanced feature that is rrarely needed
- Used to manipulate the DOM (or add watcher)
- If you go to the Widget module => navigate into any widget => scroll down and you will find the "Link Function" Down below.

# Record Watch
- Respond to table update from server-side
- Pushes data to widget
- Near real-time updates 
- HTTP Long polling (technology) having the client pulled the server requesting information. The server holds the request pened until the new updates 
- recordWatch() lives in the spUtil
- spUtil.recordWatch($scope, 'incident', 'active=true')

# For information on how to import XML records into your instance, checkout this article: https://developer.servicenow.com/app.do#!/document/content/app_store_doc_technical_best_practices_jakarta_import_records_as_xml_data?v=newyork

# Style Location / Theming a Portal
- Theme 
    - Theme SCSS variables
    - Style sheets
    - JavaScript files
- Widget styling
- Page styling
- Portal SCSS variables

# Theme Anatomy
- Header & Footer
- SCSS variables
- CSS includes
- JavaScript includes

# Styling Locations
- Portal SCSS variables
- Theme SCSS variables 
- Style Sheets
- PAge Styling
- Widget instance styling
- Widget STyling
- Widget element styling

# Style Specificity
"Less specific" -> Portal SCSS variables -> Theme SCSS variables -> Style Sheets -> Page styling -> Widget Styling -> Widget intance styling -> Widget element styling -> "More specific"

# Service Portal SCSS
- SCSS is a subset of the SASS Specification
- It supports variables, nesting, mixins, functions, and operators
- Use variables throughout the portals!

- SCSS variables    -> Style sheets
                    -> Widget styles
# Bootstrap
- Work with it, not aagainst it
- Leverage SCSS bootsratp variables

# Applying Styles
- Best Practices
    - Be as general as possible
    - Avoid adding CSS to widgets, widget instances, or pages wen possible
    - Utilize SCSS vriablees
    - Organize styling components in seperate style sheets

# UsageOverview, Logs, & Properties
- Additional Features
    - Usage overview
    - Logs
    - Service Portal Properties
    - Page Route Maps
    - Search & search sources
    - Announcements

# What is a Usage Overview?
- It s out of the bx Dashboard with reports
- This report leverages sp_log table

# Logs
- Stores in sp_log table
- Stores transactional data
- Reporting
- ex. $sp.logStat('Custype','table', 'sys_id','what you want to say int that field' )

- The logs are great for the reporting stand points. 
- When the user are looking for the knwledge page that has not been created yet. 

# Properties
- Service Portal Properties
- There aren't many properties because it is modular by nature. 
- It's better to define properties in the widget instance / or records. 

# Page Route Maps
- Redirect the user to a different page
- Great when working with OOB widgets
- Server-side routing
- * To investigate that the param is the right one or not cntrl+click on the instance page editor to investigate in the portal. The root on the left (sc_landing) is usually where we route on the back end but the end user doesn't know. 

# Search & Search Sources 
- OOB search widget leverages search sources
- A search source is a record that describes the behavior and source of searchable data. A search source defines:
    - Where search data is retrieved from
    - Whether search suggestions can populte the search field based on user input
    - How a search entry displays in the search result page

# Announcement
- Broadcast messages to Service Portal users
- May require plugin if migrating from older release
- Display and link options
- Can be in the banner or widget format

# Build Service Poral 
- Project Scope
    - HelpNow Portal
    - Menu
        - 2 menu items
    - Theme
        - 2 style sheets
        - OOB header
    - 5 Pages

# Pages
- Homepage[hn_index] - 3 widgets
- Create an Incident [hn_create_incident] - 3 widgets
- My Incidents[hm_my_incidents] - 3 widgets
- Profile[hn_profile] - 3 widgets
- Ticket[hn_ticket] - 6 widgets

# The Demo Portal is in page Home, hn_index

- Launch the designer - It can be found on the related links called "Open in Designer"
- Select the page container and drag and drop to the right
- Choose the 12
- Look for the "Hmepage Search" widget and drag and drop it. 
- Add a new container below and make it 6 and 6 column
- Find Icon Link Widget and place them to both of the columns
- Click the pencil icon on the icon link: Mane the Title: "Careate a New Incident", Chose "Top Icon" for the templlate, Glypg - Choose +
- Go ahead and save it. 
- Now you can go back to that record and hit try it. 
- To put the hero image in the search, Select container and the penccil, upload the image then select the bckground style to Cover as well. 
- Navigate back to the portal and work into Theme. 
- Create a new style on CSS Includesin the related list below. 

# Create an Incident Page
- Go to Service Portal Configuration 
- Go to Designer
- Click top left "Add a new page"
- Name the title " Create an Incident" 
- name the Page ID with hn_create_incident
- Add a 12 column lay out and add crete an incident on the page
- Go to Service Portal and Click right to Instance option
- Put in the PAGE ID to link it. 
- Go to Service Portal HelpNow 
- Add that page to the main menu
- Under Menu Items click New
- Label - Created an incident, Page - hn_create_incident
