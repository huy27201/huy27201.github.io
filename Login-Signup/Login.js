'use strict'
var see=false;
class user {
    constructor(item) {
        this.name = item[0].value;
        this.email = item[1].value;
        this.phone = item[2].value;
        this.username = item[3].value;
        this.password = item[4].value;
    }
}

let datajson = {
    account: [
        {
            name: "Nguyen Gia Huy",
            email: "nguyengiahuy27201@gmail.com",
            phone: "0779669006",
            username: "huy27201",
            password: "giahuy2001"
        }, {
            name: "Nguyen Van A",
            email: "nguyenvana@gmail.com",
            phone: "0987654321",
            username: "1234567",
            password: "1234567"
        }
    ]
}
var data=datajson.account;
function seen(item)
{
    if (see==false) 
    {
        item.classList.add("fa-eye-slash");
        item.classList.remove("fa-eye");
        document.getElementById("password").type="text";
        see=true;
    }
    else {
        item.classList.add("fa-eye");
        item.classList.remove("fa-eye-slash");
        document.getElementById("password").type="password";
        see=false;
    }
}
function submit()
{
    var username=document.getElementsByClassName("login-input")[0].value;
    var password=document.getElementsByClassName("login-input")[1].value;
    var check=false;
    if ((username==="") && (password===""))
        {
            swal("Unsuccessful!", "You must fill in your username and password", "error");
            return;
        }
    else if ((username==="") && (password!==""))
        {
            swal("Unsuccessful!", "You must fill in your username", "error");
            return;
        }
    else if ((username!=="") && (password===""))
        {
            swal("Unsuccessful!", "You must fill in your password", "error");
            return;
        }
    else {
        data.forEach(item => {
            if ((username===item.username) && (password===item.password))
            {
                check=true;
                swal("Successful!", "", "success");
                return;
            }
        }); 
        if (check==false) {
            swal("Unsuccessful!", "Your username or password is incorrect.", "error");
            return;
        }
    }
}
function enterCheck()
{
    if (event.keyCode==13)
    {
        submit();
    }
}
function Register() {
    let registerInfo=document.getElementsByClassName("SU-input");
    if (registerInfo[4].value===registerInfo[5].value) {
        let info = new user(registerInfo);
        datajson.account.push(info);
        console.log(datajson.account);
    }
    else {
        swal("Unsuccessful!", "You must confirm right password", "error");
    }
}

console.log(datajson.account);