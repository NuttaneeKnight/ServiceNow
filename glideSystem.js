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

var helloText = 'Hello world!';
gs.print('Hello world!');


//gs.log('the log string', 'the source value') >script logs
gs.log('This is a log message', 'natt_logs')

//gs.error > error logs
gs.error('I am an error message')

//gs.warn()
gs.warn('I am a warning message');

//gs.addErrormessage()
gs.addErrorMessage('Stop! This is an erroe message') // >> Background message, type:error, message: Stop! This is an erroe message

//gs.beginningOfLastMonth()
gs.print(gs.beginningOfLastMonth()) //Script: 2023-04-01 07:00:00

//gs.generateGUID()
gs.print(gs.generateGUID())// generate unique global unique identifier => Script: 5c455a4097f2211036743246f053afd0

//gs.getMessage() has to change the language setting first to be able to display it.
gs.print(gs.getMessage('ago'))

//gs.getProperty()
gs.print('Hello ' + gs.getProperty('servicenow.201.hello.world')) // getting the value of the system property. sys_properties.list

//gs.setProperty()
gs.setProperty('servicenow.201.hello.world', 'testing');
//set it first
gs.print('Helllo ' + gs.getProperty('servicenow.201.hello.world')) // => should return Hello Testing instead. 

//gs.getUser()
gs.print(gs.getUser()) //=>> com.glide.sys.User@19784c0
//to get a display name you can chain the method
gs.print(gs.getUser().getDisplayName()) // ==>> returns System Administrator
gs.print(gs.getUser().getFirstName()) // ==>> returns first name => System
gs.print(gs.getUser().getLocation()) //returns location id app128037.ytz3.service-now.com:dev90700002
gs.print(gs.getUser().getUserRoles()) //admin,security_admin


