# Objective

* Waht is scripting in ServiceNow
* When to script
* Where to script
* Types of Scripts

# When you should do scripting

* Show an alert if field values changes and push the value of a reference field value
* Copy comments from parent to child
* Don't resolve the incident if chhild tasks are opened.
* Show Assignment group values as per the assignment groups
* Push the field value on change of other field value.

# When you should not do scripting

* Make field read-only
* Hide a field when form loads
* Set the value of a field when Assignment group changes

# Where  to script in ServiceNow?

* ServiceNow provides script editor which can be added a feild on any form and script can be written in the field
* JavaScript is written in this script editor

# Types of scripting

* Client Side - (UI, showing hiding)
* Server Side - (fetch data CRUD)
* Mid Server - (HTTPS SOAP, integrate with other application)

# Client Side Scripting

* Ajax Client Scripts
* Service Catalog UI Policy
* UI Policy
* Client Scripts
* UI Actions
* UI Contect Menus
* Validation Scripts

# Glide Class Overview

* ServiceNow provides JavaScript classes exposed by Glide
* You can work with table using scripts with the help of these API
* You can perform database operations with these Glide API
* There are 2 Glide Classes
  1. Server Side Glide Classes
  2. Client Side Glide Classes

# Server-side Glide Class

* GlideRecord
* GlideSystem
* GlideAggregate
* GlideDateTime
* GlideElement

# Client-side Glide Class

* GlideAjax
* GlideDialog Window
* GlideForm
* GlideList2
* GlideMenu
* GlideUser

# Script Execution Engine

* Before Business Rule with order less than 1000
* Before Engine (Approvals, Data Policy, Field Normalization, Workflow)
* Before Business rule with order more than 1000
* Databaase operation (Insert, Update, Delete)
* After Business Rule with order less than 1000
* After Engines (Table notifications engine, Update Sync Engine)
* Emil Notifications
* After Business rule with order more than 1000

# Syntax Editor

* ServiceNow provides support to write JavaScript in Syntax editor
* It has features like syntax coloring, keyword search, autoomatic closure of braces, cde assistance
* Script macros can be used in the editor

# Syntax Coloring

* Green is note
* Purple - js commands
* Blue - string value

# Syntax Editor Macros

* Macros provides shortcut for commonly used scripts
* It can be inserted in Script editor with a text saved in Macros
* All > Mocro (Syntax Editor Macros) - This will show the list of all the syntax shortcuts ex. type vargr and click tab will give you the boiler plate

What are we going to learn

* What is client side scripting
* Where to use Client side scripting
* Client side API and Methods
* Use cases of Client side scripting

# Client Side Scripting

* Client-side scripting execute within a user's browser and are used to manage forms and form fields. Following are examples:
  * Show an alert when form loads
  * Validate form data
  * Show/hide choices of fields
  * Hide/show section
  * Set a value on the form
  * confirmation on submit

# Where to use Client Side Scripting

* Ajax Client Scripts
* UI Policy
* Service Catalog UI Policy
* Client Scripts
* UI Actions
* UI Context Menus
* Validations Scripts

# Client-Side Glide Class - Provided by ServiceNow

* GlideAjax
* GlideDialog Window
* GlideForm
* GlideList2
* GlideMenu
* GlideUser

# Client Side API

* GlideAjax
* GlideDialogWindow
* GlideList2
* GlideFlow
* GlideUser
* GlideForm
* GlideModal
* GlideDocumentV3

# GlideUser

* GlideUser is used to get information about the logged in user
* The object which is used to access GlideUser methods is g\_user
* It is used only in Client
* Syntax - g\_user.\<GlideUserMethod()>

# GlideAjax

* GlideAjax is used to call server side code from Client
* GlideAjax instance called with GlideAjax constructor
* It is used client Scripting
* Syntax - var ga = new GlideAjax(,Script Include)

# GlideForm

* GlideForm is used to customize forms and perform some activities on form
* The object which is used to access GlideForm methods is g\_form
* It is used only in Client
* Syntax - g\_form.<GlideFormMethod>(<Parameter>)

# GlideDialogWindow

* GlideDialogWindoow is used for displaying a dialog in the current window and frame
* It is used only in Client

# Practical Lab and Use Cases

* Ex. Go to Incident > Open
* In the list view column clight right > Configure > Client Script > New
* Inside the script you can call the object function by g\_form. > The methods for g\_form will show up
* Go into any open incident records and it should throw the client script taht we set.

# Use Case

* To show a pop up on an incident form, when any one changes the priority to be high that it will become critical

* Created a new client script for a pop up that alert the user that they are changing the state to priority one.

* The name is Show Alert on P1

* Type is on change

* Field name is Priority

* Example

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
if (isLoading || newValue === '') {
return;
}

//Type appropriate comment here, and begin script below
//var a = g\_form.getValue('priority');

if(newValue == '1') {
alert('You are going to create P1 incident');
}

}

# Server Side Scripting

* What is Server Side Scripting
* Where to use Server Side scripting
* Server Side API and Methods
* Use Cases of Server Side Scripting

