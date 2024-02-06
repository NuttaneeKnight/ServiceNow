// var grPRJ = new GlideRecord("pm_project");
// grPRJ.addNotNullQuery("u_planned_start_date");
// grPRJ.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_planned_start_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D
// grPRJ.setLimit(5);
// while (grPRJ.next()) {
// 	grPRJ.setValue("start_date", grPRJ.u_planned_start_date);
// }

// var grPRJ2 = new GlideRecord("pm_project");
// grPRJ2.addNotNullQuery("u_planned_end_date");
// grPRJ2.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_planned_end_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
// grPRJ2.setLimit(5);
// while (grPRJ2.next()) {
// 	grPRJ2.setValue("end_date", grPRJ2.u_planned_end_date);
// }

// var grPRJ3 = new GlideRecord("pm_project");
// grPRJ3.addNotNullQuery("u_actual_start_date");
// grPRJ3.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_actual_start_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
// grPRJ3.setLimit(5);
// while (grPRJ3.next()) {
// 	grPRJ3.setValue("work_start", grPRJ3.u_actual_start_date);
// }

// var grPRJ4 = new GlideRecord("pm_project");
// grPRJ4.addNotNullQuery("u_actual_end_date");
// grPRJ4.query(); // https://lhricdev.service-now.com/now/nav/ui/classic/params/target/pm_project_list.do%3Fsysparm_query%3Du_actual_end_date!%253DNULL%26sysparm_first_row%3D1%26sysparm_view%3D%26sysparm_choice_query_raw%3D%26sysparm_list_header_search%3Dtrue
// grPRJ4.setLimit(5);
// while (grPRJ4.next()) {
// 	grPRJ4.setValue("work_end", grPRJ4.u_actual_end_date);
// }

// // Get g_form on console.
// var field = this.angular.element("div[glide-form]").last().scope();
// if (field && field.hasOwnProperty("$$childHead") && field.$$childHead.hasOwnProperty("getGlideForm")) {
// 	var my_g_form = field.$$childHead.getGlideForm();
// 	//w.debug( "found g_form from first field", w.g_form);
// 		//g_form.setValue("company_entry", my_g_form.getValue("company"))
// 		//  console.log(my_g_form.getValue("company") );
// }

// var debugEnable = gs.getProperty("lhric.wf.event_setup_debug") || "false";
// var eventType = current.variables.is_this_a_list_of_dates_or_recurring_dates;
// // Check what type of event, Single date, Multi-dates or Recurring dates.
// if (eventType == "Singledate") {
//   createEventTasks(current.variables.start_date, current.variables.start_time);
// } else if (eventType == "Multipledates") {
//   var mrvsDate = JSON.parse(current.variables.event_dates);

//   for (var day = 0; day < mrvsDate.length; day++) {
//     createEventTasks(
//       mrvsDate[day].what_is_the_date_and_time_of_the_event,
//       mrvsDate[day].start_time_mrvs
//     );
//   }
// } else {
//   // recurring dates
//   var dayOfFirstOccurence = current.variables.day_of_first_occurence;
//   var startTime = current.variables.start_time_recurring;
//   var daysOfTheWeek = [
//     current.variables.monday,
//     current.variables.tuesday,
//     current.variables.wednesday,
//     current.variables.thursday,
//     current.variables.friday,
//     false,
//     false,
//   ];

//   var numberOfOccurences = current.variables.number_of_occurences;
//   var datesArray = [];

//   var gd = new GlideDate();
//   gd.setValue(dayOfFirstOccurence);

//   var dayOfTheWeek = gd.getDayOfWeekUTC();
//   if (daysOfTheWeek[dayOfTheWeek - 1] == "true") {
//     datesArray.push(gd.getValue());
//   }

//   var count = 0;
//   while (datesArray.length < numberOfOccurences) {
//     gd.addDays(1);
//     dayOfTheWeek = gd.getDayOfWeekUTC();
//     if (daysOfTheWeek[dayOfTheWeek - 1] == "true") {
//       datesArray.push(gd.getValue());
//     }
//     if (count > 300) break;
//     count++;
//   }
//   for (var day = 0; day < datesArray.length; day++) {
//     createEventTasks(datesArray[day], startTime);
//   }
// }
// /**
//  * Generating a task according to the date and time parameter.
//  * @param {string} date - Date of the event
//  * @param {string} time - Time of the event
//  */
// function createEventTasks(date, time) {
//   var task = new GlideRecord("sc_task");
//   // Catalog Item Event Setup
//   var eventSetupCatItem = "fbff3ba71bad711024a5fd1b1e4bcb58";

//   task.initialize();
//   task.request_item.setValue(current.sys_id);
//   //task.parent.setValue(current.sys_id)
//   //task.cat_item.setValue(eventSetupCatItem)

//   // Short description based on catalog variables.
//   task.setDisplayValue(
//     "assignment_group",
//     current.variables.wf_task_1_assignment_group + ""
//   );
//   task.setDisplayValue(
//     "assigned_to",
//     current.variables.wf_task_1_assigned_to + ""
//   );
//   task.short_description =
//     current.variables.wf_task_1_short_description + " " + date;

//   task.due_date = date;

