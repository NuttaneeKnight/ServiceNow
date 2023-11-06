When you want to go to the table you can use the All Navigator and get to the list view.

Such as, sc\_request.LIST or sc\_request.list

There are a few very specific (and in my opinion, unnecessarily arcane) things you’ll need to do to emulate the functionality of Processors via SRAPI, but I’ve wrapped those up in a function that you can copy-and-paste into your own SRAPI code to accomplish this goal. Specifically, that’s the redirectTo() function in the below code:

(function process(/_RESTAPIRequest_/ request, /_RESTAPIResponse_/ response) {

```
var redirectLink, incidentShortDesc;
var grIncident = new GlideRecord('incident');
var instanceURL = gs.getProperty('glide.servlet.uri', '');

/*
    If the request includes the URI parameter "inc_short_desc", get its value.
    This will be used to set the generated Incident's Short Description.
    If the request doesn't include that param, then just use "Test Incident" as the default.
 */
incidentShortDesc = request.queryParams.inc_short_desc.toString() || 'Test Incident';

//!!!WARNING!!!
//If the user is not logged in, DON'T DO ANYTHING. Just return. Don't even generate the INC.
//Unauthenticated tomfoolery may result if these aren't the first functional lines of code.
if (!gs.isLoggedIn()) {
    redirectLink = instanceURL + 'nav_to.do?uri=login.do';
    gs.addErrorMessage('Please login and try your request again.');
    //Redirect the user to the login page.
    redirectTo(response, redirectLink);
    return;
}

grIncident.initialize();
grIncident.setValue('caller_id', gs.getUserID());
grIncident.setValue('state', '1'); //1 = "New"
grIncident.setValue('short_description', incidentShortDesc);
//...
grIncident.insert();

redirectLink = instanceURL + 'nav_to.do?uri=' + grIncident.getLink(true);
gs.addInfoMessage('A new Incident has been generated. You have been redirected to the new Incident record. ');
redirectTo(response, redirectLink);

/**
 * Set redirect headers necessary to redirect the user to the provided URL.
 * The "response" object will be modified in-place, so returning it is not necessary.
 * DO NOT CALL THIS FUNCTION WITHOUT VERIFYING THAT THE USER IS AUTHENTICATED FIRST,
 *  UNLESS YOU WANT THE USER TO BE REDIRECTED TO THE TARGET REGARDLESS OF AUTHENTICATION.
 * @param  response - The RESTAPIResponse object from the SRAPI to use for
 *  the redirect. The response object will be modified in-place.
 * Docs: https://developer.servicenow.com/dev.do#!/reference/api/orlando/server/sn_ws-namespace/c_RESTAPIResponse?navFilter=rest
 * @param  redirectURL - Must be full URL including http(s)://
 * @example
 redirectTo(response, (gs.getProperty('glide.servlet.uri', '') + 'incident.do?sysparm_query=caller_id=' + gs.getUserID()));
 */
function redirectTo(response, redirectURL) {
    response.setHeader(
        "Cache-Control",
        "no-cache,no-store,must-revalidate,max-age=-1"
    );
    response.setHeader(
        "Pragma",
        "no-store,no-cache"
    );
    //This doesn't really matter, but the redirect may sometimes fail without this header.
    response.setHeader(
        "Expires",
        "Thu, 01 Jan 1970 00:00:00"
    );
    response.setStatus(301); //301 = Redirect
    response.setLocation(redirectURL);
    
    return true;
}
```

})(request, response);


https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0791764