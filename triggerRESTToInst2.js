(function execue(current, previous /**null when async */) {
    var request = new sn_ws.RESTMessageV2("Instance 2 Incident", "create_incident");
    request.setStringParameterNoEscape("sd", current.short_description);
    request.setStringParameterNoEscape('desc', current.description);
    
})