//   var desc = current.variables.wf_task_1_description;
//   // Build and populate the description of the catalog task.
//   if (desc == "") {
//     task.description =
//       "Please complete the appropriate steps to fulfill this request: " +
//       current.variables.wf_task_1_short_description;
//   } else {
//     task.description = desc;
//   }
//   debug(
//     "Task created with short description" + task.short_description,
//     debugEnable
//   );
//   task.description += "\nDate: " + date + " Time: " + time;
//   task.insert();
//   // 		var grTask = task.insert()
//   // 		gs.eventQueue('Howie & Nuttanee rule!', grTask, current.requested_by, task.description)
// } //end of createEventTasks()

// function debug(message, isEnable) {
//   if (isEnable == "true") {
//     gs.info("Event Setup Task Generation: " + message);
//   }
// }

// [3:31 PM] Howie Austin

// var startDate = new Date('10/17/2023')

// 	var endDate = new Date('10/24/2023')

// 	var curDate = new Date('10/17/2023')

// 	var count = 0

// 	while (curDate < endDate) {

// 		if (count > 30) {

// 			break

// 		}

// 		curDate.setDate(curDate.getDate() + 1)

// 		count++

// 		console.log(endDate - curDate)

// 	}

// 	console.log(endDate - startDate)

// function onLoad() {
//   //Type appropriate comment here, and begin script below

// }

// calculate_number_of_occurrences = function() {
//  console.log("STARTING CALCULATION!")
//  var totalNumber = 0;
//  var day_of_first_occurence = g_form.getValue('day_of_first_occurence');
//  var day_of_last_occurence = g_form.getValue('day_of_last_occurence');
//  var monday = g_form.getValue('monday') == "true";
//  var tuesday = g_form.getValue('tuesday') == "true";
//  var wednesday = g_form.getValue('wednesday') == "true";
//  var thursday = g_form.getValue('thursday') == "true";
//  var friday = g_form.getValue('friday') == "true";
//  var saturday = g_form.getValue('saturday') == "true";
//  var sunday = g_form.getValue('sunday') == "true";

//  var daysCount = arrayCount([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
//  console.log("daysCount: " + daysCount)
//  if (day_of_first_occurence == '' || day_of_last_occurence == '' || daysCount == 0) {
//    return;
//  }

//  var startDate = new Date(day_of_first_occurence);
//  var endDate = new Date(day_of_last_occurence);
//  var curDate = new Date(day_of_first_occurence);
//  var milliDay = 1000*60*60*24;

//  var count = 0
//  while (curDate <= endDate) {
//    if (count > 30) {
//      break;
//    }
//    if (curDate.getDay()==1 && monday){
//      console.log("MONDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==2 && tuesday){
//      console.log("TUESDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==3 && wednesday){
//      console.log("wednesday!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==4 && thursday){
//      console.log("THURSDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==5 && friday){
//      console.log("FRIDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==6 && saturday){
//      console.log("SATURDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==7 && sunday){
//      console.log("SUNDAY!!!")
//      totalNumber++;
//    }
//    console.log(count + ": " + (endDate - curDate)/milliDay + " Days to check")

//    curDate.setDate(curDate.getDate() + 1);
//      //curDate += 1000*60*60*24
//      //curDate = curDate[Symbol.toPrimitive]('number')
//    count++
//    console.log((endDate - curDate)/ milliDay)
//    console.log("totalNumber " +totalNumber)
//    console.log("daysCount " +daysCount)
//  }

//  console.log(endDate - startDate)

//  g_form.setValue('number_of_occurences', totalNumber);

// }
//    arrayCount = function(arr) {
//    var result = [];
//    for(var i = 0; i < arr.length; i++) {
//      if (arr[i] === true) {
//        result.push(arr[i]);
//      }
//    }
//    return result.length;
//     }

// function onLoad() {
//   //Type appropriate comment here, and begin script below

// }

// calculate_number_of_occurrences = function() {
//  console.log("STARTING CALCULATION!")
//  var totalNumber = 0;
//  var day_of_first_occurence = g_form.getValue('day_of_first_occurence');
//  var day_of_last_occurence = g_form.getValue('day_of_last_occurence');
//  var monday = g_form.getValue('monday') == "true";
//  var tuesday = g_form.getValue('tuesday') == "true";
//  var wednesday = g_form.getValue('wednesday') == "true";
//  var thursday = g_form.getValue('thursday') == "true";
//  var friday = g_form.getValue('friday') == "true";
//  var saturday = g_form.getValue('saturday') == "true";
//  var sunday = g_form.getValue('sunday') == "true";

//  var daysCount = arrayCount([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
//  console.log("daysCount: " + daysCount)
//  if (day_of_first_occurence == '' || day_of_last_occurence == '' || daysCount == 0) {
//    return;
//  }

//  var startDate = new Date(day_of_first_occurence);
//  var endDate = new Date(day_of_last_occurence);
//  var curDate = new Date(day_of_first_occurence);
//  var milliDay = 1000*60*60*24;

