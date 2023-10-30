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

var grTask = new GlideRecord('sc_task')

//\/ Getting the encoded list query
grTask.addEncodedQuery('u_district_idISEMPTY^active=true^request_itemISEMPTY')

