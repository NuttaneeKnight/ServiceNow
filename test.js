var grPRJ = new GlideRecord("pm_project");
grPRJ.addNotNullQuery("u_planned_start_date");
grPRJ.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_planned_start_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D
grPRJ.setLimit(5);
while (grPRJ.next()) {
	grPRJ.setValue("start_date", grPRJ.u_planned_start_date);
}

var grPRJ2 = new GlideRecord("pm_project");
grPRJ2.addNotNullQuery("u_planned_end_date");
grPRJ2.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_planned_end_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
grPRJ2.setLimit(5);
while (grPRJ2.next()) {
	grPRJ2.setValue("end_date", grPRJ2.u_planned_end_date);
}

var grPRJ3 = new GlideRecord("pm_project");
grPRJ3.addNotNullQuery("u_actual_start_date");
grPRJ3.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_actual_start_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
grPRJ3.setLimit(5);
while (grPRJ3.next()) {
	grPRJ3.setValue("work_start", grPRJ3.u_actual_start_date);
}

var grPRJ4 = new GlideRecord("pm_project");
grPRJ4.addNotNullQuery("u_actual_end_date");
grPRJ4.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_actual_end_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
grPRJ4.setLimit(5);
while (grPRJ4.next()) {
	grPRJ4.setValue("work_end", grPRJ4.u_actual_end_date);
}

// Get g_form on console.
var field = this.angular.element("div[glide-form]").last().scope();
if (field && field.hasOwnProperty("$$childHead") && field.$$childHead.hasOwnProperty("getGlideForm")) {
	var my_g_form = field.$$childHead.getGlideForm();
	//w.debug( "found g_form from first field", w.g_form);
		//g_form.setValue("company_entry", my_g_form.getValue("company"))
		//  console.log(my_g_form.getValue("company") );
}