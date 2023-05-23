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