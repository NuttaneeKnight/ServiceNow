(function execue(current, previous /**null when async */) {
    var request = new sn_ws.RESTMessageV2("Instance 2 Incident", "create_incident");
    request.setStringParameterNoEscape("sd", current.short_description);
    request.setStringParameterNoEscape('desc', current.description);
    request.setStringParameterNoEscape("ctype", current.contact_type);
    var response = request.execute();

    var responseBody = response.getBody();
    var statusCode = response.getStatusCode();

    var respObj = JSON.parse(responseBody);
    //Do not use current.update inside the business rules. 
    //current.u_client_ticket_reference = respObj.result.sys_id;
    //current.update(); !This will make an infinite loop!

    
    getSelection.log("Response Body - " +"\nStatus Code - " + statusCode, "Incidents Integration Test");
})(current, previous);