//  //var count = 0
//  while (curDate <= endDate) {
//    if (totalNumber > 30) {
//      g_form.addErrorMessage("Maximum 30 occurences exceeded. Final day is " + curDate)
//      break;
//    }
//    if (curDate.getDay()==1 && monday){
//      console.log("MONDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==2 && tuesday){
//      console.log("TUESDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==3 && wednesday){
//      console.log("wednesday!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==4 && thursday){
//      console.log("THURSDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==5 && friday){
//      console.log("FRIDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==6 && saturday){
//      console.log("SATURDAY!!!")
//      totalNumber++;
//    }else if (curDate.getDay()==7 && sunday){
//      console.log("SUNDAY!!!")
//      totalNumber++;
//    }
//    console.log(count + ": " + (endDate - curDate)/milliDay + " Days to check")

//    //curDate.setDate(curDate.getDate() + 1)

//    curDate.setDate(curDate.getDate() + 1)
//      //curDate += 1000*60*60*24
//      //curDate = curDate[Symbol.toPrimitive]('number')
//    count++
//    console.log("Days remaining:" + (endDate - curDate)/ milliDay)
//    console.log("totalNumber " +totalNumber)
//    console.log("daysCount " +daysCount)
//  }

//  console.log(endDate - startDate)

//  g_form.setValue('number_of_occurences', totalNumber);

// }
//    arrayCount = function(arr) {
//    var result = [];
//    for(var i = 0; i < arr.length; i++) {
//      if (arr[i] === true) {
//        result.push(arr[i]);
//      }
//    }
//    return result.length;
//     }

// // Revisted with documentation
// function onLoad() {
// }

// // the function has to be declared this format only.
// calculate_number_of_occurrences = function() {
// 	//console.log("STARTING CALCULATION!")
// 	var totalNumber = 0;
// 	var day_of_first_occurence = g_form.getValue('day_of_first_occurence');
// 	var day_of_last_occurence = g_form.getValue('day_of_last_occurence');
// 	// days of the week has a boolean value (select box)
// 	var monday = g_form.getValue('monday') == "true";
// 	var tuesday = g_form.getValue('tuesday') == "true";
// 	var wednesday = g_form.getValue('wednesday') == "true";
// 	var thursday = g_form.getValue('thursday') == "true";
// 	var friday = g_form.getValue('friday') == "true";
// 	var saturday = g_form.getValue('saturday') == "true";
// 	var sunday = g_form.getValue('sunday') == "true";

// 	// daysCount uses arrayCount function below to get the number of occurrences.
// 	var daysCount = arrayCount([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
// 	//console.log("daysCount: " + daysCount)
// 	if (day_of_first_occurence == '' || day_of_last_occurence == '' || daysCount == 0) {
// 		return;
// 	}

// 	var startDate = new Date(day_of_first_occurence);
// 	var endDate = new Date(day_of_last_occurence);
// 	var curDate = new Date(day_of_first_occurence);
// 	var milliDay = 1000*60*60*24;
// 	if(endDate < startDate) {
// 		g_form.showFieldMsg('day_of_last_occurence','End date should be after start date.','error');
// 	}

// 	var lastDay = new Date();
// 	while (curDate <= endDate) {
// 		// the day of the week is selected totalNumber increments by 1
// 		// This is for the logic below that we limit the number of occurences to be below 30
// 		if (curDate.getDay()==1 && monday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==2 && tuesday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==3 && wednesday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==4 && thursday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==5 && friday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==6 && saturday){
// 			totalNumber++;
// 		}else if (curDate.getDay()==7 && sunday){
// 			totalNumber++;
// 		}

// 		// the filter to ensure that the number of occurences is below 30
// 		if (totalNumber > 30) {
// 			g_form.addErrorMessage("Maximum 30 occurences exceeded. Final day must be before " + lastDay)
// 			break;
// 		} else if (totalNumber == 30){
// 			// setting the curDate to last day so that the user can select the last day.
// 			lastDay = curDate
// 		}
// 		// clear the error message
// 		g_form.clearMessages();

// 		curDate.setDate(curDate.getDate() + 1)
// 	}
// 	// setting the totalNumber into number_of_occurences field.
// 	g_form.setValue('number_of_occurences', totalNumber);
// };

// /**
//  * function to count the number of true (from the arrayCount) options in an array.
//  */
// arrayCount = function(arr) {
// 	var result = [];
// 	for(var i = 0; i < arr.length; i++) {
// 		if (arr[i] === true) {
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result.length;
// }

/*
This is a new version of documenting the codes
*/

//\/ Fixed Script sample - Task clean up

// var grTask = new GlideRecord("sc_task");

// //\/|<  Getting the encoded list query
// grTask.addEncodedQuery("u_district_idISEMPTY^active=true^request_itemISEMPTY");
// grTask.setLimit(5);
// grTask.query();
// getSelection.print(
//   "There were: " + grTask.getRowCount() + " record found by this filter"
// );

// while (grTask.next()) {
//   grTask.setWorkflow(false); //\/ Preventing biz rile from unning on the GlideRecord
//   grTask.active = false; //\/ If business rues are excluded, be sure to update key fields manually
//   grTask.state = 3; //\/ state is closed complete (3)

//   grTask.autoSysFields(false); //\/ prevents sys_fields from being updated on the Gliderecord
//   grTask.closed_at = grTask.sys_updated_on; //\/ Set the closed at field to match the last updated on

//   grTask.update();
// }

// //\/ |<
// // Related List Conditions come in with the new Report Designer which you can enable in Istanbul and is enabled by default in Jakarta.   In Helsinki, you have to do a little more work.
// // You can try a one-liner in the report.   This should give you all the users who have the itil role: [Note this must be in one line or it will not work.]

