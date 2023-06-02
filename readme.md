Notes for the ServiceNow Developer. 

***GlideRecord (gr) Recap***

    - Use GlideRecord when dealing with database operations
    - CRUD stands for Create, Read, Update, Delete
    - GlideRecord is a server-side API
    - Thereare 2 stages to the GlideRecord API
        1. Ouery building stage
        2. Process records stage
    - Use the next() to iterate over the returned records
    - Use the get() to retrieve a specific record using a unique field, such as the sys_id
    - Use GlideAggregate over GlideRecord when dealing with aggregatees like counts (performs faster)
    - Log records before deleting or updating
    - Avoid using GlideRecord in Client Scripts
    - Use GlideRecordSecure where appriate, checking credentials. 

***GlideSystem (gs)***

The GlideSystem API provides a number of convenient methods to get information about the system, the current logged in user, etc.
    - Server-side
    - System and user data
    - Referenced by gs
    - Doesnt need to be invoked
    - Helper methods

GlideSystem API Diagram

User => Session => date

    getMessage()                => provides a way to translate text easily
                                uses the sys_ui_message table
                                First argument is the string of the message
                                System uses current user language as another parameter

                                var message = "Welcome";
                                var translatedText = gs.getMessage(message);
    print()
    eventQueue()
    addInfoMessage()
    beginningOfLastMonth()
    getProperty()               => get a system property
                                best practice instead of hardcoding
                                getProperty('glide.ui.buttons_bottom') =>returns boolean
    getUser()
    addErrorMessage()
    hasRole()
    error()
    getSession()***

