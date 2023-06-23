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