// javascript: var users = [];
// var gra = new GlideAggregate("sys_user_has_role");
// gra.addQuery("active", "=", true);
// gra.addQuery("role.name", "=", "itil");
// gra.groupBy("user");
// gra.query();
// while (gra.next()) {
//   users.push(gra.getValue("user"));
// }
// users;

// /* THE BELOW SCRIPT WILL OUTPUT A LIST OF RITMS AND THEIR DETAILS */
 
// //First, we need to locate our current user's approvals (the parm1 variable contains the current approver)
// var app = new GlideRecord('sysapproval_approver');              //create a query to retrieve open approvals
// app.addQuery('state', 'requested');                                       //only retrieve approvals that are pending
// app.addQuery('source_table', 'sc_req_item');
// app.addQuery('approver',event.parm1);                               //only find approvals for the current approver
// app.query();
// while(app.next()){
//     //now that we have an approval for that user, we are going to look up the tickets they need to approve and print out the data
//     //var req = new GlideRecord('sc_request');                   //find the first related approval and print info
//     template.print('<table><tr><td font face="arial" >');
//     template.print('Request: ' + app.sysapproval.number + '.<br>');
//     template.print('District: ' + app.sysapproval.u_district_id.u_district_name + '.<br>');
//     template.print('School: ' + app.sysapproval.u_school_id.name + '.<br>');
//     template.print('Requested For: ' + app.sysapproval.request.requested_for.name + '.<br>');
//     var url = "nav_to.do?uri=sysapproval_approver.do?sys_id=" + app.sys_id;
//     var link = gs.getProperty('glide.servlet.uri') + url;
//     template.print('<a href="' + link +'">Click to open the Approval</a>');
//     template.print('</td></tr><table>');
// }

// var urlString = "https://lhricdev.service-now.com/lhricsp?sys_id=f15b3c511b15f110f3738622dd4bcbe1&view=sp&id=sc_req_item&table=sc_req_item"
 
// gs.info(urlString);
 
// gs.info(encodeURI(urlString))
 
// var arrStr = urlString.split("com/")
// gs.info(arrStr[1])
// var arrStr2 = arrStr[1].split('?');
// gs.info(arrStr2[0])
 
// var endURL = arrStr[0]+ "com/howie.do?" + arrStr2[1]
// gs.info(endURL)

// //
// // Send notifications to the user's manager
// //
// function get5RecentRecords() {
//   var list = [];
//   var task = new GlideRecord('task');
//   task.addQuery('active', true);
//   task.orderByDesc('sys_updated_on');
//   task.setLimit(5);
//   task.query();
//   while (task.next()) {
//   list.push(task);
//   }
//   return list;
// }

// function onChange(control, oldValue, newValue, isLoading, isTemplate) {
//     if (isLoading || newValue === '') {
//         return;
//     }

//     var districtArray = newValue.split(',');
//     if (districtArray.length > 1) {
//         g_form.setValue('u_dot_approval', false);
//         g_form.setReadOnly('u_dot_approval', true);
//         g_form.showFieldMsg('u_dot_approval', "DOT approval is not allowed for multiple districts", "info");
//     } else {
//         g_form.setReadOnly('u_dot_approval', false);
//         g_form.hideFieldMsg('u_dot_approval', true);
//     }

//     var ga = new GlideAjax('DistrictUtilsAJAX');
//     ga.addParam('sysparm_name', 'getDistrictDOT');
//     ga.addParam('sysparm_distid', districtArray[0]);
//     ga.getXML(hasDot);

//     // the callback function for returning the result from the server-side code
//     function hasDot(response) {
//         //if the district has no DOT it should be set read-only
//         var answer = response.responseXML.documentElement.getAttribute("answer");
//         if (!answer) {
//             g_form.setValue('u_dot_approval', false);
//             g_form.setReadOnly('u_dot_approval', true);
//             g_form.showFieldMsg('u_dot_approval', "Please select the district that has a DOT", "info");
//         } else {
//             g_form.setReadOnly('u_dot_approval', false);
//             g_form.hideFieldMsg('u_dot_approval', true);
//         }
//         // alert(answer);
//     }

// }

// // <!-- Custom code to add Record Number, Opened, Short Description and Closure Notes -->

// // <g2:evaluate var="jvar_record"

// // expression="var recordGR='';

// // gs.log(instanceGR.trigger_table + ' ' + instanceGR.trigger_id);

// // var recordGR = new GlideRecord(instanceGR.trigger_table);

// // recordGR.addQuery('sys_id', instanceGR.trigger_id);

// // recordGR.query();

// // " />

// // <j2:if test="$[typeof recordGR == 'object']">

// //     <j2:if test="$[recordGR.next()]">

// //         <div align="left" style="font-weight: bold;padding-bottom:5px; margin-bottom:0px;">This survey is in regards to: </div>

// //         <table>

// //             <tr>

// //                 <td><b>Number:</b>  </td>

// //                 <td> $[recordGR.number] </td>

// //             </tr>

// //         <tr>

// //             <td><b>Opened:</b> </td>

// //             <td> $[recordGR.getDisplayValue('opened_at')] </td>

// //         </tr>

// //         <tr>

