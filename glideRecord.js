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


// addEncodedQuery() only takes one string argument of the encoded query from the filter (click right and copy at the last filtered item)

var queryString = 'category=inquiry^active=true^opened_by=6816f79cc0a8016401c5a33be04be441'
var incidentGR = new GlideRecord('incident')
incidentGR.addEncodedQuery(queryString)
incidentGR.query();
while(incidentGR.next()) {
    gs.print(incidentGR.number)
}


// Create Incident with GlideRecord with newRecord() & insert() with background script

var newIncident = new GlideRecord('incident') //will initialize the record with default value and also the default function
newIncident.newRecord();
newIncident.short_description = 'This incident was created from a background script.'
newIncident.insert(); //without this line the new incident will never get inserted to the record

var newIncident = new GlideRecord('incident') //will initialize the record with default value and also the default function
newIncident.newRecord();
newIncident.short_description = 'This incident was created from a background script.'
var newIncidentSysID = newIncident.insert(); //without this line the new incident will never get inserted to the record
gs.print(newIncidentSysID) //to see the incident sys_id since the inset() return sys_id
// returns Script: 223a3c629722211036743246f053af7e


// in case of creating multipple incidents in the background script. 
var newIncidents= [];
var counter = 1;
var incidentGR = new GlideRecord('incident');
while(counter <= 5) {
    incidentGR.newRecord()
    incidentGR.short_description = 'Incident #' + counter
    counter++
    newIncidents.push(incidentGR.insert())
}

gs.print(newIncidents); //returns 08db3c629722211036743246f053af84,40db74269722211036743246f053af7c,4cdb74269722211036743246f053af7e,48db74269722211036743246f053af81,44db74269722211036743246f053af84


//Delete() Before we delete anything, we have to make sure that the record exists, just print it first then perform the delete

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('short_description', 'Incident #3')
incidentGR.query()
while(incidentGR.next()) {
    // gs.print(incidentGR.number + ' has ' + incidentGR.short_description) //printing the record to check
    incidentGR.deleteRecord()
}

//orderBy() accepts only one field argument. Print out the incident by the order of the input field. 
//ascending by default use orderbyDesc()
var incidentGR = new GlideRecord('incident')
incidentGR.orderBy('short_description')
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number + ' : ' + incidentGR.short_description)
}

//setLimit() similar to slice() on JS, takes only 1 argument that is an integer

//will render and show 5 records
var problemGR = new GlideRecord('problem')
//can combine with orderBy
problemGR.orderBy('short_description')
problemGR.setLimit(5)
problemGR.query();
while(problemGR.next()) {
    gs.print(problemGR.number)
    gs.print(problemGR.short_description)
}

//canCreate() canRead() canWrite() canDelete() => These methods will check the ACL

var problemGR = new GlideRecord('problem')
problemGR.query()
if(problemGR.canCreate() && problemGR.canRead() && problemGR.canWrite() && problemGR.canDelete()) {
    gs.print('Have the CRUD acces!')
}

//getRowCount() 

var incidentGR = new GlideRecord('incident')
incidentGR.query()
gs.print(incidentGR.getRowCount())

//hasNext() not the same as the next() it only returns the boolean 
//next() performs the iteration whil hasNext() does only boolean
var incidentGR = new GlideRecord('incident')
incidentGR.query()
gs.print(incidentGR.hasNext()) // should return the boolean

//hasNext in the if condition

var incidentGR = new GlideRecord('incident')
incidentGR.query()
if(incidentGR.hasNext()) {
    gs.print(incidentGR.number) //nothing will print because the of the hasNext() boolean if use next() the incident number will print
}

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('priority', 0); // this will print
incidentGR.query()
gs.print(incidentGR.hasNext()) //will return false

//get()
var incidentGR = new GlideRecord('incident')
incidentGR.get('number', 'INC0010009') //doesn't have to be only sys_id, can be any unique field
gs.print(incidentGR.number)

//getLink()
var incidentGR = new GlideRecord('incident')
incidentGR.get('number', 'INC0010009')
gs.print(incidentGR.getLink())

//deleteMultiple() together with encodedQuery - doesn't need a query to run
var incidentGR = new GlideRecord('incident')
incidentGR.addEncodedQuery('short_descriptionLIKEincident #')
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.short_description) //good practice to log the record. 
}

var incidentGR = new GlideRecord('incident')
incidentGR.addEncodedQuery('short_descriptionLIKEincident #')
incidentGR.deleteMultiple();

//update() by changing the urgency aka priority
var incidentGR = new GlideRecord('incident')
incidentGR.get('number', 'INC0010005')
incidentGR.urgency = 2
incidentGR.update()

var incidentGR = new GlideRecord('incident')
incidentGR.addQuery('urgency', 2)
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number)
    incidentGR.urgency = 3
    incidentGR.update();
}

//addNullQuery()
var incidentGR = new GlideRecord('incident')
incidentGR.addNullQuery('short_description') //will print out the incident's number that has no short description
incidentGR.query()
while(incidentGR.next()) {
    gs.print(incidentGR.number)
}