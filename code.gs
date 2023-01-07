function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index");
}

function getValuesFromSheet() {
  // Get the active sheet by name
  // var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Copy of Google App Script Assignment1");
  var sheet = SpreadsheetApp.getActiveSheet();
  // console.log(sheet);
  // Get the range of cells that contain the values for the first dropdown
  var range1 = sheet.getRange("G2:G");//name of project
  
  // Get the values as an array
  var values1 = range1.getValues();
  // console.log(values1);
  var nonEmptyValues1 = values1.filter(function(value) {
  return value != '';
});

  // Get the range of cells that contain the values for the second dropdown
  var range2 = sheet.getRange("C2:C");//Name of agency
  // Get the values as an array
  var values2 = range2.getValues();

var nonEmptyValues2 = values2.filter(function(value) {
  return value != '';
});

  var range3= sheet.getRange("E2:E"); // Name of executive
  // Get the values as an array
  var values3 = range3.getValues();


var nonEmptyValues3 = values3.filter(function(value) {
  return value != '';
});

  var range4 = sheet.getRange("I2:I");//Job constraint
  // Get the values as an array
  var values4 = range4.getValues();


var nonEmptyValues4 = values4.filter(function(value) {
  return value != '';
});

var range5 = sheet.getRange("A2:A");//Activity
  // Get the values as an array
  var values5 = range5.getValues();


var nonEmptyValues5 = values5.filter(function(value) {
  return value != '';
});
  
 
 var range6 = sheet.getRange("F2:F");//Associates
  // Get the values as an array
  var values6 = range6.getValues();

  // console.log(values6);
var nonEmptyValues6 = values6.filter(function(value) {
  return value != '';
});


// Return the arrays as an object
return {
  values1: nonEmptyValues1,
  values2: nonEmptyValues2,
  values3: nonEmptyValues3,
  values4: nonEmptyValues4,
  values5: nonEmptyValues5,
  values6: nonEmptyValues6
};
}


function saveValuesToSheet(value1, value2, value3, value4, value5, value6) {
  // Get the target spreadsheet
  // var spreadsheet = SpreadsheetApp.openById("1BX627Oo9lTZV9hYq6Dp_z3C8iUnizbIHf14_CceEzPw");
  var spreadsheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1BX627Oo9lTZV9hYq6Dp_z3C8iUnizbIHf14_CceEzPw/edit#gid=0");

  console.log(spreadsheet);
  // Get the first sheet in the spreadsheet
  // var sheet = SpreadsheetApp.getActiveSheet();
  var sheet = spreadsheet.getSheetByName("new spread");
  // Get the next empty row in the sheet
  // console.log(sheet);
  var lastRow = sheet.getLastRow() + 1;
  // Write the values to the sheet
  sheet.getRange(lastRow, 1).setValue(value1);
  sheet.getRange(lastRow, 2).setValue(value2);
  sheet.getRange(lastRow, 3).setValue(value3);
  sheet.getRange(lastRow, 4).setValue(value4);
  sheet.getRange(lastRow, 5).setValue(value5);
  sheet.getRange(lastRow, 6).setValue(value6);
}

