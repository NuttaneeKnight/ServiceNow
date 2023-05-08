// Print a list of all incidents where the caller is the current user

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('caller', gs.getUserID()) // gs method
incidentGR.query()

// Create a user greetings

var greetingsMessage = ''
if(currentHour >= 3 && currentHour < 11) {
    greetingsMessage = 'Good morning ';
} else if (currrentHour >= 11 && currentHour < 17) {
    greetingsMessage = 'Good afternoon ';
} else {
    greetingsMessage = 'Good evening ';
}

greetingsMessage += gs.getUserDisplayName(); //gs method  

