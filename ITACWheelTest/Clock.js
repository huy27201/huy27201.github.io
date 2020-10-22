var present, temp;
var PGG = 10, HHIT = HHK20 = 50; 
var random = 0;                                         
var checkCharacter, checkCorrectCode;                   //biến kiểm tra mã
var storageKey = 'codeUsed';
var dataString = localStorage.getItem(storageKey);
var codeUsed;                                       //Array chứa các mã đã sử dụng
if (dataString) codeUsed = JSON.parse(dataString);
else codeUsed = [];
var code = [];
    fetch('Code.txt')                               //Load array chứa mã
      .then(response => response.text())
      .then(data => {
          code = data.split('\n');
      });
function check() {                                  //kiểm tra mã và quay
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
                        do {
                            var value = Math.floor(Math.random() * 100); 
                            if (value == 0 || value == 1)
                            {
                                temp = 295;
                                present = "Dây đeo Black";
                                break;
                            } 
                            else if ((value <= 33) && HHIT > 0) {
                                let randomPiece = Math.floor(Math.random() * 10);
                                if (randomPiece < 4) temp = 70;
                                else temp = 250;
                                present = "Huy hiệu ITAC";
                                HHIT--;
                                break;
                            } 
                            else if ((value <= 51) && (PGG > 0)) {
                                let randomPiece = Math.floor(Math.random() * 10);
                                if (randomPiece < 4) temp = 25;
                                else temp = 160;
                                present = "Phiếu ưu đãi 20%";
                                PGG--;
                                break;
                            } 
                            else if ((value <= 99) && (HHK20 > 0)) {
                                let randomPiece = Math.floor(Math.random() * 10);
                                if (randomPiece < 3) temp = 115;
                                else if (randomPiece < 6) temp = 205;
                                else temp = 340;
                                present = "Huy hiệu K20";
                                HHK20--;
                                break;
                            } 
                        } while (1);            
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