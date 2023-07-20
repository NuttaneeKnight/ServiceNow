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

- They are a great way to get general customer stisfaction data or feedback on a task activity such as when the request is closed
- You can also create a surveys for non-ServiceNow users.

# Survey process:
- Design = Identify data to gather
- Assign = Identify who will receive the survey and when
- View = Ensure that the survey looks as expected

- survey_admin role
- After the design, the next will tab is the configuration. There you will be able to customize your message to answer you customer. ex. "The safety department appreciates your feedback" End note > Thank you for taking the survey etc.