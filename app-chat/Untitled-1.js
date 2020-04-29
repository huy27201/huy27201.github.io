var rightSidebarIcon= document.getElementById("right-sidebar-icon"),
    rightSidebar=document.getElementById("right-sidebar"),
    layer=document.getElementById("layer"),
    layer2=document.getElementById("layer2"),
    sidenav=document.getElementById("left-sidebar"),
    sidenavIcon=document.getElementsByClassName("sidenav-icon");

var rightSidebarMessages=document.getElementById("right-sidebar-messages"),
    rightSidebarMessage=rightSidebarMessages.getElementsByClassName("right-sidebar-message");

var search = document.getElementById("search-box");

var mainPage=document.getElementById("mainpage"),
    footer=document.getElementsByTagName("footer")[0],
    navbar=document.getElementsByClassName("navbar")[0];

var magnifier=document.getElementById("magnifier");

var sidenavButton=document.getElementsByClassName("dropdown-button");

active=document.getElementsByClassName("active")[0],

/*navbar*/
document.body.addEventListener('click',function (event) {
    var targetElement =event.target, 
        flag=document.getElementById("flag"),
        dropdownHeader=document.getElementsByClassName("dropdown-list"),
        bell=document.getElementById("notification-icon"),
        avatar=document.getElementById("avatar"),
        notification=document.getElementById("notification");
    function reset () {
        for (var i=0;i<dropdownHeader.length;i++) //dropdown-list
            {
                dropdownHeader[i].style.transform="scale(0,0)";
                dropdownHeader[i].style.opacity="0";
            }
        notification.style.transform="scale(0,0)"; //notification
        notification.style.opacity="0"; //notification
        rightSidebar.style.transform="translateX(340px)"; //right-sidebar
    }
    if (targetElement==search) {
        magnifier.classList.remove("white-color-icon");                             //đổi màu icon kính lúp
        magnifier.classList.add("black-color-icon");
    }
    else {
        magnifier.classList.remove("black-color-icon");
        magnifier.classList.add("white-color-icon");  
    }
    targetElement=event.target;
    do {                                                                                
        if (targetElement==flag) {                                                  //mở danh mục của header
            if (dropdownHeader[0].style.opacity==="1")
            {
                dropdownHeader[0].style.transform="scale(0,0)";
                dropdownHeader[0].style.opacity="0";
                return;
            } else {
                reset();
                dropdownHeader[0].style.transform="scale(1,1)";
                dropdownHeader[0].style.opacity="1";
            return;
            }
        }
       targetElement=targetElement.parentNode; 
    }
    while (targetElement);
    targetElement=event.target;
    do {                                                            //mở danh mục của header
        if (targetElement==bell) {
            if (notification.style.opacity==="1")
            {
                notification.style.transform="scale(0,0)";
                notification.style.opacity="0";
                return;
            } else {
            reset();
            notification.style.transform="scale(1,1)";
            notification.style.opacity="1";
            return;
            }
        }
       targetElement=targetElement.parentNode; 
    }
    while (targetElement);
    targetElement=event.target;
    do {                                                                        //mở danh mục của header
        if (targetElement==avatar) {
            if (dropdownHeader[1].style.opacity==="1")
            {
                dropdownHeader[1].style.transform="scale(0,0)";
                dropdownHeader[1].style.opacity="0";
                return;
            } else {
                reset();
                dropdownHeader[1].style.transform="scale(1,1)";
                dropdownHeader[1].style.opacity="1";
            return;
            }
        }
       targetElement=targetElement.parentNode; 
    }
    while (targetElement);
    targetElement=event.target;
    do {                                                                                //mở danh mục bên phải
        if ((targetElement==rightSidebarIcon)||(targetElement==rightSidebar)) {
            reset();
            layer.style.display="block";
            rightSidebar.style.transform="translateX(0)";
            return;
        }
       targetElement=targetElement.parentNode; 
    }
    while (targetElement);
    reset();
});
/*sidenav*/
document.addEventListener('click',function (event) {
    var sidenavDropdownList = document.getElementsByClassName("sidenav-dropdown-list"),
        sidenavLi = document.getElementsByClassName("sidenav-li"),
        targetSidenav=event.target;
    var toggler=document.getElementById("toggler");
    function resetsidenav() {
        for (var i=0;i<sidenavDropdownList.length;i++)
        {
            sidenavDropdownList[i].style.height="0";
            sidenavButton[i].style.transform="rotate(0)";
        }
    }
    do {
        for (var j=0;j<sidenavLi.length;j++) {
            if (targetSidenav==sidenavLi[j]) {                                              //mở các danh mục bên trái
                var sectionHeight=sidenavDropdownList[j].scrollHeight;
                if (sidenavDropdownList[j].style.height==sectionHeight+'px') {
                    sidenavDropdownList[j].style.height="0";
                    sidenavButton[j].style.transform="rotate(0)";
                    return;
                } else {
                    resetsidenav();
                    sidenavDropdownList[j].style.height=sectionHeight+'px';
                    //sidenavLi[j].style.backgroundColor="rgba(0,0,0,0.03)";
                    sidenavButton[j].style.transform="rotate(90deg)";
                    return;
                }
            }
        }
      targetSidenav=targetSidenav.parentNode; 
    }
    while (targetSidenav);
    targetSidenav=event.target;
    if (targetSidenav==toggler) {                                       //Thay đổi padding của main
        if (toggler.innerHTML=="radio_button_checked") {
            var searchDiv=document.getElementById("search");
            searchDiv.style.marginLeft="75px";
            searchDiv.style.width="calc(100% - 360px)";
            mainPage.style.paddingLeft="64px";
            footer.style.paddingLeft="71px";
            toggler.innerHTML="radio_button_unchecked";
            sidenav.addEventListener("mouseout",reduceWidth);
            sidenav.addEventListener("mouseover",expandWidth);
        }
        else if (toggler.innerHTML=="radio_button_unchecked") {
            var searchDiv=document.getElementById("search");
            searchDiv.style.marginLeft="270px";
            searchDiv.style.width="calc(100% - 560px)";
            mainPage.style.paddingLeft="260px";
            footer.style.paddingLeft="267px";
            toggler.innerHTML="radio_button_checked";
            sidenav.removeEventListener("mouseout",reduceWidth);
            sidenav.removeEventListener("mouseover",expandWidth);
        }
    }
});
var rightSideInput=document.getElementById("right-sidebar-input");
/*right-sidebar*/
document.addEventListener('click',function (event) {
    var targetRightSidebar=event.target,
        close=document.getElementById("close-icon"),
        rightSidebarChat=document.getElementsByClassName("right-sidebar-chat")[0],
        rightSidebarSettings=document.getElementsByClassName("right-sidebar-settings")[0],
        rightSidebarActivity=document.getElementsByClassName("right-sidebar-activity")[0],
        indicator=document.getElementById("indicator");
        rightSidebarLi=document.getElementsByClassName("right-sidebar-li"),
        rightSidebarPerson=document.getElementById("right-sidebar-person"),
        chatHeader= document.getElementById("chat-header");
    function resetRightSidebar() {                                                            
        for (var k = 0 ; k < rightSidebarLi.length;k++)
        {
            rightSidebarChat.style.display="none";
            rightSidebarSettings.style.display="none";
            rightSidebarActivity.style.display="none";
        }
    }
    do {
        if (targetRightSidebar==rightSidebarLi[0]) {                                   //danh mục chat bên phải
            resetRightSidebar();
            rightSidebarChat.style.display="block";
            indicator.style.left="0";
            indicator.style.right="188px";
            return;
        }
        else if (targetRightSidebar==rightSidebarLi[1]) {                   //danh mục cài đặt chung bên phải
            resetRightSidebar();
            rightSidebarSettings.style.display="block";
            indicator.style.left="94px";
            indicator.style.right="94px";
            return;
        }
        else if (targetRightSidebar==rightSidebarLi[2]) {                   //danh mục hoạt động bên phải
            resetRightSidebar();
            rightSidebarActivity.style.display="block";
            indicator.style.left="188px";
            indicator.style.right="0";
            return;
        }
        targetRightSidebar=targetRightSidebar.parentNode;
    } while(targetRightSidebar);
    targetRightSidebar=event.target;
    do {
        for (var i=0;i<rightSidebarMessage.length;i++)                      //nội dung chat bên phải
        {
            if (targetRightSidebar==rightSidebarMessage[i])
            {
                rightSidebarPerson.style.transform="translateX(0)";
                layer2.style.display="block";
            }
        }
        targetRightSidebar=targetRightSidebar.parentNode;
    } while(targetRightSidebar);
    targetRightSidebar=event.target;                                        //tắt danh mục bên phải
    do {
    if (((targetRightSidebar==close)||(targetRightSidebar==layer)))
    {
        rightSidebar.style.transform="translateX(340px)";
        layer.style.display="none";
        return;
    }
    else if ((targetRightSidebar==chatHeader)||(targetRightSidebar==layer2)) {      //tắt nội dung chat
        rightSidebarPerson.style.transform="translateX(340px)";
        rightSidebar.style.transform="translateX(0)";
        layer2.style.display="none";
        return;
    }
    targetRightSidebar=targetRightSidebar.parentNode;
    } while(targetRightSidebar);
});

