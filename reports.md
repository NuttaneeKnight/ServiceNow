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

