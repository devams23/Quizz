var anslist = [1, 3, 2, 2];

for (var i = 0; i < 4; i++) {
  (function (index) {
    document.querySelectorAll("input")[index].addEventListener("keydown", function (event) {
      var ans = event.key;
      if (ans == anslist[index]) {
        document.querySelectorAll(".showans")[index].innerHTML = "Correct ✅";
      } else if (ans == "Backspace") {
        document.querySelectorAll(".showans")[index].innerHTML = "";
      } else {
        document.querySelectorAll(".showans")[index].innerHTML = "Wrong ❌";
      }
    });
  })(i);
}


 



 
//  document.querySelector("input").addEventListener("keydown", function (event){

//     var ans = event.key;
    
//     if (ans === "a"){

//         document.querySelector(".showans").innerHTML = "correct ans";
//     }
//     else if (ans === "Backspace"){
//         document.querySelector(".showans").innerHTML = " ";
//     }
//     else{
//         document.querySelector(".showans").innerHTML = "wrong ans";
//     }

// });
 