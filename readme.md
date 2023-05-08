Notes for the ServiceNow Developer. 

GlideRecord Recap

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

GlideSystem (gs)

The GlideSystem API provides a number of convenient methods to get information about the system, the current logged in user, etc.
    - Server-side
    - System and user data
    - Referenced by gs
    - Doesnt need to be invoked
    - Helper methods

GlideSystem API Diagram

User => Session => date

    getMessage()
    print()
    eventQueue()
    addInfoMessage()
    beginningOfLastMonth()
    getProperty()
    getUser()
    addErrorMessage()
    hasRole()
    error()