//additional
document.addEventListener('click', function(event) {
    var targetAdd=event.target;
    var addSettings=document.getElementById("additional-settings"),
        customizer=document.getElementById("customizer"),
        settingsClose=document.getElementById("settings-close"),
        colorList1=document.getElementsByClassName("color-list")[0].children,
        colorList2=document.getElementsByClassName("color-list")[1].children;

    var backGround=document.getElementById("background");
    function resetAdd1() {
        for (var i=0;i<colorList1.length;i++)
        {
            colorList1[i].style.boxShadow="none";
        }
    }
    function resetAdd2() {
        for (var i=0;i<colorList2.length;i++)
        {
            colorList2[i].style.boxShadow="none";
        }
    }
    for (var j=0;j<colorList1.length;j++)                                  //hightlight màu được chọn
    {
        if (targetAdd==colorList1[j]) {
            resetAdd1();
            colorList1[j].style.boxShadow="0 0 10px 3px #03a9f4";
        }
        if (targetAdd==colorList2[j]) {
            resetAdd2();
            colorList2[j].style.boxShadow="0 0 10px 3px #03a9f4";
        }
    }

    var shape=document.getElementsByName("selection");                     //change background color and shape of active sidenav-li
    if (shape[0].checked)
    {
        active.style.borderRadius = "0 5px 5px 0";
        for (var i=0;i<sidenavIcon.length;i++)
        {
            sidenavIcon[i].style.marginRight = "1.1rem";
            sidenavIcon[i].style.padding = "0 0 0 21px";
        }
       
    } 
    else if (shape[1].checked)
    {
        active.style.borderRadius = "0 25px 25px 0";
        for (var i=0;i<sidenavIcon.length;i++)
        {
            sidenavIcon[i].style.marginRight = "1.1rem";
            sidenavIcon[i].style.padding = "0 0 0 21px";
        }
    }
    else if (shape[2].checked)
    {
        active.style.borderRadius = "0";
        for (var i=0;i<sidenavIcon.length;i++)
        {
            sidenavIcon[i].style.marginRight = "1.1rem";
            sidenavIcon[i].style.padding = "0 1rem";
        }
        active.style.marginRight="0";
    } 
    var color=['linear-gradient(45deg,#303f9f,#1976d2)','linear-gradient(45deg,#8e24aa,#ff6e40)','linear-gradient(45deg,#0288d1,#26c6da)','linear-gradient(45deg,#d500f9,#ffa000)','linear-gradient(45deg,#7b1fa2,#7c4dff)','linear-gradient(45deg,#bf360c,#f57c00)','linear-gradient(45deg,#43a047,#1de9b6)','linear-gradient(45deg,#3949ab,#4fc3f7)','linear-gradient(45deg,#ff5252,#f48fb1)','#f44336','#9c27b0','#e91e63','#673ab7','#00bcd4','#009688','#03a9f4','#ff8f00','#5d4037'];

    var boxShadow=['0 6px 20px 0 rgba(25,118,210,.5)','0 6px 20px 0 rgba(255,110,64,.5)','0 6px 20px 0 rgba(38,198,218,.5)','0 6px 20px 0 rgba(255,160,0,.5)','0 6px 20px 0 rgba(124,77,255,.5)','0 6px 20px 0 rgba(245,124,0,.5)','0 6px 20px 0 rgba(29,233,182,.5)','0 6px 20px 0 rgba(79,195,247,.5)','0 6px 20px 0 rgba(244,143,177,.5)'];
    for (var i=0;i<colorList1.length;i++)
    {
        if (targetAdd==colorList1[i])
        {
            active.style.background=color[i];
            if (i<=8) active.style.boxShadow=boxShadow[i];
            else active.style.boxShadow="none";
            return;
        }
        if (targetAdd==colorList2[i])
        {
            navbar.style.background=color[i];
            backGround.style.background=color[i];
            return;
        }
    }
    do {
        if (targetAdd==addSettings)                                     //tắt phần cài đặt
        {
            customizer.style.transform="translateX(0)";
            layer.style.display="block";
            return;
        }
        else if (((targetAdd==settingsClose)||(targetAdd==layer)))
        {
            customizer.style.transform="translateX(360px)";
            layer.style.display="none";
            return;
        }
        targetAdd=targetAdd.parentNode;
    } while(targetAdd);
});
var logo=document.getElementById("logo");
function DarkMenu(darkMenu) {
    var sidenavList=document.getElementsByClassName("sidenav-list")[0];                 //đổi màu menu
    var sidenavMaterialIcons=sidenavList.getElementsByClassName("material-icons");
    var logoButton=logo.getElementsByClassName("material-icons")[0],
        logoBrand=document.getElementById("logo-text");
    sidenav.style.backgroundColor=darkMenu.checked ? "#2c323f":"#fff";
    sidenavList.style.backgroundColor=darkMenu.checked ? "#2c323f":"#fff";
    logoButton.style.color=darkMenu.checked ? "#fff":"rgba(0,0,0,0.87)";
    logoBrand.style.color=darkMenu.checked ? "#fff":"rgba(0,0,0,0.87)";
    for (var i=0;i<sidenavIcon.length;i++)
    {
        sidenavIcon[i].style.color=darkMenu.checked ? "#fff":"rgba(0,0,0,0.87)";
        sidenavMaterialIcons[i].style.color=darkMenu.checked ? "#fff":"rgba(0,0,0,0.54)";
    }
}
function DarkNavbar(darkNavbar) {                                                       //đổi màu thanh navbar
    var navbarIcons=navbar.getElementsByClassName("material-icons");
    darkNavbar.checked ? navbarOn(navbar,magnifier,navbarIcons,search):navbarOff(navbar,magnifier,navbarIcons,search);
}
function navbarOn(navbar,magnifier,navbarIcons) {                               //bật màu tối navbar
    navbar.style.background="#37474f";
    magnifier.classList.remove("black-color-icon");
    magnifier.classList.add("white-color-icon");
    search.classList.remove("black-color");
    search.classList.add("white-color");
    for (var i=0;i<navbarIcons.length;i++)
    {
        navbarIcons[i].style.color="#fff";
    }
}
function navbarOff(navbar,magnifier,navbarIcons) {                          //tắt màu tối navbar
    navbar.style.background="#fff";
    magnifier.classList.remove("white-color");
    magnifier.classList.add("black-color-icon");
    search.classList.remove("white-color-icon");
    search.classList.add("black-color");
    for (var i=0;i<navbarIcons.length;i++)
    {
        navbarIcons[i].style.color="#000";
    }
}
function DarkFooter(darkFooter) {                                           //đổi màu footer
    var footerLink=document.getElementsByClassName("footer-link");
    footer.style.background=darkFooter.checked ? "#37474f":"#fff";
    footer.style.color=darkFooter.checked ? "#fff":"#000";
    footer.style.boxShadow="none";
    for (var i=0;i<footerLink.length;i++) {
        footerLink[i].style.color=darkFooter.checked ? "#fff":"#000";
    }
    footer.style.border=darkFooter.checked ? "none":"solid 1px #eee";
}
function sidebarsearch() { //search                                         //tìm kiếm người chat danh mục bên phải
    var rightSidebarValue=rightSideInput.value.toUpperCase();
    for (var i=0;i<rightSidebarMessage.length;i++)
    {
        var rightSidebarName=rightSidebarMessage[i].getElementsByClassName("right-sidebar-name")[0],
        textValue=rightSidebarName.innerText || rightSidebarName.textContent;
        if (textValue.toUpperCase().indexOf(rightSidebarValue)>(-1))
        {
            rightSidebarMessage[i].style.display="";
        }
        else {
            rightSidebarMessage[i].style.display="none";
        }
    }
}

