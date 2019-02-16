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
  }else if (sideA === sideB && sideA !== sideC){
    alert("Isosceles Triangle");
  }else if (sideA === sideC && sideA !== sideB){
    alert("Isosceles Triangle");
  }else if (sideB === sideC && sideB !== sideA){
    alert("Isosceles Triangle");
  }else if (sideA !== sideB && sideA !== sideC && sideB !== sideC && sideA + sideB > sideC && sideA + sideC > sideB && sideC + sideB > sideA){
    alert("Scalene Triangle");
  }else if (sideA + sideB <= sideC){
    alert("NOT a Triangle");
  }else if (sideA + sideC <= sideB){
    alert("NOT a triangle");
  }else if (sideB + side)
}
