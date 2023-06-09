//Client Script for the UI Create Dog PAge
jQuery('#addDog').click(function() {
    var ga = new GlideAjax('fetchUtils')
    ga.addParam('sysparm_name', 'createDog')
    ga.addParam('sysparm_dog_name', jQuery('#dogName').val())
    ga.addParam('sysparm_dog_age', jQuery('#dogAge').val())
    ga.addParam('sysparm_dog_nutered_or_spay', jQuery('#dogNewteredOrSpay').is(':checked'))
    ga.addParam('sysparm_dog_shots', jQuery('#dogShots').is(':checked'))
})