// //             <td><b>Description:</b>  </td>

// //             <td> $[recordGR.short_description]  </td>

// //         </tr>

// //         <tr>

// //             <td><b>Closure Notes:</b> </td>

// //             <td> $[recordGR.close_notes] </td>

// //             </tr>

// //         </table>

// //         <br></br>

// //     </j2:if>

// // </j2:if>

// // <!-- End Custom code to add Record Number, Opened, Short Description and Closure Notes -->

// Get g_form on console.
// var field = this.angular.element("div[glide-form]").last().scope();
// if (field && field.hasOwnProperty("$$childHead") && field.$$childHead.hasOwnProperty("getGlideForm")) {
// 	var my_g_form = field.$$childHead.getGlideForm();
// 	//w.debug( "found g_form from first field", w.g_form);
// 		//g_form.setValue("company_entry", my_g_form.getValue("company"))
// 		//  console.log(my_g_form.getValue("company") );
// }

// // Single date
// var current = new GlideRecord("sc_req_item");

// if (current.get("be1088b71bad711024a5fd1b1e4bcb84")) {
//   gs.info(current.getDisplayValue());
//   gs.info(current.variables.is_this_a_list_of_dates_or_recurring_dates);
//   gs.info(current.variables.start_date + " " + current.variables.start_time);
//   createEventTasks(current.variables.start_date, current.variables.start_time);
// }

// function createEventTasks(date, time) {
//   var task = new GlideRecord("sc_task");

//   task.initialize();
//   task.request_item.setValue(current.sys_id);
//   task.parent.setValue(current.sys_id);
//   task.cat_item.setValue("32317fbf1b1ee150f3738622dd4bcb78");

//   task.setDisplayValue(
//     "assignment_group",
//     current.variables.wf_task_1_assignment_group + ""
//   );
//   task.setDisplayValue(
//     "assigned_to",
//     current.variables.wf_task_1_assigned_to + ""
//   );
//   task.short_description = current.variables.wf_task_1_short_description;

//   var desc = current.variables.wf_task_1_description;

//   if (desc == "") {
//     task.description =
//       "Please complete the appropriate steps to fulfill this request: " +
//       current.variables.wf_task_1_short_description;
//   } else {
//     task.description = desc;
//   }

//   task.description += '\n"Date: "' + date + " time: " + time;
//   task.insert();
// }

// // Recurring dates
// var current = new GlideRecord("sc_req_item");

// if (current.get("d1ffb7a71bad711024a5fd1b1e4bcb31")){
//     gs.info(current.getDisplayValue());
//     gs.info(current.variables.is_this_a_list_of_dates_or_recurring_dates);
//     var eventType = current.variables.is_this_a_list_of_dates_or_recurring_dates
//     if (eventType == 'Singledate') {
//         gs.info(current.variables.start_date + " " +  current.variables.start_time);
//     } else if (eventType == 'Multipledates'){

//     } else {
//         var dayOfFirstOccurence = current.variables.day_of_first_occurence
//         var startTime = current.variables.start_time_recurring
//         var daysOfTheWeek = [
//             current.variables.monday,
//             current.variables.tuesday,
//             current.variables.wednesday, 
//             current.variables.thursday,  
//             current.variables.friday,
//             false,
//             false,      
//         ]

//         var numberOfOccurences = current.variables.number_of_occurences

//         var datesArray = [];

//         var gd = new GlideDate()
//         gd.setValue(dayOfFirstOccurence)
//         gs.info(gd.getDayOfWeekUTC())

//         var dayOfTheWeek = gd.getDayOfWeekUTC()

//         datesArray.push(gd.getValue());

//         while (datesArray.length <= numberOfOccurences) {
//             gd.addDays(1)
//             dayOfTheWeek = gd.getDayOfWeekUTC()

//             if (daysOfTheWeek[dayOfTheWeek-1] == true ) {
//                 datesArray.push(gd.getValue())
//             } 
//             // increment date 
//             // check for days of the week
//             // add to array if there's a match
//             // 
//         }


//         gs.info(datesArray)

//         //for (var day = 0; day < datesArray.length; day++) {
//             //createEventTasks(datesArray[day],startTime)

//         //}

//     }
    
//     //createEventTasks(current.variables.start_date, current.variables.start_time)

// }

// function createEventTasks(date, time) {
//     var task = new GlideRecord('sc_task')
    
//     task.initialize()
//     task.request_item.setValue(current.sys_id)
//     task.parent.setValue(current.sys_id)
//     task.cat_item.setValue('fbff3ba71bad711024a5fd1b1e4bcb58')

//     task.setDisplayValue("assignment_group", current.variables.wf_task_1_assignment_group + '');
//     task.setDisplayValue("assigned_to", current.variables.wf_task_1_assigned_to + '');
//     task.short_description = current.variables.wf_task_1_short_description;

//     var desc = current.variables.wf_task_1_description;

//     if(desc == ""){
// 	    task.description = "Please complete the appropriate steps to fulfill this request: " + current.variables.wf_task_1_short_description ;
//     } else {
// 	    task.description = desc;
//     }

//     task.description += '\n\"Date: "' + date + ' Time: ' + time
//     task.insert()
// }


// var current = new GlideRecord("sc_req_item");

