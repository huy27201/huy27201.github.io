var card = document.querySelectorAll(".card");
var page = 1;
for (var i = 3; i < card.length; i++)
{
    card[i].style.display = "none";
}
var pageButton = document.querySelectorAll(".page-button");
for (var k = 0; k < pageButton.length; k++)
{
    pageButton[k].addEventListener("click", e => {
        for (var i = 0; i < card.length; i++)
        {
            card[i].style.display = "none";
        }
        console.log(e.target.innerText);
        if (e.target.innerText == 1)
        {
            for (var i = 0; i < 3; i++)
            {
                card[i].style.display = "";
            }
        }
        else if (e.target.innerText == 2) {
            for (var i = 0; i < 4; i++)
            {
                card[i + 3].style.display = "";
            }
        }
        else {
            for (var i = 0; i < 3; i++)
            {
                card[i + 7].style.display = "";
            }
        }
    });
}
