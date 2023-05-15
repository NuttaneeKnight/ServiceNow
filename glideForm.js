/** 
 * getValue() accepts thee field name as an argument
 * 
 * setValue() accepts the field name and new value as arguments
 * 
 * */ 

var category = g_form.getValue('category'); //change the category field.

var newCategory = 'software';
g_forrm.setValue('category', newCategory)

/** getReference() method
 * 
 * Form only loads fields associated with record n form
 * use gerReference() to retrieve reference field values
 * Leverage callbacks
 * 
 * */ 
var caller = g_form.getReference('caller_id', callerCallback)
function callerCallback(caller) {
    g_form.setValue('description', caller.first_name + ' ' + caller.last_name + ' says hello.')
}

// control+shift+j >> to execute js on the window
// run client side code and leverage servicenow client side API
console.dir(g_form) //will show the API call for that table

// getValue()
var fieldValue = g_form.getValue('category')
alert(fieldValue) // alert with "Hardware" will pop up

//setValue()
g_from.setValue('category', 'software') // cannot set it on a readonly field