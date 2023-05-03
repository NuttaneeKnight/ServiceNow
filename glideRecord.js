//READ Method

var incidentGR = new GlideRecord('incident');
incidentGR.query();
while(incidentGR.next()) {
 gs.print(incidentGR.number);
}

var incidentGR = new GlideRecord("incident");
incidentGR.query();
incidentGR.next() //will need this to go into the record
gs.print(incidentGR.number);

var incidentGR = new GlideRecord('incident');
incidentGR.addQuery('priority', 1);
incidentGR.query();
while(incidentGR.next()) {
    gs.print('Priority 1 incident: ' + incidentGR.number + ' : ' + incidentGR.priority)
    // can also Dot Walk to the value Ex. incidentGR.priority.getDisplayValue() -> Will print out the value name display which is critical. 
}

var incidentGR = new GlideRecord('incident')
incidentGR.get('ed92e8d173d023002728660c4cf6a7bc')
gs.print.get(incidentGR.number); // 1 approach
gs.print('incidentGR.number' + ' has a sys_id of ' + incidentGR.sys_id) // second approach 

