let toggleBtn1 = document.querySelector("#toggle-btn1");
let toggleBtn2 = document.querySelector("#toggle-btn2");
let subTopNav = document.querySelector("#subtopnav");
let mainMenu = document.querySelector(".main-menu");
let sidebar = document.querySelector(".sidebar");
let blogArea = document.querySelector("article");
let scrollLeftBtn = document.querySelector('#scroll_left_btn');
let scrollRightBtn = document.querySelector('#btn_container_subtopnav');
let flag1 = 0;
let flag2 = 0;

toggleBtn1.addEventListener("click", function () {
  if (flag1 == 0) {
    sidebar.style.transform = "translateX(0%)";
    toggleBtn1.style.transform = "rotate(180deg)";
    blogArea.style.width = "76%";
    blogArea.style.marginLeft = "22%";
    flag1 = 1;
  }else{
    sidebar.style.transform = 'translateX(-92%)';
    toggleBtn1.style.transform = 'rotate(0deg)';
    blogArea.style.width = '94%';
    blogArea.style.marginLeft = '3%';
    flag1 = 0;
  }
});

toggleBtn2.addEventListener("click", function () {
  if (flag2 == 0) {
    toggleBtn2.style.top = "70px";
    subTopNav.style.top = "0px";
    scrollLeftBtn.style.top = "0px";
    scrollRightBtn.style.top = "0px";
    blogArea.style.marginTop = "100px";
    sidebar.style.top = "80px"
    flag2 = 1;

  } else if (flag2 == 1) {
    toggleBtn2.style.transform = "rotate(180deg)";
    toggleBtn2.style.top = "0%";
    mainMenu.style.top = "-70px";
    subTopNav.style.top = "-60px";
    scrollLeftBtn.style.top = "-60px";
    scrollRightBtn.style.top = "-60px";
    blogArea.style.marginTop = "50px";
    sidebar.style.top = "10px"
    flag2 = 2; // Change flag2 value to differentiate from the first condition
    
  } else if (flag2 == 2) {
    toggleBtn2.style.transform = "rotate(0deg)";
    toggleBtn2.style.top = "145px";
    mainMenu.style.top = "0%";
    subTopNav.style.top = "80px";
    scrollLeftBtn.style.top = "80px";
    scrollRightBtn.style.top = "80px";
    blogArea.style.marginTop = "180px";
    sidebar.style.top = "160px";
    flag2 = 0; // Change flag value to differentiate from the first two conditions
  }
});

