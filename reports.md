# Surveys Report
- Go to All > Daatabase View
- Name the database that you want to create ex. u_surveyresultdemo
- Label: ex. Survey Results Demo
- Description: ex. This DB view shows Surveys Results by Row
- Save 

# Report [sys_report] extends Application File
- Field Label - Represent - Datatype/Description
- Sys ID - The unique identifier of the record - Sys ID (string)
- Title - The title of the report - String
- Source type - The type of data source for the reprt - String (Table or Data source)
- Report Source - The Report Source to use when applicable - Reference (Sys ID of a recordin the Report Source Table)
- Table - The databaase table from which the report data is pulled - Table Name (String)
- Field Name - The field the report data should be gruped on - String
- Filter - The filter to be applied for the report data - Conditions (String)
- Type - The type of report (visualization) - String

# Report Types
- List
- Box
- Bar
- Pivot etc. 
- You can create a report from the column of the group by list view Click right on the column header > Pie or etc. 

# Scheduled Email ofReport [sysauto_report] extends Scheduled Job
- Report - The report being scheduled for email - Reference (Sys ID of a record in the Report table)
- Users - The users to whom the scheduled email report should be sent - List of References (Sys IDs of records in the User Table)
- Groups The groups to which the scheduled email report should be sent - List of References (Sys IDs of records in the User Table)
- Email addresses - The hard-coded email addresses to which the scheduled email report should be sent - String
- Run - The recurrence rate of the scheduled email report - String (Daily, Weekly, Monthly, On Demand, etc.)
- Time - The time at which the scheduled email report should be ran - Time
- Subject - The subject of the email for the scheduled email report - String
- Introductory message - The content of the email for the scheuled email report - HTML
- Condition - A script containing the condition that must be met for the scheduled email report - Script (plain)
- Type - The type of the attachment for the scheduled email report - String (PDF, Excel, CSV, PNG etc.)
- When you schedule a repot in ServiceNow, you are inserting a record into the Scheduled Email of Report [sysauto_report]table