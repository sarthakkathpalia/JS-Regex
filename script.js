function validate(){
    let username = document.getElementById("uname").value;
    let regx = /E00/i;
    if(regx.test(username)){
        alert("Valid Username")
    }
    else{
        alert("Invalid Username")
        document.getElementById("lbluser").style.visibility="visible"
    }
}