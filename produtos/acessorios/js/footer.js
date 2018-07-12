function drop(ver){
    if(ver == "fechar"){
        document.getElementById('rodape').style.left = "-97%";
        document.getElementById('link').style.float = "right";
        document.getElementById('link').href = "javascript:drop('abrir')";
        document.getElementById('link').innerHTML = ">";
    }if(ver == "abrir"){
        document.getElementById('rodape').style.left = "0px";
        document.getElementById('link').style.float = "left";
        document.getElementById('link').href = "javascript:drop('fechar')";
        document.getElementById('link').innerHTML = "<";
    }
}