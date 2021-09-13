var present, temp;
var PGG = 10, HHIT = HHK20 = 50, BLACK = 1;              //biến số lượng quà
var random = 0;                                         
var checkCharacter, checkCorrectCode;                   //biến kiểm tra mã
var storageKey = 'codeUsed';
var dataString = localStorage.getItem(storageKey);
var codeUsed;                                       //Array chứa các mã đã sử dụng
if (dataString) codeUsed = JSON.parse(dataString);
else codeUsed = ["9p07qEBLXU", "GyzkkMa5Rh", "tIWq395MbU", "wXlnllx3O6", "lYRwjnmMyV", "ipu8VNXttB", "fjs79RLnjc", "swTlUhkAzM", "mEin8fcSeV", "eNjzvTA8bj", "Z44MMVYFft", "r3pLRZ1Gzw"];
localStorage.setItem(storageKey, JSON.stringify(codeUsed));
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
            ext: "OK",
        },
    })
    .then(name => {
        if (name != null) {
            if (name.length == 0) {
                swal("Không có mã!", "Bạn phải nhập mã.", "error");
            }
            else if (name.length != 10) {   //Kiểm tra độ dài mã 10 kí tự
                swal("Mã không tồn tại!", "Mã bạn vừa nhập không tồn tại.", "error");
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
                                var value = Math.floor(Math.random() * 100); //random number between 0 - 99
                                if ((value == 0 || value == 1) && (BLACK)) //2%
                                {
                                    temp = 295; //rotate 295deg
                                    present = "Dây đeo Black";
                                    BLACK--;
                                    break;
                                } 
                                else if ((value <= 33) && HHIT > 0) { //32%
                                    let randomPiece = Math.floor(Math.random() * 10);
                                    if (randomPiece < 4) temp = 70; //rotate 70deg
                                    else temp = 250; //rotate 250deg
                                    present = "Huy hiệu ITAC";
                                    HHIT--;
                                    break;
                                } 
                                else if ((value <= 51) && (PGG > 0)) { //18%
                                    let randomPiece = Math.floor(Math.random() * 10);
                                    if (randomPiece < 4) temp = 25; //rotate 25deg
                                    else temp = 160; //rotate 160deg
                                    present = "Phiếu ưu đãi 20%";
                                    PGG--;
                                    break;
                                } 
                                else if ((value <= 99) && (HHK20 > 0)) { //48%
                                    let randomPiece = Math.floor(Math.random() * 10);
                                    if (randomPiece < 3) temp = 115; //rotate 115deg
                                    else if (randomPiece < 6) temp = 205; //rotate 205deg
                                    else temp = 340; //rotate 340deg
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
                        else swal("Không hợp lệ!", "Bạn đã sử dụng mã này rồi!", "error");
                    }
                }
                if (checkCorrectCode == false) swal("Mã không tồn tại!", "Mã bạn vừa nhập không tồn tại.", "error");
            }
        }
    });
}
document.getElementById("circle").addEventListener("click", () => {
    if (BLACK === 0 && HHIT === 0 && HHK20 === 0 && PGG === 0)  //kiểm tra còn quà không
        {
            swal("Hết quà rồi :(", "Hẹn gặp bạn tại chương trình lần sau nhé :')", "warning");
        } 
    else check();
});
