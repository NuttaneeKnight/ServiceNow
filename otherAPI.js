/* 
GlideDateTime API

The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields. 

Used for   
    - Date/time operations
    - Formatting date/time
    - Connverting between date//time formats

Server-side API

*/

// GlideDate Time Instantiation

// option 1- current time in GMT
var gdt = new GlideDateTime();

// option 2 - instantiating a GideDateTime object with string
var gdt = new GlideDateTime("2017-05-25 12:02:/30")

//option 3 - string variable
var someTimeAgo = "2017-05-25 12:02:30"
var gdt = new GlideDateTime(someTimeAgo)

// GlideDateTime substract( Method)
// Show the difference in time (days, minutes, seconds) between 2 dates

var start = new GlideDateTime("2017-01-01 09:00:00")
var end = new GlideDateTime("2017-01-7 08:00:00")

var difference = GlideDateTime.substract(start, end)
gs.print(difference.getDisplayValue())

// Use it on the background script.
var gdt = new GlideDateTime();
gs.print(gdt) // can add typeof to see what typy of value it is (typeof gdt)

var gdt2 = new GlideDateTime('2017-05-25 12:02:30')
gs.print(gdt2)

var someTimeAgo = "2017-05-25 12:02:30"
var gdt3 = new GlideDateTime(someTimeAgo);
gs.print(gdt3);

// addDaysUTC()
var gdt = new GlideDateTime()
gs.print('Now: ' + gdt)
gdt.addDaysUTC(3)
gs.print('New value: ' + gdt)

// addMonthsUTC()
var gdt = new GlideDateTime()
gs.print('Now: ' + gdt)
gdt.addMonthsUTC(3)
gs.print('New value: ' + gdt)

// before() will be false because the processing time is faster than the system
var gdt = new GlideDateTime()
gs.print('Now: ' + gdt)
var gdt2 = new GlideDateTime()
gs.print('is gdt before gdt2? ' + gdt.before(gdt2))


// compareTo()
var gdt = new GlideDateTime('2017-06-27 19:46:39')
gs.print('gdt: ' + gdt)
var gdt2 = new GlideDateTime()
gs.print('gdt2: ' + gdt2)
gs.print('compare ' + gdt.compareTo(gdt2)) //false return -1

// substract()
var gdt = new GlideDateTime('2017-06-27 19:46:39')
gs.print('gdt: ' + gdt)
var gdt2 = new GlideDateTime()
gs.print('gdt2: ' + gdt2)
var difference = GlideDateTime.subtract(gdt, gdt2)
gs.print('difference: '  + difference.getDisplayValue()) // seconds is not evaluated through this method. 

/* 
GlideElement API

The scoped GlideElement API provide a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord

- Used for:
    - Accessing GlideRecord fields
    - Manupulating GlideRecord fields

- Server-side API

*/

// GlideElement getDisplayValue() Method
// Direct access vs toString() vs getDisplayValue()

// direct access
var incidentGR = new GlideRecord('incident')
incidentGR.get('b089548397b2211036743246f053af4c')
gs.print(incidentGR.caller_id) // print caller id

// toString()
var incidentGR = new GlideRecord('incident')
incidentGR.get('b089548397b2211036743246f053af4c')
gs.print(incidentGR.caller_id.toString()) // print the caller id

// getDisplayValue()
var incidentGR = new GlideRecord('incident')
incidentGR.get('b089548397b2211036743246f053af4c')
gs.print(incidentGR.caller_id.getDisplayValue()) // Print the name if the caller

// GlideElement getHTMLValue()
// Grab thee HTML of an HTML field

var kbArticleGR = new GlideRecord('kb_knowledge')
kbArticleGR.get('e97ee81eff6002009b20ffffffffffe0')
gs.print(kbArticleGR.text.getHTMLValue())

// glideElement get JournalEntry()
// Grab the display value of a reference field

var incidentGR = new GlideRecord('incident')
incidentGR.get('b089548397b2211036743246f053af4c')
gs.print(incidentGR.comments)

//grab all the journal entries
var incidentGR = new GlideRecord('incident')
incidentGR.get('b089548397b2211036743246f053af4c')
gs.print(incidentGR.comments.getJournalEntry(-1))

// nil method in glideElement

var incidentGR = new GlideRecord('incident')
incidentGR.query()
while(incidentGR.next()) {
    if(incidentGR.short_description.nil()) {
        gs.print(incidentGR.number)
    }
} // print the incidents that has no short description

/* XML Document2 API 

 XMLDocument2 is a JavaScript Object wrapper for parsing and extracting XML data from an XML string.

 - Used for: working with XML documents and nodes
 - Server-side API
 - check in bg script
*/
var xmlString = '<xml><incident><actions_taken/><active>true</active><activity_due/><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to display_value="Mickey Mouse">b64ad88397b2211036743246f053afef</assigned_to></incident></xml>'

