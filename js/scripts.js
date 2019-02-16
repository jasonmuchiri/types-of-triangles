function check(){
  var inp1 = document.getElementById("d1").value;
  var inp2 = document.getElementById("d2").value;
  var inp3 = document.getElementById("d3").value;
  var sides = [inp1,inp2,inp3];
  var sideA = parseInt("inp");
  var sideB = parseInt("inp2");
  var sideC = parseInt("inp3");
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
    alert("NOT a Triangle");
  }else if (sideB + sideC <= sideA){
    alert("NOT a Triangle");
  }
}
