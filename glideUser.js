alert('Hello ' + g_user.firstName + ' ' + g_user.lastName + ". Your user ID is: " + g_user.userID)

// getFullName()
alert('Hello ' + g_user.getFullName())

// hasRoles() returns boolean
alert('Do you have any roles? ' + g_user.hasRoles())

//hasRole() returns boolean for a specific role
alert('Do you have ITIL role? ' + g_user.hasRole('itil'))

// userName()
alert('Your username is: ' + g_user.userName())