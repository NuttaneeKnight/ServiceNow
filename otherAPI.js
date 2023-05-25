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

*/
var xmlString = '<xml><incident><actions_taken/><active>true</active><activity_due/><additional_assignee_list/><approval>not requested</approval><approval_history/><approval_set/><assigned_to display_value="Mickey Mouse">b64ad88397b2211036743246f053afef</assigned_to></xml>'

var xmlDocument = new XMLDocument2()
xmlDocument.parseXML(xmlString)
gs.print(xmlDocument.getNodeText('//active'))