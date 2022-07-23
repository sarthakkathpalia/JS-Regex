function validate(){
    let username = document.getElementById("uname").value;
    let regx = /^(1\s?)?(\d{3}|(\(\d{3}\)))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    if(regx.test(username)){
        document.getElementById("lbluser").innerHTML="Valid"
        document.getElementById("lbluser").style.visibility="visible"
        document.getElementById("lbluser").style.color='white'
        // alert("Valid Username")
    }
    else{
        // alert("Invalid Username")
        document.getElementById("lbluser").innerHTML="Invalid"
        document.getElementById("lbluser").style.visibility="visible"
        document.getElementById("lbluser").style.color='black'
    }
}