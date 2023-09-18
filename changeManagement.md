In ServiceNow, a "Normal Change" refers to a type of change request that is considered routine, low-risk, and follows a predefined and standardized process. Normal changes are typically used for well-understood and frequently occurring changes that have been thoroughly tested and documented. These changes are often repetitive and don't require the same level of scrutiny and approval as higher-risk changes. Here are some key characteristics of normal changes in ServiceNow:

Standardized Process: Normal changes follow a predefined and standardized process that has been established in advance. The steps, tasks, and approvals required for normal changes are typically well-documented and understood.

Low Risk: Normal changes are associated with low risk and are not expected to have a significant impact on services or systems. They are generally considered routine and non-disruptive.

Minimal Change Advisory Board (CAB) Involvement: Since normal changes are low-risk and standardized, they often require minimal or no formal approval from the Change Advisory Board (CAB). Instead, they may be approved by a designated change manager or other responsible party.

Faster Approval: Normal changes can be approved more quickly than standard or emergency changes because they have already undergone thorough testing and evaluation.

Documentation: Although normal changes are routine, they still require documentation. This documentation ensures that the change process is followed consistently and provides a record of the change for auditing and compliance purposes.

Examples: Common examples of normal changes include software updates, minor hardware replacements, configuration changes to non-critical systems, and routine maintenance activities.

Automation: Many organizations use automation to expedite the approval and implementation of normal changes, further reducing the manual effort required.

Normal changes are a valuable concept in change management because they help streamline and simplify the handling of low-risk, repetitive changes, allowing organizations to focus their resources and attention on more complex and critical changes. However, it's essential to define clear criteria for categorizing changes as "normal" and ensure that the predefined processes are followed consistently to maintain the integrity of the change management process.

# Course Journey
- Change Management Configuration
- Standard Change Catalog
- Change Schedules
- Change Risk and Impact
- Change Conflict
- Change Approval Policies
- CAB Workbench

# What is CHANGE?
- The addition, modification or removal of any authorized, planned, or supported serive or service component that could have an effect on IT services. (Deprecation features that may impact some customers)

# What is CHANGE MANAGEMENT?
- Standard procedures and practice for managing requests in effective manner in an effort to drastically minimize the risk an impact a change can have on business operations. 

# Change Management Process
1. Create Change Request
2. Review Change
3. Change Evaluation
4. Change Approvals
5. Implement
6. Validate

# Change Management Application in ServiceNow
- Change Management application in ServiceNow provides a systemetic approach to control the life cycle of all changes, facilitating beneficial changes to be made with minimum distrup tion to IT services

#Change Management Plugins
- Change management core
- ITSM Roles (Request plugins for the instance)
- Business StakeholderModel
- Collision Detector
- Change Risk Calculator
- Change Schedule
- Risk Assessment
- Standard Change Catalog
- Bulk CI Changes
- Mass Update CI
- Approval Policy

# Change Type
- Standard
- Emergency
- Normal

# Standard Change
- Pre-authorized change
- Low Risk
- Can be frequently implemented
- CAB Approval not required
- Can be implemented via defined templates

# Emergency Change
- Change required to be implemented as soon as possible
- Implemented to resolve high priority issues
- Does not fllow complete normal change lifecycle
- High priority changes (move pass peers and go to CAB, Change Advisory Board)
- Post Change Request

# Normal Change
- Follow complete lifecycle of change
- Planned change which can have impact as well
- Require complete assesssment and approvals
- Change to improve service
- Implement during defined maintenance window. 

# Change Form and it's Fields
- Process Flow - New > Assess > Authorize > Scheduled > Implement > Review > Closed > Canceled
- Number - Number of Change Record
- Requested by - Reporter of Change
- Categorry - Category of CI (configuration item)
- Service - Service of which Change is implemented
- Configuration item - CI for Change
- Priority
- Risk - Risk of change implementation
- Impact - Impact of change implementation
- Type - Type of change
- Conflict status - Conflict of change status
- Conflict last run - When conflict was ran
- Assignment group - Implementer Group of Change
- Assignment to - Implementer of Change

*Planning Details of Change* Located in the bottom of the form 
# Planning
- Justification - Why this change needs to be implemented
- Implementation plan - Detailed plan and steps to implement the change
- Risk and impact analysis - Detailed risk and impact analysis
- Backout plan - Rollback plan if business is impact after implementation
- Test plan - Through validation and test plan

# Schedule
- Schedule of change

# Conflicts
- Show conflict of the change for the CI involved in the change

# Notes Section
- Note section for the itil user 

# Closure information
- Closure details of change after implementation
- Close code
- Close notes

# ServiceNow Change Process Flow
- New - Default option
- Assess - assess the quality of the change, the risk involved
- Authorize - approval state
- Scheduled - approved and waiting for the implementation
- Implement - Change is being implement (I have started implemeted this change)
- Review - Done with implement and review if the change was working properly
- Closed - Change is complete
- Cancelled 

# Create Change
- New From from Change Module
- From a CI
- Standard Change Catalog
- Copy an existing change
- You can create Change right from the incident Record to link it. Click right to the header and select create change
- You can create change from the CI, Configuration Item, as well. 

//MACD is the acronym to move, add, change, or delete services in the enterprise communication network. MACD full form is Move, Add, Change or Delete/Disconnection of services (M, A, C, D). MACD management can be a hassle for service providers as it involves manual provisioning and can cause delays in taking new services to market.
- try to create change by impersonating the itil user on the pdi
-Standard change is a preapproved chage there is a template on the pdi but not sure what are we gonna do with our org. 

# Standard Change to Launch next
# How to configure standard change
- Go to Change > Administration > Standard Change Properties
- Navifate to Standard Change Properties
- Catalog - Select the catalog that you want to prvide
- What is catalog - service catalog templates
- Category > Standard changes
- Restricted change request value - they are dufault but we can add mandatory fields if we want to
- We can also configure List of Change Request Value fields that must be completed on the "Propose a New Standard Change template" and "Modify a Standard Change Template" record producer as well
- We can also set up a default values for Change Request value as well to make it a standard template. 
- Restricted change value is where the user cannot make the change on that fields (Read-only)

# Change Management from BlackHawk
- ServiceNow Primary Roles
    - End user - No role (employee, vendor)
    - Itil role - fulfiller (incident, problem task, change tassk, request task)
    - Admin role - (Manage Access, System Development, Delete Records)
- Change Management is the process responsible for managing all Changes to the production operations environment from inception to completion
- Change management helps organizationns understand and wor to minimize risks of changes to the IT environment
- Standard - Changes with low risk, low complexity and low impact, or repeated deployment of recurring changes that have been previously approved and deployed. Requires only Manager approval (no CAB or Technical approval)
- Normal - Changes of moderate to high complexity oor impact; requires technical approval. May require CAB approval, depending on risk and impact. 
- Emergeency - Unplanned changes necessary to restore service after an outage, when critical time constraints do not allow for all the steps required on a Normal Change. It is incumbent uponn the approving Manager to verify that all necessary testing and review has been completed. Requires Manager Approval; CAB members are notified. 
- States
    - New - Save a change request and build out the details. When ready for technical review, click "Request Approval"
    - Assess - Peer review and technical approoval
    - Authorize - Change is readdy for CAB approval and schedule confirmation. Once approved, state automatically moves forward
    - Schedule - The change is waiting for the planned starrt ddate. 
    - Implement - Implement time! Click "Implement" button to signify actual start time. 
    - Review - All implementation tasks complete. Perform post-implementation review and documentation
    - Closed - No further action required
    - Canceled - A change can be canceled at any time before it is closed. 


