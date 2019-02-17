function check(){
  var length1 = document.getElementById("data1").value;
  var length2 = document.getElementById("data2").value;
  var length3 = document.getElementById("data3").value;
  var sides = ["length1","length2","length3"];
  var sideA = parseInt(length1);
  var sideB = parseInt(length2);
  var sideC = parseInt(length3);
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