# What is Server Side Scripting
* Server-side scripts execute on server and database.
* Following examples:
  * Update a field when record is inserted
  * Setting a value on a field when parent is updated
  * Valadiate the role of logged in user
  * Generate events
  * Send email

# Where to use Server Side Scripting
* Access Control
* Business Rules
* Script Include
* Transform Maps
* Workflow

# Server-side Glide Class
* GlideRecord
* GlideSystem
* GlideAggregate
* GlideDateTime
* GlideElement

# GlideRecord
* GlideRecord is used for database operations
* It is used only in server side
* Syntax - create instance of GlideRecord class
  var gr = new GlideRecord(<TableName>)

# GlideSystem
- GlideSystem is used to get information about system and current logged in user
- it is referred by a variable "gs"
- Syntax- gs.<GlideSystemMethod>()


# GlideAggregate
- GlideAggregate is used to perform aggregation operation on the database
- It is extension of GlideRecord class
- Provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries
- Syntax - var agg = new GlideAggregate('incident)

# Practical Lab and Use Cases

# Fix script sample (server since we are scripting directly in the record)
- Fix Script
var gr = new GlideRecord('incident')
gr.addActiveQuery() // this will pull all active incidents
gr.setLimit(5) // set the limit on how many incidents to log, only takes integers
gr.query()
while(gr.next){
  gs.log('The incident nember is ' + gr.number)
} // This will log all active incidents


# Client Scripts
- What is Client Script?
- When to use Client Script?
- Client Script form overview
- Use Cases of Client Script

# Client Script
- Client is used to manage forms and form fields in real time
- It is excuted on browser

# When to use Client Script
- Show the alert when form loads
- Show message when a field value changes
- Change a fiels value when another field changes on the form
- Hide/Show choices of a field
- Hide/Show a section

# Client Script Form >> Go to "Client Scripts"
- System Definition > Client Scripts
- Name of your organization as a prefix for naming convention

# onLoad
- Script will run when form loads and before control is given the user
- Used when something needs to be changed on the form while it is loading
- onLoad() function will be automatically populated in the script field when onload type is selected on the form

# onChange
- Script will run when value of any field is updated or changed
- Used to perform some operation as per the field changed 
- on Change() function will be automatically populated in the script field when onChange type is selected on the form
- Has parameters - control, oldValue, newValue, isLoading, isTemplate

# onSubmit
- Script will run when form is submitted or saved
- Used to perform validations before form is saved
- onSubmit() function will be automatically populated in the script field when onSubmit type is selected on the form

# onCellEdit
- Script will run when a field value changes on a list
- onCellEdit() function will be automatically populated in the script when onCellEdit type is selected on the form
- Has parameter - sysIDs, table, oldValues, newValue, callback

* New client-scripts are run in strict mode, with direct DOM access disabled. Access to jQuery, prototype and the window object are likewise disabled. To disable this on a per-script basis, configure this form and add the "Isolate script" field. To disable this feature for all new globally-scoped client-side scripts set the system property "glide.script.block.client.globals" to false.

# Use case: Set the value of caller field with current logged in user when form loads
- Go to Client Scripts and create an onLoad() >> Set Caller 

function onLoad() {
   //If the form is a new record
   if(g_form.isNewRecord()) {

   // capture the current login user sys_id
   var user = g_user.userID;

   // 1st parameter is the name of the field, second is the value that we will push to the field
   g_form.setValue('caller_id', user); // setting the field value
   }
}

# Use case: Show an alert to the user when priority of the incident changes to P1

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    if (newValue == '1') {
        alert('You are going to submit P1 incident, the current priority of Incident is ' + oldValue);
    }
}

# Set an alert on submission of incident

function onSubmit() {
   //Type appropriate comment here, and begin script below
   alert() // submit and save are the same thing
}

# Common API and methods Used in Client Scripts
- Glide Form and its method
- Glide User and its method

# Glide Form (g_form)
- addDecoration() > On incident Form - Show user icon when contact firld is filled in
- https://dev90700.service-now.com/connect_action_icon_classes.do

- make sure to set the field to caller

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    if (newValue != ' ') {
        g_form.addDecoration('caller_id', 'icon-user-selected')
    }
}

- addErrorMessage() > On incident Forrm - Show alert message to user when Priority is set to P1

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

	//var incPriority = g_form.getValue()
	if (newValue == '1') {
		g_form.addErrorMessage('You are going to create P1 incident')
	}

    //Type appropriate comment here, and begin script below
    // if (newValue != ' ') {
    //     g_form.addDecoration('caller_id', 'icon-user-selected')
    // }

}

- addinfoMessage()
- addOption() > On incident form - add a choice to contact type field
function onLoad() {
   //Type appropriate comment here, and begin script below
   g_form.addOption('contact_type', 'portal', 'Portal');
}
- clearOptions() - on incident form - remove all choices from state field for new form
- clearValue() - on incident form - remove text from short description
function onLoad() {
   //Type appropriate comment here, and begin script below
   //g_form.addOption('contact_type', 'portal', 'Portal');

   g_form.clearValue('short_description')
} // it won't be deleted until you click save