//main
var searchChat=document.getElementById("search-chat");                      
function mainSearch() { //search                                        //tìm kiếm người chat trong main
    var mainChatLi=document.getElementsByClassName("main-chat-li");
    var mainValue=searchChat.value.toUpperCase();
   
    for (var i=0;i<mainChatLi.length;i++)
    {
        var mainName=mainChatLi[i].getElementsByClassName("contentheader-name")[0],
        mainTextValue=mainName.innerText || mainName.textContent;
        if (mainTextValue.toUpperCase().indexOf(mainValue)>(-1))
        {
            mainChatLi[i].style.display="";
        }
        else {
            mainChatLi[i].style.display="none";
        }
    }
}


// start scrollbar at bottom
var rightScroll=document.getElementsByClassName("right-scroll");            //chat luôn hiển thị ở dưới
for (var i=0;i<rightScroll.length;i++)
{
    rightScroll[i].scrollTop=rightScroll[i].scrollHeight;
}

//send chat text
function chatWithSomeone() {
    var textChat=document.getElementById("text-chat");
    textChat.addEventListener("keyup", function(event) {                    //tin nhắn gửi khi enter
        if(event.keyCode===13) {
            if (textChat.value!="")
            {
                addMessage(textChat.value);
                textChat.value='';
            } 
        }
    });
    
    var submit=document.getElementById("submit");
    submit.addEventListener("click",function (event) {              //tin nhắn gửi khi click
        if (textChat.value!="")
            {
                addMessage(textChat.value);
                textChat.value='';
            } 
    });
}
chatWithSomeone();
function addMessage(value) {                                    //thêm tin nhắn
    var message=document.createElement("div");
    message.classList.add("main-text");
    var textAdd=document.createElement("p");
    textAdd.classList.add("sent-color");
    textAdd.innerHTML=value;
    message.appendChild(textAdd);
    var last=document.getElementById("last");
    last.appendChild(message);
    rightScroll[0].scrollTop=rightScroll[0].scrollHeight;
}

