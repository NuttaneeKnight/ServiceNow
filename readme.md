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
    gs.nil()                    => 
                                var field = {
                                    value: '',
                                    displayValue:'',
                                }
                                console.log(fielld == ");