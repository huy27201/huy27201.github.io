
var present;
var random = 0;
function check() {
    swal({
        text: 'Type the code (10 characters)',
        content: "input",
        button: {
          text: "Check",
        },
    })
    .then(name => {
        if ((name.length == 10) && (name != null))  {
            var value = Math.floor((Math.random() * 3600) + 3600); 
            random += value;
            document.getElementById("circle").style.transform=`rotate(${-random}deg)`;
            //setTimeout(remove, 10000);
        }
        //    animation();  
        else {
            swal("Unsuccessful","The code is incorrect!","error");
        }
    });
}
document.getElementById("circle").addEventListener("click", () => {
    check();
    
});
function animation() {
    //document.getElementById("circle").classList.add("animate");
    setTimeout(remove, 10000);
}
function remove() {
    document.getElementById("circle").style.transition="0s";
    document.getElementById("circle").style.transform="rotate(0deg)";
    //document.getElementById("circle").classList.remove("animate");
}