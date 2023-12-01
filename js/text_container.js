// let textHeading = document.querySelectorAll(".text-heading")
// let textDesc = document.querySelectorAll(".text-desc")
// let textIcon = document.querySelector("#textIcon")

// textHeading.forEach(function(elem) {
//     let check = 0;
//     elem.addEventListener("click", function() {
//         textDesc.forEach(function (desc) {
//             // Set display property to "none" for each element
//            if(check == 0){
//             desc.style.display = "initial";
//             textIcon.style.display = "none"
           
//             check = 1;
//            }else{
//             desc.style.display = "none";
//             textIcon.style.display = "initial";
//             check = 0;
//            }
//         });
//     });
// });

let textHeading = document.querySelectorAll(".text-heading");
let textDesc = document.querySelectorAll(".text-desc");

textHeading.forEach(function(elem, index) {
    console.log(elem);
    elem.addEventListener("click", () => {
        // Har ek textDesc element ko hide karein
        textDesc[index].classList.toggle("hidden");
        alert("hello");
    });
});
