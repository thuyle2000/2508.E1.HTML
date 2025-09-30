function saveAccount(user, pass){
    localStorage.setItem("uid", user);
    localStorage.setItem("pwd", pass);
}


function checkAccount(user, pass){
    let uid = localStorage.getItem("uid");
    let pwd = localStorage.getItem("pwd");

    return (uid==user &&  pwd==pass)
}

function removeAccount(){
    localStorage.removeItem("uid");
    localStorage.removeItem("pwd");
}