// if (current.get("61408cb71bad711024a5fd1b1e4bcb1f")){
//     gs.info(current.getDisplayValue());
//     gs.info(current.variables.is_this_a_list_of_dates_or_recurring_dates);
//     var eventType = current.variables.is_this_a_list_of_dates_or_recurring_dates
//     if (eventType == 'Singledate') {
//         createEventTasks(current.variables.start_date, current.variables.start_time)
//         gs.info(current.variables.start_date + " " +  current.variables.start_time);
//     } else if (eventType == 'Multipledates'){
//     var mrvsDate = JSON.parse(current.variables.event_dates)
//     gs.info(mrvsDate)
//     for (var day = 0; day < mrvsDate.length; day++) {
//             createEventTasks(mrvsDate[day].what_is_the_date_and_time_of_the_event,mrvsDate[day].start_time_mrvs)
//             gs.info(mrvsDate[day])
//         }
//     } else {
//         var dayOfFirstOccurence = current.variables.day_of_first_occurence
//         var startTime = current.variables.start_time_recurring
//         var daysOfTheWeek = [
//             current.variables.monday,
//             current.variables.tuesday,
//             current.variables.wednesday, 
//             current.variables.thursday,  
//             current.variables.friday,
//             false,
//             false,      
//         ]

//         var numberOfOccurences = current.variables.number_of_occurences

//         var datesArray = [];

//         var gd = new GlideDate()
//         gd.setValue(dayOfFirstOccurence)
//         gs.info(gd.getDayOfWeekUTC())

//         var dayOfTheWeek = gd.getDayOfWeekUTC()

//         datesArray.push(gd.getValue());

//         var count = 0

//         while (datesArray.length < numberOfOccurences) {
//             gd.addDays(1)
//             gs.info(gd.getValue() + " " + gd.getDayOfWeekUTC() + " " + daysOfTheWeek[dayOfTheWeek-1])
//             dayOfTheWeek = gd.getDayOfWeekUTC()

//             if (daysOfTheWeek[dayOfTheWeek-1] == "true" ) {
//                 datesArray.push(gd.getValue())
//             } 


//             // increment date 
//             // check for days of the week
//             // add to array if there's a match
//             // 
//             if (count > 30) break 
//             count++

//         }


//         gs.info(datesArray)

//         for (var day = 0; day < datesArray.length; day++) {
//             createEventTasks(datesArray[day],startTime)

//         }

//     }

// }

// function createEventTasks(date, time) {
//     var task = new GlideRecord('sc_task')
    
//     task.initialize()
//     task.request_item.setValue(current.sys_id)
//     task.parent.setValue(current.sys_id)
//     task.cat_item.setValue('fbff3ba71bad711024a5fd1b1e4bcb58')

//     task.setDisplayValue("assignment_group", current.variables.wf_task_1_assignment_group + '');
//     task.setDisplayValue("assigned_to", current.variables.wf_task_1_assigned_to + '');
//     task.short_description = current.variables.wf_task_1_short_description + " " + date

//     var desc = current.variables.wf_task_1_description;

//     if(desc == ""){
// 	    task.description = "Please complete the appropriate steps to fulfill this request: " + current.variables.wf_task_1_short_description ;
//     } else {
// 	    task.description = desc;
//     }

//     task.description += '\n\Date: ' + date + ' Time: ' + time
//     task.insert()
// }


// //workflow
// var eventType = current.variables.is_this_a_list_of_dates_or_recurring_dates
// // Check what type of event, Single date, Multi-dates or Recurring dates. 
// if (eventType == 'Singledate') {
//     createEventTasks(current.variables.start_date, current.variables.start_time)

// } else if (eventType == 'Multipledates') {
//     var mrvsDate = JSON.parse(current.variables.event_dates)

//     for (var day = 0; day < mrvsDate.length; day++) {
//         createEventTasks(mrvsDate[day].what_is_the_date_and_time_of_the_event, mrvsDate[day].start_time_mrvs)
//     }
// } else { // recurring dates
//     var dayOfFirstOccurence = current.variables.day_of_first_occurence
//     var startTime = current.variables.start_time_recurring
//     var daysOfTheWeek = [
//         current.variables.monday,
//         current.variables.tuesday,
//         current.variables.wednesday,
//         current.variables.thursday,
//         current.variables.friday,
//         false,
//         false,
//     ]

//     var numberOfOccurences = current.variables.number_of_occurences
//     var datesArray = [];

//     var gd = new GlideDate()
//     gd.setValue(dayOfFirstOccurence)

//     var dayOfTheWeek = gd.getDayOfWeekUTC()
//     datesArray.push(gd.getValue());

//     var count = 0
//     while (datesArray.length < numberOfOccurences) {
//         gd.addDays(1)
//         if (daysOfTheWeek[dayOfTheWeek - 1] == "true") {
//             datesArray.push(gd.getValue())
//         }
//         if (count > 30) break
//         count++
//     }
//     for (var day = 0; day < datesArray.length; day++) {
//         createEventTasks(datesArray[day], startTime)
//     }
// }
// /**
//  * Generating a task according to the date and time parameter. 
//  * @param {string} date - Date of the event
//  * @param {string} time - Time of the event
//  */
// function createEventTasks(date, time) {
//     var task = new GlideRecord('sc_task')
//     // Catalog Item Event Setup
//     var eventSetupCatItem = 'fbff3ba71bad711024a5fd1b1e4bcb58'

