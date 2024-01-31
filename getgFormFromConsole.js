// Get g_form on console.
var field = this.angular.element("div[glide-form]").last().scope();
if (field && field.hasOwnProperty("$$childHead") && field.$$childHead.hasOwnProperty("getGlideForm")) {
	var my_g_form = field.$$childHead.getGlideForm();
	//w.debug( "found g_form from first field", w.g_form);
		//g_form.setValue("company_entry", my_g_form.getValue("company"))
		//  console.log(my_g_form.getValue("company") );
}