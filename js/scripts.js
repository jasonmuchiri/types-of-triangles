function TRACK()
{
  var dimension1 = document.getElementById("d1").value;
  var dimension2 = document.getElementById("d2").value;
  var dimension3 = document.getElementById("d3").value;
  var sides = ["dimension1","dimension2","dimension3"];
  var sideA = parseInt("dimension1");
  var sideB = parseInt("dimension2");
  var sideC = parseInt("dimension3");
  if (sideA === sideB && sideB === sideC){
    alert("Equilateral Triangle");
  }
}
