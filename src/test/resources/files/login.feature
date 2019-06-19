@rama
Feature: Gmail login
Scenario Outline: Userid test
Given navigate to gmail using chrome browser
When enter userid as "<x>" and click next
Then password should be displayed
And close site
Examples:
|		 x   |
|ckakv786|
|j.prasannanjaneyulu131|
|thailand|
