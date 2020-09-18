window.onscroll = function() {scrollFunction()};
  
//thay doi header khi scroll

function scrollFunction ()
{
    var icon=document.getElementsByClassName("icon-item");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#3e5bd5";
        document.getElementById("logo").style.height="50px";
        document.getElementById("nav-list").style.fontSize="1rem";
        for (var x of icon)
        {
            x.style.height = "35px";
            x.style.width = "35px";
        }
      } else {
        document.getElementsByTagName("header")[0].style.backgroundColor = "transparent";
        document.getElementById("logo").style.height="72px";
        document.getElementById("nav-list").style.fontSize="18px";
        for (var x of icon)
        {
            x.style.height = "40px";
            x.style.width = "40px";
        }
      }
}

//thay doi header khi responsive

let bars = document.getElementById("menu-bars");
bars.addEventListener("click", () => {
  let lines = document.getElementsByClassName("bar-line");
  let navListDropdown = document.getElementById("nav-list-dropdown");
  if (lines[1].style.opacity == "1") {
    lines[0].style.transform = "rotate(-45deg) translate(-4px, 6px)";
    lines[1].style.opacity = "0";
    lines[2].style.transform = "rotate(45deg) translate(-4px, -6px)";
    navListDropdown.style.opacity = "1";
    navListDropdown.style.padding = "30px 0";
    let hiddenHeight = navListDropdown.scrollHeight;
    navListDropdown.style.height = hiddenHeight + 30 * 2 + "px";
  }
  else {
    lines[0].style.transform = "rotate(0) translate(0)";
    lines[1].style.opacity = "1";
    lines[2].style.transform = "rotate(0) translate(0)";
    navListDropdown.style.padding = "0";
    navListDropdown.style.opacity = "0";
    navListDropdown.style.height = "0";
  }
});

//Multi-carousel
var val = 0;
function multiCarousel(workWidth, val) {
  let left0 = document.getElementsByClassName("left-arrow")[0];
  let right0 = document.getElementsByClassName("right-arrow")[0];
  left0.addEventListener("click", () => {
    val += workWidth;
    if (val <= 0) {
      document.getElementById("work-list").style.transform = "translateX(" + val + "px)";
    }
    else val -= workWidth;
  });
  right0.addEventListener("click", () => {
    val -= workWidth;
    if (val > -(- document.getElementsByClassName("overflow")[0].clientWidth + document.getElementById("work-list").clientWidth)) {
      document.getElementById("work-list").style.transform = "translateX(" + val + "px)";
    }
    else val += workWidth;
  });
}


//Thay doi thong tin

function changeInfo(num)
{
  let aboutme = document.getElementById("about-aboutme");
  let experience = document.getElementById("about-experience");
  let aboutLi = document.getElementsByClassName("about-li");
  if (num == 1)
  {
    experience.style.display="none";
    aboutme.style.display="block";
    aboutLi[0].classList.add("active");
    aboutLi[1].classList.remove("active");
  }
  else if (num == 2)
  {
    aboutme.style.display="none";
    experience.style.display="block";
    aboutLi[0].classList.remove("active");
    aboutLi[1].classList.add("active");
  }
}

//Thay doi kich thuoc trinh duyet

window.onresize = () => {
  setWidthCarousel();
  val = 0;
  document.getElementById("work-list").style.transform = "translateX(" + val + "px)";
  let workItem = document.getElementsByClassName("work-item")[0];
  let workWidth = parseInt(getComputedStyle(workItem).marginRight) + workItem.clientWidth;
  multiCarousel(workWidth, val);
} 

//Tai trang web

window.onload = () => {
  val = 0;
  setWidthCarousel();
  document.getElementById("work-list").style.transform = "translateX(" + val + "px)";
  let workItem = document.getElementsByClassName("work-item")[0];
  let workWidth = parseInt(getComputedStyle(workItem).marginRight) + workItem.clientWidth;
  multiCarousel(workWidth, val);
}

//Thay doi width cua item trong Carousel

function setWidthCarousel()
{
  let browserWidth = document.getElementsByClassName("overflow")[0].offsetWidth;
  WorkResponsive(browserWidth, document.getElementsByClassName("work-item"), document.getElementById("work-list"));
  BlogResponsive(browserWidth, document.getElementsByClassName("blog-item"), document.getElementById("blog-list")); 
  FeedbackResponsive(browserWidth, document.getElementsByClassName("feedback-item"), document.getElementById("feedback-list"));
}
function WorkResponsive(browserWidthValue, item, list)
{
  let widthValue;
  let styleItem = window.getComputedStyle(item[0]);
  let marginRight = parseInt(styleItem.marginRight);
  if (browserWidthValue > 992)
    widthValue = (browserWidthValue - marginRight * 3) / 4;
  else if (browserWidthValue > 768)
    widthValue = (browserWidthValue - marginRight * 2) / 3;
  else if (browserWidthValue > 576)
    widthValue = (browserWidthValue - marginRight) / 2;
  else widthValue = (browserWidthValue);
  for (let i = 0; i < item.length; i++)
      item[i].style.width =  widthValue + "px";
  list.style.width = (widthValue + marginRight) * item.length + "px";
}
function BlogResponsive(browserWidthValue, item, list)
{
  let widthValue;
  let styleItem = window.getComputedStyle(item[0]);
  let marginRight = parseInt(styleItem.marginRight);
  let BlogWidthValue = document.querySelector(".page-section").clientWidth - 30;
  if (browserWidthValue > 992)
    widthValue = (BlogWidthValue - marginRight * 3) / 3;
  else if (browserWidthValue > 768)
    widthValue = (BlogWidthValue - marginRight * 2) / 2;
  else widthValue = (BlogWidthValue - marginRight);
  for (let i = 0; i < item.length; i++)
      item[i].style.width =  widthValue + "px";
  list.style.width = (widthValue + 30) * item.length + "px";
}
function FeedbackResponsive(browserWidthValue, item, list)
{
  var widthValue;
  let styleItem = window.getComputedStyle(item[0]);
  let marginRight = parseInt(styleItem.marginRight);
  let FeedbackWidthValue = document.querySelector(".page-section").clientWidth - 30;
  if (browserWidthValue > 768)
    widthValue = (FeedbackWidthValue - marginRight) / 2;
  else widthValue = (FeedbackWidthValue - marginRight);
  for (let i = 0; i < item.length; i++)
      item[i].style.width =  widthValue + "px";
  list.style.width = (widthValue + 30) * item.length + "px";
}