- disableAttachments() - on incident form - disable attachment when incident is resolved
function onLoad() {
   //Type appropriate comment here, and begin script below
   //g_form.addOption('contact_type', 'portal', 'Portal');

   //g_form.clearValue('short_description')

   // this is when the state is resolved('6') the user cannot add any attachment
   var sstate = g_form,getValue('state')
   if (state == '6') {
	g_form.disableAttachments();
   }
}

- enableAttachments()
- flash() - on incident form - if priority is P! then flash should be visible on priority field
function onLoad() {
   g_form.flash('priority', 'blue', 5);
}
- getAvtionName()
- getBooleanValue() - on incident form if the knowledge check box s checked, show an info message
- getControl() - on incident form - change color of incident number text in blue when form loads
function onLoad() {
  var a = g_form.getControl('short_description');
  a.style.color = 'red';
}
- getDecimalValue()
- getIntValue()
- getLableOf() - on incident form - show alert with printing the label
function onLoad() {
 alert(g_form.getLabelOf('short_description'))
}

- getReference() - onincident form - show alert if the caller is VIP
function onLoad() {
	var caller = g_form.getReference('caller_id', alertCaller)

	function alertCaller(caller) {
		if (caller.vip == ' true') {
			alert('Hey, the caller of this iincident is VIP user')
		}
	}
}

- getSectionNames()
- getSections()
- getTableName()
- getUniqueValue()
- getValue() - on incident forrm - show aleert message when piority is P1
function onLoad() {
	var a = g_form.getValue('priority');

	if (a == '1') {
		g_form.addErrorMessage('This is P1')
	}
}

- hideRelatedList() - On incident form - show affected CI relaated list when CI is not empty
g_form.hideRelatedLists()

- isLiveUpdating()
- isMandatory() - boolean checking if it is or not true or false
- isNewRecord() - on incident form - state field should be read only f record is new 
- isSectionVisible() - check if it is visible or not one param the name of that section
- removeDecoration()
- removeOption() - on incident form - remove closed option for the ITIL users
- save()
- setDisabled()
- setDisplay() 
- setLabelOf() on incident form - change the lable of assignee
- setMandatory() - on incident form - when form is not the CI should be mandatory
- setReadOnly() - on incident form - state field should be read only when form is new
- setSectionDisplay()
- setValue() on incident form - set the value of current logged in user in caller field

function onLoad() {
	var user = g_user.userID;
	g_form.setValue('caller_id', user);
}
- showErrorBox()
- showFieldMsg()
- showRelatedList()
- submit()

# Glide User Method
- g_user.firstName
function onLoad() {
   var a = g_user.firstName

   alert('The first name of user is ' + a)
   
}

- g_user.getFullName()
function onLoad() {
   var a = g_user.getFullName();

   alert('The first name of user is ' + a);   
}

- g_user.hasRole()
function onLoad() {
   var a = g_user.hasRole('itil')
   if (a === true) {

   alert('The value of a variable is ' + a);   
   }
}

- g_user.hasRoleExactly()
function onLoad() {
   var a = g_user.hasRoleExactly('knowledge')
   if (a === true) {

   alert('The value of a variable is ' + a);   
   }
}

- g_user.userID;
function onLoad() {
   var a = g_user.userID;

   alert('Sys ID of current user is ' + a);   
   
}

# Debug Client Scripts

# How to write a JS Log
- jslog() method
- field watcher
- response time indicator

function onLoad() {
   jslog('This is an example of client script debug') ;
 
}

- try{}, catch()


# UI Policy
- What is UI Policy
- Scripting in UI Policy
- Creating UI Policy

# What is UI Policy
- UI policy is used to change the behavior of information on the form
- Runs at Client side
- It's primarily used to make fields Read-Only, Visible and Mandatory on the form
- No scripting is required
- Advanced changes required scripting

# Hot to locate UI Policy?
- System UI >> UI Policies

# Scripting in UI Policy
- Scripting in UI Policy enable a developer to create complex conditions and execute advanced behavior
- Any behavior addition to configurable functionality needs scripting

# OOB UI Policy
- ServiceNow has developed OOB UI policies which are the baseline UI policies

- Go to UI Policy Action to set the mandatory action
- Script in UI Policy
function onCondition() {
	g_form.addInfoMessage('You are going to make P1 Incident');

	alert(g_user.getFullName());
}

# Business Rules
- Server side script that runs when record is displayed, inserted, updated or deleted or when table is queried
- Used to change value in the fields when specific condition is met
- Runs on server side
- Runs with all the ways where record is accessed like List, Form or web Services. 

//3:55:21 ณัฐฐณี


Source(memberOf=CN=LHRIC-SD,OU=Groups,OU=LHRIC,OU=SWBOCES,OU=Common,DC=SWBOCES,DC=LHRIC,DC=local)






/login\_with\_sso.do?glide\_sso\_id=ab186cf01b92b550f3738622dd4bcb96
