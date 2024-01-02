var oldUser = "6bf40e050f738200b1c0ee68b1050efa";

var newUser = "c36b19631b22f1d0c220c806604bcb31";

updateIncidentField('opened_by', oldUser, newUser);
updateIncidentField('resolved_by', oldUser, newUser);
updateIncidentField('caller_id', oldUser, newUser);
updateIncidentField('assigned_to', oldUser, newUser);


function updateIncidentField(field, oldUser, newUser) {

    var incidents = new GlideRecord('incident');
	//incidents.addQuery('sys_id','008c5e5f1b822914c220c806604bcbaf')
    incidents.addQuery(field, oldUser);

    incidents.query();

    while (incidents.next()) {
        incidents.setValue(field, newUser);
        incidents.setWorkflow(false);
        incidents.autoSysFields(false);
        incidents.update();
    }
}


function updateIncidentList(field, oldUser, newUser) {

    var incidents = new GlideRecord('incident');
    incidents.addQuery(field,"IN", oldUser);
	incidents.addQuery('sys_id','008c5e5f1b822914c220c806604bcbaf')
    incidents.query();

    while (incidents.next()) {
		var listFieldValue = incidents[field];
		var arrayFieldValue = listFieldValue.split(",");
		listFieldValue.remove(oldUser);
		listFieldValue.push(newUser);

        incidents.setValue(field, arrayFieldValue.toString());
        incidents.setWorkflow(false);
        incidents.autoSysFields(false);
        incidents.update();
    }
}