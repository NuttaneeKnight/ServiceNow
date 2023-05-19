/*
The GlideAjax process from start to finish
Task => Update geolocation on task => Task form

1. Client makes request for a page that contains a Client Script with GlideAjax
2. Server sends client task form data along with Client Script
3. After an onLoad event occurs, the client side script is excuted which calls the GlideAjax API
4. GlideAjax accesses browser's XMLHttpRequest API and generates a request
5. Browser's XMLHttpRequest API sends geolocation data back to ServiceNow in the background.
6. Requestfrom client invokes Script Include, where request data is used to call specific methods with arguments. Then data is packaged upp in the form of a response. 
7. Browser receives response from the server side
8. Client Script callback processes returned data and updates location field on task.
*/

// Update the short description field of an incident to Hello world! on load.

/* STAGE 1
It All Starts With GlideAjax
 1. Create a new GlideAjax object
 2. Add name of Script Include method as sysparm_name parameter
 3. Call getXML() method and pass the name of the callback as an argument
*/
//1. Client-side code
function onLoad() {
    var ga = new GlideAjax('ServiceNow201GlideAjax')
    ga.addParam('sysparm_name', 'sayHello')
    ga.getXML(ajaxProcessor) //trigger ajax request
}

function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer'); //answer will return the Hello world!
    g_form.setValue('short_description', answer) // now we set Hello World into the short description
}
/* STAGE 2
Script Includes
 - Run on the server-side
 - Contain reusable snippets of code, making them modular
 - Only executed when invoked from another source
    - Client-side using GlideAjax
    - Server-side using the new JavaScript operator
 - May extend other JavaScript classes
 - When used GlideAjax
    - Must have Client callable set to true
    - Extends the AbstractAjaxProcessor class
    - Typically queries a table and returns record(s) to client-side as JSON
    - Has access to any variable from client-side that starts with sysparm_
    - Uses sysparm_name to invoke method in Script Include

Extending AbstractAjaxProcessor
 - AbstractAjaaxProcessor is an out-of-the-box Script Include
 - Provides helper methods
 - Client callable checkbox automatically generates required JavaScript

The GlideAjax Script Include
 1. Method passed in sysparm_name gets invoked
 2. Server-side scripts are ran
 3. return statement ends server-side script execution
 4. Response is packaged up as XML and sent to client
*/

// 2. Server-side code

var ServiceNow201GlideAjax = Class.create()
ServiceNow201GlideAjax.prototype = Object.extensObject(AbstractAjaxProcessor, {
    sayHello: function() {
        return 'Hello world!'
    },
    type: 'ServiceNow201GlideAjax'
})

