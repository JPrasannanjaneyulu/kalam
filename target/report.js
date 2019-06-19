$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/batch229/workspace/kalam/src/test/resources/files/launch.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail login",
  "description": "",
  "id": "gmail-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Userid test",
  "description": "",
  "id": "gmail-login;userid-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "navigate to gmail using chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter userid as \"j.prasannanjaneyulu131\" and click next",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "password should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close site",
  "keyword": "And "
});
formatter.match({
  "location": "GmailMethods.method1()"
});
formatter.result({
  "duration": 10878567598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j.prasannanjaneyulu131",
      "offset": 17
    }
  ],
  "location": "GmailMethods.method2(String)"
});
formatter.result({
  "duration": 5430728492,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods.method3()"
});
formatter.result({
  "duration": 5107528680,
  "status": "passed"
});
formatter.match({
  "location": "GmailMethods.method4()"
});
formatter.result({
  "duration": 1356222753,
  "status": "passed"
});
});