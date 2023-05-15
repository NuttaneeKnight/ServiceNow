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