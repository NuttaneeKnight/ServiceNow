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
    createEmailNotification: function() {
        var adopterEmail = this.getParameter('sysparm_adopter_email')
        var adoptionCenter = this.getParameter('sysparm_adoption_center')
        var adoptionCenterEmail = ''
        var ac = newGlideRecord('x_1028511_fetch_adoption_center')
        ac.get(adoptionCenter)
        adoptionCenterEmail = ac.email.getDisplayValue()
        getSelection.eventQueue('x_1028511_fetch_adoption_email', ac, adoptionCenterEmail, adopterEmail)
        return;
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
Creat a new one
Make sure that the table name is NONE
then creat  simpe html message with ${event.param2} in the body of an email
Go back to script includes - fetchUtils
add another function after crete dog
See the code above after createDog funtion()
Go to any dog record
Click right >> Configure >> UI Actions
Click "New" to create a new UI Actions


Name >> Adopt
Click the Client checkbox
Unselect Show Insert
Give the Client side fucntion in the Onclick field >> adoptDog()
Condition = current.status == 'active'
Select Form button check box
Create adoptDog() in the script field

*/

function adoptDog() {
    var email = prompt('Please enter your email address');
    if (email != '') {
        var ga = new GlideAjax('fetchUtils')
        ga.addParam('sysparm_name', 'createEmailNotification')
        ga.addParam('sysparm_adoption_center', g_form.getValue('adoption_center'))
        ga.addParam('sysparm_adopter_email', 'email')
        ga.getXMLAnswer(ajaxProcessor)
    } else {
        alert('This email is not valid')
    }
}

function ajaxProcess(answer) {
    alert('Thank you for your request. Someone will be with you shortly')
}