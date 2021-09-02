// Bài Tập 2 : viết lời chào khi người dùng nhập vào
document.getElementById("btnAsk").onclick = function(){
    var inputAsk = document.getElementById("inputAsk").value;

    switch (inputAsk){
        case "Bố":
            document.getElementById("txtThongBao2").innerHTML = "Xin Chào Bố";
            break;
        case "mẹ":
            document.getElementById("txtThongBao2").innerHTML = "Xin Chào Mẹ";
            break;
        case "anh trai":
            document.getElementById("txtThongBao2").innerHTML = "Xin Chào Anh Trai";
            break;
        case "em trai":
            document.getElementById("txtThongBao2").innerHTML = "Xin Chào Em Gái";
            break;
        default: 
            // console.log("không hợp lệ");
            document.getElementById("txtThongBao2").innerHTML = "Không Hợp Lệ";
    }
}







