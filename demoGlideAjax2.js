/* 
First add a new method to the script includes
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

    getLatestIncidents: function() {
        var incident = [];
        var limit = parseInt(this.getParameter('sysparm_limit'))
        if(!gs.nil(limit) && typeof limit === 'number') {
            incidentGR.orderByDesc('sys_created_on');
            incidentGR.setLimit(limit);
            incidentGR.query();
            while(incidentGR.next()) {
                var record = {};
                record.number = incidentGR.number.getDisplayValue();
                record.sysID = incidentGR.sys_id.getDisplayValue();
                record.shortDescription = incidentGR.short_description.getDisplayValue();
                incident.push(record);
            }
            return new JSON().encode(incidents);
        } else {
            return "something isn't right....."
        }
    },

    sayHello: function() {
        return 'Hello World!';
    },

    type: 'ServiceNow201GlideAjax'
});