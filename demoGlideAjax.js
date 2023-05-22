/* Use GlideAjax on an incident form

 Grab a string value on script include wait for a call back and update the script include string. 

  - Go to system admin => script includes and creat a mock script call. 
  - Make sure to check out the "Client Callable box" so that we can call it from the client side
  - copy the script include name. 
  - Navigate to the incident table
  - Click the hanburger icon and navigate to >> Configure (if it's not there, go to the table header names and click right)>> Client Scripts
  - Create a brand new client script
  - Find the new onLoad() Client script below
*/

function onLoad() {
    var ga = new GlideAjax('ServiceNow201GlideAjax')
    ga.addParam('sysparm_name', 'sayHello')
    ga.getXML(ajaxProcessor)
}

function ajaxProcessor(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer')
    g_form.setValue('short_description', answer)
}

/* 

Want to log a status of a specific incident every 5s to the UI page.


*/

var ServiceNow201GlideAjax = Class.create();
ServiceNow201GlideAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getIncidentStatus: function() {
        var incidentNumber = this.getParameter('sysparm_incident_number');
        if(!gs.nil(incidentNumber)) {
            var incidentGR = newGlideRecord('incident');
            incidentGR.get('number', incidentNumber);
            return incidentGR.state.getDisplayValue();
        } else {
            return 'No incident was found';
        }
    },

    sayHello: function() {
        return 'Hello World!';
    },

    type: 'ServiceNow201GlideAjax'
});

