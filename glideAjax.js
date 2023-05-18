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
// 2. Server-side code
var ServiceNow201GlideAjax = Class.create()
ServiceNow201GlideAjax.prototype = Object.extensObject(AbstractAjaxProcessor, {
    sayHello: function() {
        return 'Hello world!'
    },
    type: 'ServiceNow201GlideAjax'
})
