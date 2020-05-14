
const inputComment = document.getElementById("inputMsg"); 
const btnClick = document.querySelector(".sendBtn");  

btnClick.addEventListener('click', function(){ 
    
    if(inputComment.value!==""){   
    const makeDiv = document.createElement('div');  
    makeDiv.className="main_comment_div" 

    const makeSpan = document.createElement('span');
    makeSpan.className = "comment_span"; 
    
    const makeSpan2 = document.createElement('a'); 
    makeSpan2.className = "comment_id";
    makeSpan2.innerHTML = "jihwanny  "; 
    
    const getComment = document.getElementById('inputMsg').value;   
    const textNode = document.createTextNode(getComment); 
    makeDiv.appendChild(makeSpan);
    makeDiv.appendChild(makeSpan2);
    makeSpan2.appendChild(textNode);
    
    document.body.querySelector(".main_comment").appendChild(makeDiv);
    inputComment.value=""
    const uploadButton = document.querySelector(".sendBtn");
    uploadButton.style.color = "lightblue";

}});

