//     task.initialize()
//     task.request_item.setValue(current.sys_id)
//     //task.parent.setValue(current.sys_id)
//     //task.cat_item.setValue(eventSetupCatItem)

//     // Short description based on catalog variables. 
//     task.setDisplayValue("assignment_group", current.variables.wf_task_1_assignment_group + '');
//     task.setDisplayValue("assigned_to", current.variables.wf_task_1_assigned_to + '');
//     task.short_description = current.variables.wf_task_1_short_description + " " + date

//     var desc = current.variables.wf_task_1_description;
//     // Build and populate the description of the catalog task. 
//     if (desc == "") {
//         task.description = "Please complete the appropriate steps to fulfill this request: " + current.variables.wf_task_1_short_description;
//     } else {
//         task.description = desc;
//     }

//     task.description += '\n\Date: ' + date + ' Time: ' + time
//     task.insert()
// } //end of createEventTasks()

// //task flow
// ifScript();

// function ifScript() {
//     var t = new GlideRecord('sc_task');
//     //t.addNotNullQuery('order');
//     t.addQuery('request_item', current.sys_id);
//     t.addQuery('active', true);
//     t.query();

//     if (t.hasNext()) {
//         answer = false;
//     } else {
//         //Continue
//         answer = true;
//     }
// }

var mrvsRFS = [];
mrvsRFS = JSON.parse(current.variables.manage_codes);

mrvsRFS.sort(compareFn);

for (var i = 0; i < mrvsRFS.length; i++) {
	if (mrvsRFS[i].service_or_subservice_code == "service") { // service code
		var grRFS = new GlideRecord("u_service");
		
		if (mrvsRFS[i].code_not_found == "true") {
			// then add the code to the service table
			grRFS.initialize();
			
			grRFS.u_service = mrvsRFS[i].add_code;
			var serviceArr = mrvsRFS[i].add_code.split('.');
			var coserID = getCoserFromCode(serviceArr[0]);
			grRFS.u_coser = coserID;
			
			grRFS.u_service_owner = mrvsRFS[i].service_owner;
			grRFS.u_wincap_updater = "c6d696091b6678906d6b0dc1604bcbc5"; // Lori Franco
			
			grRFS.u_subservices = "Yes";
			grRFS.u_active = true;
			grRFS.u_description = mrvsRFS[i].description;
			
			grRFS.insert();
		} else { // if code found
			if (grRFS.get(mrvsRFS[i].service_code)) {
				grRFS.u_service_owner = mrvsRFS[i].service_owner;
				
				if (grRFS.u_wincap_updater == "" || grRFS.u_wincap_updater == null) {
					grRFS.u_wincap_updater = "c6d696091b6678906d6b0dc1604bcbc5"; // Lori Franco
				}
				
				grRFS.u_active = mrvsRFS[i].active;
				grRFS.u_description = mrvsRFS[i].description;
				grRFS.update();
			}
		}
	} else { // subservice code
		var grRFS2 = new GlideRecord("u_subservice");
		if (mrvsRFS[i].code_not_found == "true") {
			// then add the code to the subservice table
			grRFS2.initialize();
			
			grRFS2.u_ss = mrvsRFS[i].add_code;
			var subserviceArr = mrvsRFS[i].add_code.split('.');
            var service = subserviceArr[0] + "." + subserviceArr[1] + "";
			var serviceID = getServiceFromCode(service);
			grRFS2.u_service = serviceID;
			
			grRFS2.u_cost_type = mrvsRFS[i].cost_type;
			grRFS2.u_active = true;
			grRFS2.u_description = mrvsRFS[i].description;
			
			grRFS2.insert();
		} else { // if code found
			if (grRFS2.get(mrvsRFS[i].subservice_code)) {
				var subserviceArr = mrvsRFS[i].add_code.split('.');
				var service = subserviceArr[0] + "." + subserviceArr[1] + "";
				var serviceID = getServiceFromCode(service);
				grRFS2.u_service = serviceID;
				
				grRFS2.u_cost_type = mrvsRFS[i].cost_type;
				grRFS2.u_active = mrvsRFS[i].active;
				grRFS2.u_description = mrvsRFS[i].description;

				grRFS2.update();
			}
		}
	}
}

function getCoserFromCode(code) {
	var coser = new GlideRecord('u_coser');
	coser.addQuery("u_code", "CONTAINS", code);
	coser.query();
	if (coser.next()) {
		return coser.getUniqueValue();
	}
}

function getServiceFromCode(code) {
	var service = new GlideRecord('u_service');
	service.addQuery("u_service", "CONTAINS", code);
	service.query();
	if (service.next()) {
		return service.getUniqueValue();
	}
}

function compareFn(a, b) {
  if (a.service_or_subservice_code == "service" && b.service_or_subservice_code == "subservice") {
    return -1;
  } else if (a.service_or_subservice_code == "subservice" && b.service_or_subservice_code == "service") {
    return 1;
  }
  // a must be equal to b
  return 0;
}

