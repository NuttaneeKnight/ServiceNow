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

Put that on the scrip includes and navigate to the UI Page and creat a new one

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

// on new UI Page ADD

// for html
// <?xml version="1.0" encoding="utf-8" ?>
// <j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	
// 	<h1>Example 2</h1>
	
// </j:jelly>

// client script
var checkIncident = setIntervl(function() {
	processRequest();
}, 5000);

function processRequest() {
	var ga = new GlideAjax('ServiceNow201GlideAjax');
	ga.addParam('sysparm_name', 'getIncidentStatus');
	ga.addParam('sysparm_incident_number', 'INC0010011');
	ga.getXML(ajaxProcessor);
}

function ajaxProcessor(response) {
	var answer = response.responseXML.documentElement.getAttribute('answer');
	consle.log('Status: ' + answer);
}

// CLick webtool and click to Try it, Example 2 should render on the <h1> tag that we added on the html script shouldn't do this in PROD