Message & Log Types
    gs.addErrorMessage()        => will show it in red
    gs.addInfoMessage()         => will show in blue

    gs.log()                    => find it at System Log => all
    gs.warn()                   => find at System Log => warnings
    gs.error()                  => find it at System Log => errors
    gs.nil()                    => Every field in a GlideRecord is an object
                                Empty string comparison doesn't always work 

                                var field = {
                                    value: '',
                                    displayValue:'',  !!! This won't work!!!
                                }
                                console.log(fielld == ");

                                var incidentGR = new GlideRecord('incident');;
                                incidentGR.query();
                                while(incidentGR.next()) {
                                    if(gs.nil(incidentGR.short_description)) {
                                        gs.print(incientGR.number + ' has a nil short_description')
                                    }
                                }

***Events in ServiceNow***
User Events   -Mouse click
              -Mouse movement
              -Key press

System Events -Time
              -Database operation
              -Network activity

ServiceNow Events
    -Can be triggered by:
        -CRUD operations on tables (Business Rules)
        -Workflow activities
        -Scripts (Scheduled Jobs, Web Services, etc.)
    -Must be registered
    -Event components
        -Registry
        -Event action (Script Action, Notification)
        -Event Log

<<Event Component: Registry>>

<<Event Component: EventAction>>
    -Script Acttion -server side script that runs when a specific event is triggered
    -Notification

<<Event Component: Event Log>>
    -2 parameters that are passed in

<<Process: Event Queue>>
FI/FO data structure

==Script Actions==
    -Scripts invoked via registered events
    -Server side
    -Scope
        -current
        -event
            -param1
            -param2

<<GlideSystem eventQueue() Method>>
 eventQueue('event.name', current, parm1, parm2)
    -Add events to the event queue
    -Parameters
        Event name
        GlideRecord object
        Optional parameter
        Optional parameter

        Event Queue   3. Save record event
                      2. Create record
                      1. Login event

<<Demo: Log Hello world! Using Events>>
    1. Create event registry > Event Registration > servicenow.201.hello.world
    2. Creat Script Action >Script Action > ServiceNow 201 - Hello World > servicenow.201.hello.world> gs.log('Hello world!', 'marks_logs');
    3. Run Background script > Runscript (JavaScript executed on server) > gs.eventQueue('')
    4. Check logs > Log Entry


function onSubmit() { var action = g_form.getActionName(); alert('You pressed ' + action); }

***GlideFrom***
    - Client-side
    - Changes to form & fields
    - Referenced by g_form
The GlideForm API provides methods to customize forms. The global object g_form is used to access GlideForm methods. GlideForm methods are only used on the client. These methods are used to make custom changes to the form view of records. 

Can do this with the UI policy but for the purpose of this demo we use g_form

    function onChamge(control, oldValue, newValue) {
        if (oldValue == newValue)
        return;

        g_form.setMandatory('short_description', true)
    }

<Client-Side Environment>
 - In browser
 - Acccess to client side APIs
    - Most are accessible via global scope
 - Ctrl+Shift+j
 - Debug to browser control
    - console.log()
    - console.dir()

<GlideForm API Overview>
    <g_form>
        - form
        - fields
methods:
    getValue()
    setValue()
    setVisible()
    addErrorMessage()
    clearValue()
    addInfoMessage()
    getTableName()
    getReference()
    save()

<GlideUser API>
 - Client-side
 - User information
 - Referenced by g_user
 - Relatively small and simple API

 The GlideUser API provides access to information about the currrent user and current user roles. Using the GlideUser API avoids the need to use the slower GlideRecord queries to get user information

    Check if the current user has the ITIL role

    var hasITIL = g_user.hasRole('itil');
    if(!hasITIL) {
        alert('You do not have the permission')
    }

    get the link
    template.print("<a href='"+gs.getProperty('glide.servlet.uri')+ "kb_feedback_task.do?sys_id="+    current.sys_id + "'>"+ current.number +"</a><br/><br/>");

<GlideUser API Overview>
    GlideUser(g_user)
    user = firstNane, lastName, userID, userName
    method:
        hasRole()
        hasRoleExactly()
        hasRoleFrromList()
        getFullName()
        getClientData()

    Ex. hasRoleExactly() 
    - Takes the name of a role as its argument
    - RReturns true only if user has the specified rolw, even if current user is admin

    console.log(g_user.hasRole('approval_admin')) returns true
    console.log(g_user.hasRoleExactly('approval_admin')) returns false

    GlideUser Properties
    - Object Properties
    - Don't need getter methods

    Go to DevTool and type console.dir(g_user) to get all the properties

<Where to use GlideForm and GlideUser API?>

<Client Side>
g_form & g_user
    Client Scripts
    UI Actions
    UI Scripts
    Service Portal

<Server Side>
GlideRecord(gr), GlideSystem(gs), GlideDateTime
    Business Rules
    UI Actions
    Script Includes
    Scheduled Jobs
    Service Portal
    Web Services
    Workflows

<GlideAjax API>
The GlideAjax class enables a client script to call server-side code in a script include

 - Client-side
 - Used to call server-side Script Includes
 - Similar to jQuery's ajax method

<AJAX>
  - Asynchronous JavaScript and XML
  - Popularized by Google in Google Maps and Gmail
  - Way to make client-side requests to server-side
  without requiring a 'page reload'
  - Uses browsers's XMLHttpRequest API

<3 Stages of GlieAjax>
 - 1 Client-side code calls GlideAjjax API, which makes XMLHttpRequest to server (such as onLoad)
 - 2 Server-side code processes the request and returns a response
 - 3 Client-side code processes the response

<2 Scripting Locations To GlideAjax>
 - 1 Client-side code, Client Script or UI Page
 - 2 Server-side code, Script Include

<Scripting Best Practices>

**General Scripting**
 - Add a short description to scripts when available
 - Use condition statements if condition field is available depending on scripting location
 - Comment your code!
 - Follow a convention - easily for debugging
 - Wrap code in functions to prevent polluting the global namespace
 - Do not use hardcoded values
 - Use descriptive variables and function names
 - Verify a value exists before using it
 - le the database do the work

 **Server Side**
  - Use GlideAggregate over GlideRecord when dealing with aggregates link counts
  - Log records before deleting
  - Use GlideRecordSecure where appropriate
  - Use Script Includes over global Business Rules

  **Client-Side**
   - Make as few calls as possible
   - Do not make synchronous calls
    - GlideRecord on client-side
    - g_form.getReference w/o callback
   - Use GlideAjax when passing data beween server-side and client-side
    - use JSON when passing data from server-side to client-side
   - Debug using console.log
   - Avoid direct DOM manipulation
   - Use UI Policies over Client Scripts when available 

**Debugging**
- Is the issue reproducible? Why not?
- Know your tools
- Is the error/bug due to:
 - ServiceNowAPI
 - JS problem
 - Scoping issue
 - etc.
- Most of the time logging the value will be enough

**Debugging Tools**
- Server Side
 script debugger
 session debugger
- Client Side
 browser console
 JS executer

<Script Debugger>
    - Set breakpoints
    - View variables
    - Examine call stack

<Session Debugging>
    - Oftentimes a last resort
    - Can log just about everything
    - Business Rules orders, Security, UI policies, etc.

<Shortcut in the all navigator>
{tablename}.list
sc_cat_item.list >> Will lead to the list view of the catalog item
{tablename}.do >> Will take you to the do list view (showing inside the record)
To find ut the field and the table name click right and >> show. or click dictionary

<Find the property in the console> Useful for undocumented document 
for(property in g_user) { console.log(property + ': ' + g_user[property])}

<Find the script that use JSUtil API>
 - Navigate to Script Includes
 - Navigate to filter
 - Put the condition that "Script contains JSUtil"
 - Run the condition

<Quiz>
 1. Debigging in servicenow can happen in both service side and client side? True
 2. It's more efficient to perform server-side logic with JavaScript than within the database query? False
 3. This is a modern debugging tool where you can set breakpoints and examine scopes in scripts? Script Debugger
 

**Creating A Custom App** 
 1. Custon App Intro
 2. Requirements
 3. Design
 4. API Overview
 5. Execution
 6. Demo - Creating Fetch
 7. Demo - Customizing Fetch
 8. ection Recap

<Custom App>
 - Dog adoption app
 - Focus on scripting
 - Rapid prototyping

 <Requirements>
  - As a person adopting a dog:
    >> I'd like to view all available dogs
    >> I'd like the ability to send an adoption request to adoption center
  - As an adoption center:
    >> I'd like to post new dogs
    >> I'd like the ability to receive emails bout adoption requests
    >> I'd like the ability to edit information about a specific dog

 <Scope>
  - For the purpose of practice we will have only 2 tables
  - UI Page & UI Action so we can leverage APIs
  - Minimum Viable Product (MVP)
  - Will not represent Cuustom App Development Practices

  <Design>

  Components:
   1. Tables
    a. Dogs (x_0232_ fetch_dogs)
    b. Adoption Centers (x_0232_fetch_adoption_center)
   2. UI Page
    a. Create new dog records
   3. UI Action
    a. Adopt button on dog form
   4. Event
   5. Email Notification

Dogs {
    number : String,
    name: String,
    status: Choice,
    picture: Image,
    breed: Choice,
    age: Integer
    shots: Y/N
    neutered: Y/N
    bio: String
    adoption_center: Reference
}

Adoption Centers {
    number: String,
    name: String,
    phone: Phone Number
    email: String,
}
![image](https://github.com/NuttaneeKnight/ServiceNow/assets/110426340/d5941ab8-795b-426b-be86-7ae70238a95e)

 *Execution* 
 1. Create Customm Ap
 2. Create Tables
 3. Create Fields
 4. Configure Form View
 5. Create UI Page
 6. Create Event
 8. Create Email Notifivation
 9. Create UI Action



Building App

- Navigate to Applications, System Applications >> Studio
- Create an App
- Name it and it automatically generate the scope
- x_1028511_fetch
- Then create
- x_1028511_fetch.user
- Navigate to Crete a table
- Create table from scratch

Once it's done

 - Navigate to your application "fetch"
 - The left panel view are all our associated list
 
 Navigate to Dogs table
 - Click on the "New" button
 - Provide a type of string for the field
 - Give "Name" to th Column Lable, this will auto generate Coulumn name.
 - Give Max Length to 100 characters. 
 - Submit the form

 - Create another new field for dogs, for Status this time it will be a Choice for type
 - Submit the form first then we will add the choices later
 - Go to the related list below
 - Navigate to Choices
 - Create New
 - Name the Element Status
 - Name Lable to Active
 - Name Value to active 
 - Save the progress
 - Do the same for "Pending" then insert and stay to not lose the record. 
 - Make sure that you Sequence has a value of "1" as an integer
 - Do the same for Adopted and increment the sequence.

Create an a Picture table as well with an image type
 - Follow the same process

Resume to creat a New table
 - Make this a Choice type
 - the name will be breed
 - will add the choices later after save
 - Go down to the related list and creat new choices after

**To see all the updates, go to the top of the form click right and choose Reload form. This will prevent the page to go back to default again**

Create Age field
 - Do the same for the age, make sure that the type is integer. 

Create Shots fields
 - Same procedure but the request type is boolean. With service it is under True/False type value.

Create is Neutered/Spay field
 - Same procedure set the type to be boolean. 

Create a Bio field
 - Set the Bio to be a string type and set the Max Lenggth to 4,000 so that we can write the details about the pooch!

Now that we have all the main fields for the "Dogs table" Next step is to create an Adoption center table

Adoption Center Table

 - Navigate to the top left go to "+ Create Application File"
 - Select Table
 - Click Create, If the screen doesn't render, double click it and you should be ablt to create it with the new Utah updates.

 - Give the lable name as Adoption Center
 - Under related list >> Controls, check off auto-number
 - Set prefix to AC - Adoption Center
 - Submit the form