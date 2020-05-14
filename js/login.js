document.querySelector(".login").addEventListener("click",
function(){
    alert("로그인 성공");
});

function press(){
    var msgId=document.querySelector("#id").value;
    var msgPwd=document.querySelector("#pwd").value;
    if(msgId.length&&msgPwd.length>0){
        document.querySelector(".login").style.backgroundColor="blue";
    }else document.querySelector(".login").style.backgroundColor="rgba(0,149,246,.3)";
}

