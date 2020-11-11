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