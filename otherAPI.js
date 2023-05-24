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
gs.print('is gdt before gdt2? ' + gdt.compareTo(gdt2)) 