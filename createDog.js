//Client Script for the UI Create Dog PAge
//Client Script for the UI Create Dog PAge
jQuery('#addDog').click(function() {
    var ga = new GlideAjax('fetchUtils')
    ga.addParam('sysparm_name', 'createDog')
    ga.addParam('sysparm_dog_name', jQuery('#dogName').val())
    ga.addParam('sysparm_dog_age', jQuery('#dogAge').val())
    ga.addParam('sysparm_dog_nutered_or_spay', jQuery('#dogNuteredOrSpay').is(':checked'))
    ga.addParam('sysparm_dog_shots', jQuery('#dogShots').is(':checked'))
    ga.getXML(fetchCallback)
})

function fetchCallback(response) {
    var answer = response.responseXML.documentElement.getAttribute('answer').split('|');
    jQuery('#msg').append('<p>' + answer[0] + ' has successfully been created. Dog ID: ' + answer[1] + ' </p><br/><a href="' + answer[2] + '">View new dog</a>')
}

// After creating UI Page forr both HTML andd Client Script, Navigate to Script Includes
// Create a new Script Include
// Provie the name fetchUtils to match our above script form the UI Page
// ****Make sure to check Client Callable
// Build out createDog function below
var fetchUtils = Class.create();
fetchUtils.prototype = {
    // initialize: function() {
    // },

    createDog: function() {
        var dogName = this.getParameter('sysparm_dog_name');
        var dogAge = this.getParameter('sysparm_dog_age');
        var dogShots = this.getParameter('sysparm_dog_shots');
        var dogNuteredOrSpay = this.getParameter('sysparm_dog_nutered_or_spay');

        // using a Glide Record to "insert dog"
        var newDog = new GlideRecord('x_1028511_fetch.dogs')
        newDog.newRecord()
        newDog.name = dogName
        newDog.age = dogAge
        if(dogShots) {
            newDog.shots = true;
        }
        if(dogNuteredOrSpay) {
            newDog.nutered_or_spay = true;
        }
        var dogNumber = newDog.number.getDisplayValue()
        var sysID = newDog.insert()
        var dogLink = newDog.getLink()

        // return values
        return dogName + '|' + dogNumber + '|' + dogLink;
    },

    type: 'fetchUtils'
};

// Go to Event Registry
// Create a new event
/* 
Suffix >> adoption_email
Fired by >> UI Action
Description >> Thi event will send an email notification


Go to email notifications

*/