// Bài Tập 4: xem người dùng nhập vào là tam giác gì



document.getElementById("btnTriangle").onclick = function(){
    var edge1 = parseInt(document.getElementById("edge1").value);
    var edge2 = parseInt(document.getElementById("edge2").value);
    var edge3 = parseInt(document.getElementById("edge3").value);

   
    if (edge1==edge2 && edge2==edge3){
        // console.log("Tam giác đều")
        document.getElementById("txtThongBao4").innerHTML = "Tam giác đều";
    }else if ((edge1==edge2) || (edge1==edge3) || (edge2==edge3)){
        // console.log("Tam giác cân");
        document.getElementById("txtThongBao4").innerHTML = "Tam giác cân";
    }else if ((Math.pow(edge1,2)==Math.pow(edge2,2)+Math.pow(edge3,2)) || (Math.pow(edge2,2)==Math.pow(edge1,2)+Math.pow(edge3,2)) || (Math.pow(edge3,2)==Math.pow(edge2,2)+Math.pow(edge1,2))){
        // console.log("Tam giác vuông");
        document.getElementById("txtThongBao4").innerHTML = "Tam giác vuông";
    }else if ((edge1 >= edge2+edge3) || (edge2 >= edge1+edge3) || (edge3 >= edge2+edge1)){
        document.getElementById("txtThongBao4").innerHTML = "3 cạnh trên không thể tạo tam giác";
    }else{
        document.getElementById("txtThongBao4").innerHTML = "Tam giác thường";
    }
}









