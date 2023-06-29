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
