!function(){const e="string",t="boolean",i="GetCellValue",a="spreadsheetId",o="CellId",s="EffectiveValueBool",r="EffectiveValueString",n="EffectiveValueNumber",l="EffectiveValueFormula",d="EffectiveValueDateTime",p="EffectiveValueDate",c="EffectiveValueTime",m="FormattedValue",h="MajorDimension",u="IsEmpty",f="valueRenderOption",y="dateTimeRenderOption",T={objects:{Spreadsheet:{displayName:"Spreadsheet",description:"Represents a Google Spreadsheets and accepts operations on the Spreadsheet object.",properties:{["SpreadsheetId"]:{displayName:"Spreadsheet Id",description:"The google drive ID of the spreadsheet file.",type:e},["SpreadSheetName"]:{displayName:"Spreadsheet Name",description:"The name of the spreadsheet (file).",type:e},["FolderId"]:{displayName:"Folder Id",description:"The folder where this spreadsheet needs to be placed.",type:e},["SheetId"]:{displayName:"Sheet Id",description:"Unique identifier of a sheet within a spreadsheet.",type:e},["SheetName"]:{displayName:"Sheet Name",description:"Name of the sheet within a spreadsheet",type:e}},methods:{}},Cell:{displayName:"Cell",description:"Operations related to a single or set of Google Sheet Cell(s).",properties:{[a]:{displayName:"Spreadsheet Id",description:"The google drive ID of the spreadsheet file.",type:e},[o]:{displayName:"Cell Name",description:"The cell name, in the format 'Sheet1!A1'. Only one cell can be provided.",type:e},[s]:{displayName:"Boolean Value",description:"The true/false value of the field if it is a boolean cell.",type:t},[r]:{displayName:"Text Value",description:"The text value of the field if it is a text cell.",type:e},[n]:{displayName:"Number Value",description:"The number value of the field if it is a number cell.",type:"number"},[l]:{displayName:"Formula Value",description:"The Formula of the field if it is a formula cell.",type:e},[d]:{displayName:"DateTime Value",description:"The date and time of the field if it is a datetime cell.",type:"dateTime"},[p]:{displayName:"Date Value",description:"The Date of the field if it is a date cell.",type:"extendedDateTime"},[c]:{displayName:"Time Value",description:"The Time of the field if it is a time cell.",type:"extendedDateTime"},[m]:{displayName:"Formatted Value",description:"The text representation of the cell",type:e},[u]:{displayName:"Is Empty",description:"Indicates if the cell is empty, or could not be found.",type:t},[h]:{displayName:"Major Dimension",description:"Major Dimension",type:e},[f]:{displayName:"value Render Option",description:"value Render Option",type:e},[y]:{displayName:"DateTime Render Option",description:"DateTime Render Option",type:e}},methods:{[i]:{displayName:"Get Cell Value",description:"Read a value from a single given Cell.",type:"read",inputs:[a,o],requiredInputs:[a,o],outputs:[s,r,n,l,d,p,c,m,u,h]}}}}},N="https://sheets.googleapis.com/v4/spreadsheets";async function S(e,t,s){switch(e){case i:await async function(e,t){e[h],e[f],e[y];let i=await async function(e,t){return new Promise((i,a)=>{var o=new XMLHttpRequest;if(o.onreadystatechange=function(){try{if(4!==o.readyState)return;if(200!==o.status)throw new Error("FETCH_GET - Failed with status "+o.status);i(o.responseText)}catch(e){console.log(`FETCH_GET - error: ${e}; ResponseText: ${o.responseText}`),a(e)}},o.onerror=function(){throw console.log("FETCH_GET - onError occured"),new Error("FETCH_GET - onError occured")},t){let i="?";for(let e in t){i+=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+"&"}e+=i}console.log("FETCH_GET URL: "+e),o.open("GET",e),o.withCredentials=!0,o.send()})}(N+"/"+e[a]+"/values/"+e[o]),s=JSON.parse(i);postResult({[o]:s.range,[h]:s.majorDimension,[r]:s.values[0]})}(t);break;default:throw new Error(`The method ${e} is not supported.`)}}metadata={systemName:"GoogleSheetJSSPBroker",displayName:"Google Sheet JSSP Broker",description:"JSSP Broker to utilize Google Sheet functionality.",configuration:{}},ondescribe=async function({configuration:e}){postSchema(T)},onexecute=async function({objectName:e,methodName:t,parameters:i,properties:a,configuration:o,schema:s}){switch(e){case"Cell":S(t,i);break;default:throw new Error("The object "+e+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
