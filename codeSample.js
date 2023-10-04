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


var current = new GlideRecord("sc_req_item");

if (current.get("61408cb71bad711024a5fd1b1e4bcb1f")){
    gs.info(current.getDisplayValue());
    gs.info(current.variables.is_this_a_list_of_dates_or_recurring_dates);
    var eventType = current.variables.is_this_a_list_of_dates_or_recurring_dates
    if (eventType == 'Singledate') {
        createEventTasks(current.variables.start_date, current.variables.start_time)
        gs.info(current.variables.start_date + " " +  current.variables.start_time);
    } else if (eventType == 'Multipledates'){
    var mrvsDate = JSON.parse(current.variables.event_dates)
    gs.info(mrvsDate)
    for (var day = 0; day < mrvsDate.length; day++) {
            createEventTasks(mrvsDate[day].what_is_the_date_and_time_of_the_event,mrvsDate[day].start_time_mrvs)
            gs.info(mrvsDate[day])
        }
    } else {
        var dayOfFirstOccurence = current.variables.day_of_first_occurence
        var startTime = current.variables.start_time_recurring
        var daysOfTheWeek = [
            current.variables.monday,
            current.variables.tuesday,
            current.variables.wednesday, 
            current.variables.thursday,  
            current.variables.friday,
            false,
            false,      
        ]

        var numberOfOccurences = current.variables.number_of_occurences

        var datesArray = [];

        var gd = new GlideDate()
        gd.setValue(dayOfFirstOccurence)
        gs.info(gd.getDayOfWeekUTC())

        var dayOfTheWeek = gd.getDayOfWeekUTC()

        datesArray.push(gd.getValue());

        var count = 0

        while (datesArray.length < numberOfOccurences) {
            gd.addDays(1)
            gs.info(gd.getValue() + " " + gd.getDayOfWeekUTC() + " " + daysOfTheWeek[dayOfTheWeek-1])
            dayOfTheWeek = gd.getDayOfWeekUTC()

            if (daysOfTheWeek[dayOfTheWeek-1] == "true" ) {
                datesArray.push(gd.getValue())
            } 


            // increment date 
            // check for days of the week
            // add to array if there's a match
            // 
            if (count > 30) break 
            count++

        }


        gs.info(datesArray)

        for (var day = 0; day < datesArray.length; day++) {
            createEventTasks(datesArray[day],startTime)

        }

    }

}

function createEventTasks(date, time) {
    var task = new GlideRecord('sc_task')
    
    task.initialize()
    task.request_item.setValue(current.sys_id)
    task.parent.setValue(current.sys_id)
    task.cat_item.setValue('fbff3ba71bad711024a5fd1b1e4bcb58')

    task.setDisplayValue("assignment_group", current.variables.wf_task_1_assignment_group + '');
    task.setDisplayValue("assigned_to", current.variables.wf_task_1_assigned_to + '');
    task.short_description = current.variables.wf_task_1_short_description + " " + date

    var desc = current.variables.wf_task_1_description;

    if(desc == ""){
	    task.description = "Please complete the appropriate steps to fulfill this request: " + current.variables.wf_task_1_short_description ;
    } else {
	    task.description = desc;
    }

    task.description += '\n\Date: ' + date + ' Time: ' + time
    task.insert()
}

