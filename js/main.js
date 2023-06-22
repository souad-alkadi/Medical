// let x = 15;
//       let y = "Ahmad";
//       alert(x + y);
//       y = 17;
//       alert(x + y);

let x = 5;
// {
//     var y = 7;
// }
let y = parseFloat(prompt("Please Enter The Y number"));
document.write(x + y + "<br>");
document.write("<h1>" + (x + y) + "</h1><br>");

let z = document.getElementById("mydiv");
z.innerHTML += x * y;


console.log(z);

