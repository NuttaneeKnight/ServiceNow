# Goal: Survey is sent from Network Team
- Survey configuration - OOB from ServiceNow
- To trigger a survey - set up a triggger condition

# Trigger Survey
- Navigate to "Trigger Condition" 
- Create "New"
- Assessment : Service Desk Satisfaction Survey
- Table : incident
- User field: Caller
- Trigger Randonly : uncheck it
- Condition: Assignment group is Network AND State is Resolved

***Surveys are built into the ServiceNow platform and are available on any instance***

- They are a great way to get general customer stisfaction data or feedback on a task activity (request)