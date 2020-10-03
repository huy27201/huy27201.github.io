
var present;
var random = 0;
var temp;
function check() {
    swal({
        text: 'Type the code (10 characters)',
        content: "input",
        button: {
          text: "Check",
        },
    })
    .then(name => {
        if (name.length == 0) {
            swal("Unsuccessful","You must type the code!","error");
        }
        else if (name.length != 10) {
            swal("Unsuccessful!","Unavailable code!","error");
        }
        else  {
            var value = Math.floor(Math.random() * 100); 
            if (value == 0)
            {
                temp = 130;
                present = "Dây đeo Black";
            } 
            else if (value <= 8 && value >= 1) {
                temp = 290;
                present = "Dây đeo Golden";
            }  
            else if (value <= 34) {
                let randomPiece = Math.floor(Math.random() * 10);
                if (randomPiece < 4) temp = 50;
                else temp = 250;
                present = "Huy hiệu ITAC";
            } 
            else if (value <= 60) {
                let randomPiece = Math.floor(Math.random() * 10);
                if (randomPiece < 4) temp = 10;
                else temp = 170;
                present = "Phiếu ưu đãi 20%";
            } 
            else {
                let randomPiece = Math.floor(Math.random() * 10);
                if (randomPiece < 3) temp = 90;
                else if (randomPiece < 6) temp = 210;
                else temp = 330;
                present = "Huy hiệu K20";
            } 
            random = random + temp + 3600;
            document.getElementById("circle").style.transform=`rotate(${-random}deg)`;
            random -= temp;
        }
    });
}
document.getElementById("circle").addEventListener("click", () => {
    check();
});
