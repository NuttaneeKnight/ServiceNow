# 101
- When you want to use certain module 
    - Make sure to install plugins
    - Make sure that they are in the right groups
    - Make sure that they are in the right type
    - This is the way to enforce ACL

# Type of Work ServiceNow Admin
- Monitor Incident
- User Access and Provisioning
- Incident Debug
- Small Changes in Instance
- Updateset Migration
- Instance Health Maintain

# Type of users
- End user
- Approval user
- itil user
- admin user

# System can be used as:
- Service Portal
- Native View
- Integration
- Email

# User, Role & Group
- ITIL Admin, ITIL, Rle 2, Role 3
- Group - Roles
- The child role will be automatically add to the user of that group
- That role will grant the access to the ACL of the data that we set
- There is also a parent group and child group as well so you can dry your code. It is located in the related list in the bottom, GROUP
- Active is true and lockouted is unchecked = User is logged in

# List & Forms
- Table
- Record
- List
- Form
- UI Action
- Context Menu
- Section
- Related List

# Exporting and Importing Records via XML
- Click right and import on the record you want to imporrt, the same goes for update sets

# Update Sets
- What is an Update Set? An update set is a group of configuration changes that can be moved from one instance to another. This feature allows administrators to group a series of changes into a names set and then move them as a unit to other systems for testing or deployment. 

# When to use Update Sets
- Change you want to keep in every instance
- All the changes which can change the baseline and cn give impact
- Changes needs to be tested in Lower Instance before moving to Production.

# Items captured in Update Sets
- Form configurations
- Related List Configuration
- Business Rules
- Client Scripts
- UI Policy
- UI Actions
- Notifications 
- Script Inclues
- UI Page
- etc.

# Items Not Captured in Spdate Sets
- Task Records
- Users
- Groups
- Scheduled Jobs
- CMDB Records
- Sysem Properties
- etc. 

# Update Sets Planning Process
- Same version Instance
- Correct Update Set is Selected 
- Instance is cloned
- Identify Path for update Set Movement
- Plan when to commit Update Sets in Prod
- Clear naming convention
- Preview and Commit
- Review before moving

# System Update Set Tables
- Update Set [sys_update_set]
- Customer Update [sys_update_xml]

# Import Update Sets
- Go to "Retrieve" Update sets table
- Scroll all the way down for the related list to import the xml updatesets. 
