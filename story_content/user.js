function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tVyFN0PAT1":
        Script1();
        break;
      case "6PQmh4cGiIC":
        Script2();
        break;
      case "6NMAepDsAmR":
        Script3();
        break;
      case "5z8oV7vXlMg":
        Script4();
        break;
      case "6ECgsNq0F7c":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  $("#tab-customlink").show();
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

