//Chuyển đổi danh sách các thẻ thành viên
var cardFrame = document.querySelectorAll(".card-frame");
let cardSection = document.getElementById("card-section");
for (var i = 3; i < cardFrame.length; i++)
{
    cardFrame[i].style.display = "none";
}
var pageButton = document.querySelectorAll(".page-button");
for (var k = 0; k < pageButton.length; k++)
{
    pageButton[k].addEventListener("click", event => {
        resetMember();
        for (var i = 0; i < cardFrame.length; i++)
        {
            cardFrame[i].style.display = "none";
        }
        if (event.target.innerText == 1)
        {
            for (var i = 0; i < 3; i++)
            {
                cardFrame[i].style.display = "";
            }
            cardFrame[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        else if (event.target.innerText == 2) {
            for (var i = 0; i < 4; i++)
            {
                cardFrame[i + 3].style.display = "";
            }
            cardFrame[4].scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        else {
            for (var i = 0; i < 3; i++)
            {
                cardFrame[i + 7].style.display = "";
            }
            cardFrame[7].scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
        
    });
}

//Hiện thông tin từng thành viên    
let memberFrame = document.querySelectorAll(".member-frame");

function resetMember() {
    for (var i = 0; i < memberFrame.length; i++)
    {
        memberFrame[i].style.height = "0";
        memberFrame[i].style.padding = "0 30px";
    }
}
resetMember();

function showMember(indexMember) {
    let memberHeight = memberFrame[indexMember].scrollHeight;
    console.log(memberHeight);
    if (memberFrame[indexMember].style.height == "0px") {
        resetMember();
        memberFrame[indexMember].style.height = memberHeight  + "px";
        //memberFrame[indexMember].style.height = 540 + "px";
        memberFrame[indexMember].style.padding = "30px 30px";
        setTimeout(() => {
            memberFrame[indexMember].scrollIntoView({ block: 'start', behavior: 'smooth' });
        }, 500);
        
    }  
    else {
        memberFrame[indexMember].style.height = "0";
        memberFrame[indexMember].style.padding = "0 30px";
        cardFrame[indexMember].scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
}
