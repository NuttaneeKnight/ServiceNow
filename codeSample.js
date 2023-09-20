function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    var districtArray = newValue.split(',');
    if (districtArray.length > 1) {
        g_form.setValue('u_dot_approval', false);
        g_form.setReadOnly('u_dot_approval', true);
        g_form.showFieldMsg('u_dot_approval', "DOT approval is not allowed for multiple districts", "info");
    } else {
        g_form.setReadOnly('u_dot_approval', false);
        g_form.hideFieldMsg('u_dot_approval', true);
    }

    var ga = new GlideAjax('DistrictUtilsAJAX');
    ga.addParam('sysparm_name', 'getDistrictDOT');
    ga.addParam('sysparm_distid', districtArray[0]);
    ga.getXML(hasDot);

    // the callback function for returning the result from the server-side code
    function hasDot(response) {
        //if the district has no DOT it should be set read-only
        var answer = response.responseXML.documentElement.getAttribute("answer");
        if (!answer) {
            g_form.setValue('u_dot_approval', false);
            g_form.setReadOnly('u_dot_approval', true);
            g_form.showFieldMsg('u_dot_approval', "Please select the district that has a DOT", "info");
        } else {
            g_form.setReadOnly('u_dot_approval', false);
            g_form.hideFieldMsg('u_dot_approval', true);
        }
        // alert(answer);
    }

}

// <!-- Custom code to add Record Number, Opened, Short Description and Closure Notes -->                                  

// <g2:evaluate var="jvar_record"  

// expression="var recordGR='';  

// gs.log(instanceGR.trigger_table + ' ' + instanceGR.trigger_id);  

// var recordGR = new GlideRecord(instanceGR.trigger_table);  

// recordGR.addQuery('sys_id', instanceGR.trigger_id);  

// recordGR.query();    

// " />  



// <j2:if test="$[typeof recordGR == 'object']">  

//     <j2:if test="$[recordGR.next()]">  

//         <div align="left" style="font-weight: bold;padding-bottom:5px; margin-bottom:0px;">This survey is in regards to: </div>  

//         <table>    

//             <tr>

//                 <td><b>Number:</b>  </td>

//                 <td> $[recordGR.number] </td>

//             </tr>

//         <tr>

//             <td><b>Opened:</b> </td>

//             <td> $[recordGR.getDisplayValue('opened_at')] </td>

//         </tr>  



//         <tr>    

//             <td><b>Description:</b>  </td>

//             <td> $[recordGR.short_description]  </td>

//         </tr>  

//         <tr>

//             <td><b>Closure Notes:</b> </td>

//             <td> $[recordGR.close_notes] </td>

//             </tr>

//         </table>

//         <br></br>

//     </j2:if>  

// </j2:if>  

// <!-- End Custom code to add Record Number, Opened, Short Description and Closure Notes -->