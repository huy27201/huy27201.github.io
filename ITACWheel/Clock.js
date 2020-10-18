var present;
var random = 0;
var temp;
var checkCharacter, checkCorrectCode;
var storageKey = 'codeUsed';
var dataString = localStorage.getItem(storageKey);
var codeUsed; 
if (dataString) codeUsed = JSON.parse(dataString);
else codeUsed = [];
var code = [];
    fetch('Code.txt')
      .then(response => response.text())
      .then(data => {
          code = data.split('\n');
      });
function check() {
    swal({
        text: 'Nhập mã 10 kí tự',
        content: "input",
        button: {
          text: "OK",
        },
    })
    .then(name => {
        if (name.length == 0) {
            swal("Không có mã!","Bạn phải nhập mã.","error");
        }
        else if (name.length != 10) {
            swal("Mã không tồn tại!","Mã bạn vừa nhập không tồn tại.","error");
        }
        else  {
            checkCorrectCode = false;
            for (var i = 0; i < 100; i++)
            {
                checkCharacter = true;
                for (var j = 0; j < 10; j++)
                {
                    if (name[j] != code[i][j]) {
                        checkCharacter = false;
                        break;
                    } 
                }
                if (checkCharacter == true) {
                    checkCorrectCode = true;
                    if (codeUsed.indexOf(name) == -1) {
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
                        document.getElementById("layer").style.zIndex = "999";
                        random = random + temp + 3600;
                        document.getElementById("circle").style.transform=`rotate(${-random}deg)`;
                        random -= temp;
                        setTimeout(() => { 
                            swal("Chúc mừng!", "Bạn đã trúng " + present + "!", "success");
                            document.getElementById("layer").style.zIndex = "-1";
                        }, 11000);
                        codeUsed.push(name);
                        localStorage.setItem(storageKey, JSON.stringify(codeUsed));
                    }
                    else swal("Không hợp lệ!","Bạn đã sử dụng mã này rồi!","error");
                }
            }
            if (checkCorrectCode == false) swal("Mã không tồn tại!","Mã bạn vừa nhập không tồn tại.","error");
        }
    });
}
document.getElementById("circle").addEventListener("click", () => {
    check();
});