function reduceWidth()
{
    logo.style.width="64px";
    sidenav.style.width="64px";
    var sidenavText=document.getElementsByClassName("sidenav-text"),
        dashboardBadge=document.getElementsByClassName("dashboard-badge"),
        logoText=document.getElementById("logo-text"),
        brand=document.getElementById("brand"),
        mailBadge=document.getElementsByClassName("mail-badge"),
        sidenavHeaderText=document.getElementsByClassName("sidenav-header-text"),
        horiz=document.getElementsByClassName("horiz");
    for (var i=0;i<sidenavText.length;i++)
    {
        sidenavText[i].style.opacity="0";
    }
    for (var i=0;i<dashboardBadge.length;i++)
    {
        dashboardBadge[i].style.opacity="0";
    }
    for (var i=0;i<sidenavButton.length;i++)
    {
       sidenavButton[i].style.opacity="0";
    }
    for (var i=0;i<mailBadge.length;i++)
    {
       mailBadge[i].style.opacity="0";
    }
    for (var i=0;i<sidenavHeaderText.length;i++)
    {
       sidenavHeaderText[i].style.display="none";
    }
    for (var i=0;i<horiz.length;i++)
    {
      horiz[i].classList.remove("more");
    }
    logoText.style.opacity="0";
    toggler.style.display="none";
    brand.style.paddingLeft="15px";
    active.style.marginRight="10px";
}
function expandWidth() {
    sidenav.style.width="260px";
    logo.style.width="260px";
    var sidenavText=document.getElementsByClassName("sidenav-text"),
        dashboardBadge=document.getElementsByClassName("dashboard-badge"),
        logoText=document.getElementById("logo-text"),
        brand=document.getElementById("brand"),
        mailBadge=document.getElementsByClassName("mail-badge"),
        sidenavHeaderText=document.getElementsByClassName("sidenav-header-text"),
        horiz=document.getElementsByClassName("horiz");
    for (var i=0;i<sidenavText.length;i++)
    {
        sidenavText[i].style.opacity="1";
    }
    for (var i=0;i<dashboardBadge.length;i++)
    {
        dashboardBadge[i].style.opacity="1";
    }
    for (var i=0;i<sidenavButton.length;i++)
    {
       sidenavButton[i].style.opacity="1";
    }
    for (var i=0;i<mailBadge.length;i++)
    {
       mailBadge[i].style.opacity="1";
    }
    for (var i=0;i<sidenavHeaderText.length;i++)
    {
       sidenavHeaderText[i].style.display="";
    }
    for (var i=0;i<horiz.length;i++)
    {
       horiz[i].classList.add("more");
    }
    logoText.style.opacity="1";
    toggler.style.display="";
    brand.style.paddingLeft="22px";
    active.style.marginRight="1.1rem";
}

function OpenSidenav() {
    var sidenavList=document.getElementsByClassName("sidenav-list")[0],
        layer3=document.getElementById("layer3"); 
        sidenav.style.transform="translateX(0)";
        layer3.style.display="block";
}
function removeLayer(a) {
    var sidenavList=document.getElementsByClassName("sidenav-list")[0];
    a.style.display="none";
    sidenav.style.transform="translateX(-100%)";
}