//  Bài Tập 1: sắp xếp số theo thứ tự tăng dần
var a;

document.getElementById("btnSort").onclick = function(){
    var num1 = parseInt(document.getElementById("numInt1").value);
    var num2 = parseInt(document.getElementById("numInt2").value);
    var num3 = parseInt(document.getElementById("numInt3").value);

    if (num1 >= num2){
        a = num1;
        num1 = num2;
        num2 = a;
    }
    
    if (num2 >= num3){
        a = num2;
        num2 = num3;
        num3 = a;
    }

    if (num1 >= num2){
        a = num1;
        num1 = num2;
        num2 = a;
    }
    document.getElementById("txtThongBao1").innerHTML = "Thứ tự tăng dần là: " + num1 + "; " + num2 + "; " + num3;
}                                                               