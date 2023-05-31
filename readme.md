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