//Catalog Client Script "Set WF Variables onSubmit":
function onSubmit() {
	var addOrRemove = g_form.getValue("add_or_remove");
	var deactivateUser = g_form.getValue("deactivate_user_account");
	
	if (addOrRemove == "add") { // add VPN user account
		// TASK 2
		g_form.setValue("wf_task_2_assignment_group", "LHRIC - Service Desk");
		g_form.setValue("wf_task_2_short_description", "Add new user in OKTA");
		//TASK 3
		g_form.setValue("wf_task_3_assignment_group", "LHRIC - Managed WAN");
		g_form.setValue("wf_task_3_short_description", "Add the user to the appropriate permission groups");

	} else if (addOrRemove == "remove") { // remove VPN user account
		// TASK 2
		g_form.setValue("wf_task_2_assignment_group", "LHRIC - Managed WAN");
		g_form.setValue("wf_task_2_short_description", "Remove the user from the appropriate permission groups");
		
		// deactivate user account
		if (deactivateUser == "Yes") {
			//TASK 3
			g_form.setValue("wf_task_3_assignment_group", "LHRIC - Managed WAN");
			g_form.setValue("wf_task_3_short_description", "Remove the user from the appropriate permission groups");
		}
	}
}

//Client Script Date Validation no more than 30 days
var currentUser = gs.getUser(); gs.info(currentUser.getFirstName()); // print the first name of the logged in uservar newUser = currentUser.getUserByID('62826bf03710200044e0bfc8bcbe5df1'); // fetch Abel Tuter user using sys_id from sys_user recordgs.info(newUser.getFirstName()); // print the first name of the Abel Tuter user

function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
	   return;
	}
	 var finalDecommissionDate = newValue;  
	 var dt = getDateFromFormat(finalDecommissionDate, g_user_date_format);
	 var newdt = new Date(dt);
	 var finalDecommissionDateFormatted = formatDate(newdt, 'yyyyMMdd');
 
	 var decommissionDate = g_form.getValue("date_to_decommission_server");
	 var dt2 = getDateFromFormat(decommissionDate, g_user_date_format);
	 var newdt2 = new Date(dt2);
	 var decommissionDateFormatted = formatDate(newdt2, 'yyyyMMdd');
 
	 var rightNow = new Date();
	 var rightNowDate = formatDate(rightNow, 'yyyyMMdd');
 
	 var max = 30;
	 var maxDate = new Date();
	 maxDate.setDate(newdt2.getDate() + max);
	 maxDateFormatted = formatDate(maxDate, 'yyyyMMdd');
	 
	 if (finalDecommissionDateFormatted < rightNowDate) {
		 g_form.clearValue('date_of_final_server_decommission');
		 g_form.showFieldMsg('date_of_final_server_decommission', 'The date must be after the current date', 'error', true);
	 } else if (finalDecommissionDateFormatted > maxDateFormatted) {
		 g_form.clearValue('date_of_final_server_decommission');
		 g_form.showFieldMsg('date_of_final_server_decommission', 'The final decommission date cannot exceed 30 days from the decommission date', 'error', true);
	 }
 }

 //Calculation of Event Start/ End Date based on Event Duration field
 global.AjaxProjectTaskUtil().getEndDatePerSchedule() 

 Please update the Script include with below script and create another onChange() client script on duration field. Hope this helps.



//Script Include:


var MyDateTimeAjax = Class.create();


MyDateTimeAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {


nowDateTime: function () {


var sdt = new GlideDateTime(this.getParameter('sysparm_start_date'));


var edt = new GlideDateTime(this.getParameter('sysparm_end_date'));


var datediff = gs.dateDiff(sdt.getDisplayValue(), edt.getDisplayValue(), false);


return datediff.split(' ')[0];


},



calDate: function () {


var sdt = new GlideDateTime(this.getParameter('sysparm_start_date'));


sdt.addDaysUTC(this.getParameter('sysparm_duration'));


return sdt.getDate();


},


type: 'MyDateTimeAjax'


});



//OnChange() client script on Duration field:


function onChange(control, oldValue, newValue, isLoading, isTemplate) {


if (isLoading || newValue === '') {


return;


}


//Type appropriate comment here, and begin script below


if(g_form.getValue('u_date1') == ''){


var ajax = new GlideAjax('MyDateTimeAjax');


ajax.addParam('sysparm_name', 'calDate');


ajax.addParam('sysparm_start_date', g_form.getValue('u_date'));


ajax.addParam('sysparm_duration', newValue);


ajax.getXML(ajaxResponse);


}


function ajaxResponse(serverResponse) {


var answer = serverResponse.responseXML.documentElement.getAttribute("answer");


g_form.setValue('u_date1', answer);


}


}

var dc = new DurationCalculator();
var startTime = new GlideDateTime();

// Settings for calculations
// Optional: Specify the schedule to use for the following calculations
dc.setSchedule('08fcd0830a0a0b2600079f56b1adb9ae'); 
// Optional: Specify a different timezone to use
dc.setTimeZone("Los Angeles");
// Optional: Set a start date and time, otherwise the current time is assumed
dc.setStartDateTime("2020-04-10 08:00:00")
// Calculate end time, from number of seconds required in the schedule
dc.calcDuration(3*24*3600); // 3 days
dc.calcRelativeDueDate(startTime, "3", "07:00:00");

//ex
var dc = new DurationCalculator();
dc.calcRelativeDuration('08fcd0830a0a1b2600074f56b1ad7cb');