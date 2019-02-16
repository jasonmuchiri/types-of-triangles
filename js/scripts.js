function TRACK()
{
  var dimension1 = document.getElementById("data1").value;
  var dimension2 = document.getElementById("data2").value;
  var dimension3 = document.getElementById("data3").value;
  var sides = ["dimension1","dimension2","dimension3"];
  var sideA = parseInt("dimension1");
  var sideB = parseInt("dimension2");
  var sideC = parseInt("dimension3");

  if (sideA === sideB && sideB === sideC){
    alert("Equilateral Triangle");
  }
}
