//Client Script for the UI Create Dog PAge
jQuery('#addDog').click(function() {
    var ga = new GlideAjax('fetchUtils')
    ga.addParam('sysparm_name', 'createDog')
    ga.addParam('sysparm_dog_name')
})