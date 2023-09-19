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