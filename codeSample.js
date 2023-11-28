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