var xmlDocument = new XMLDocument2()
xmlDocument.parseXML(xmlString)
gs.print(xmlDocument.getNodeText('//active')) //return true

// creatElement
var xmlString = '<xml><incident><actions_taken/><active>true</active><activity_due/><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to display_value="Mickey Mouse">b64ad88397b2211036743246f053afef</assigned_to></incident></xml>'

var xmlDocument = new XMLDocument2()
xmlDocument.parseXML(xmlString)
xmlDocument.createElement('pet')
gs.print(xmlDocument)

//createElementWithTextValue()
var xmlString = '<xml><incident><actions_taken/><active>true</active><activity_due/><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to display_value="Mickey Mouse">b64ad88397b2211036743246f053afef</assigned_to></incident></xml>'

var xmlDocument = new XMLDocument2()
xmlDocument.parseXML(xmlString)
xmlDocument.createElementWithTextValue('pet', 'Oscar')
gs.print(xmlDocument)

//getFirstNode
var xmlString = '<xml><incident><actions_taken/><active>true</active><activity_due/><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to display_value="Mickey Mouse">b64ad88397b2211036743246f053afef</assigned_to></incident></xml>'

var xmlDocument = new XMLDocument2()
xmlDocument.parseXML(xmlString)
gs.print(xmlDocument.getFirstNode('xml/incident'))

/* 

More Documented APIs
 - GlideModal
 - Workflow
 - GlideSysAttachment
 - RESTMessageV2
 - RESTResponseV2
 - SOAPMessageV2 , Simple Object Access Protoocol
 - SOAPResponseV2
 - GlideDuration
 - etc.

 Undocumented APIs
  - Script Includes or inaccessible server scripts
  - Common undocumented APIs
   - JSUtils
   - Workflow
   - DiscoveryCMDBUtil
   - AssetandCI
   - CMDBItem
   - SNC
   - GlideStringUtil
   - Cart
   - SPCart
   - etc. Never modify these out of the box Script Includes!!

Spotting Script Includes
 - In out-of-the box scripts, you'll see something like this:
Eample below
*/

var someVar = new someScript().someFunction();

// such as
var someScript = Class.create;
someScript.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    someFunction: function() {
        return 'Hello World!'
    },
    type: 'someScript'
})

/* 
Creating Our Own API (With Script Include)
 -What we'll need
  - A collection of common functions
  - A Acript Include
  - A place we'd like to invoke them from 

  Our API >> Script Include
  Then leverage with GlideRecord

  Steps:
   - Go to Script Include(System Definition) then create NEW
   - Create the name of your choiice, must be unique then the system will auto generte the script. 
   - See customed sample script below
*/

var IncidentUtils = Class.create();
IncidentUtils.prototype = {
    initialize: function() {
    },
	
	getLatestIncidents: function(num) {
		var limit = num || 5
		var results = []
		var incidentGR = new GlideRecord('incident')
		incidentGR.orderByDesc('sys_created_on')
		incidentGR.setLimit(limit)
		incidentGR.query()
		while(incidentGR.next()) {
			results.push(incidentGR.number.getDisplayValue())
		}
		return results
	},

    grabRecords: function(tab, lim, order) {
        var table = tab || 'incident'
        var limit = lim || 5;
        var orderBy = order || 'sys_created_on'
        var gr = new GlideRecord(table)
        gr.orderBy(order)
        gr.setLimit(limit)
        gr.query()
        while(gr.next()){
            results.push(gr.number.getDisplayValue())
        }
        return results
    },

    type: 'IncidentUtils'
};

// Go test in the background script with the following code.

var incidents = new IncidentUtils().getLatestIncidents(10)
gs.print(incidents);

//Test for grabRecords
var records = new IncidentUtils().grabRecords('incident', 10, 'sys_created_on')
gs.print(records)

/* 
    Client Side
     - GlideForm
     - GlideUser
     - GlideAjax
     - Client Scripts
     - UI Actions
     - UI Scripts
     - Service Piortal

    Server Side
     - GlideRecord
     - GlideSystem
     - GlideDateTime
     - GlideElement
     - XMLDocument2
     - Business Rules
     - UI Actions
     - Script Includes
     - Scheduled Jobs
     - Web Services
     - Workflows

Tips:
 - Use GlideDateTime when dealing with dates and times
 - Use GlideEleement wh nmanipulating fields in a GlideRecord query
 - Use XML Document2 when dealing with XML
 When trying to find documentation on a undocumented API, Google is the BFF
 - If Script Include is accessible, read through it
 - Create new APIs by using Script Includes

 Quizes: 
  - Which API is used to manipulate GlideRecord elements? GlideElement
  - Which GlideDateTime method will compare 2 dates and return a -1, 0 or 1 depending whether the dates equal each other? compareTo()
  - Undocumented APIs are commonly found within which record type?
*/