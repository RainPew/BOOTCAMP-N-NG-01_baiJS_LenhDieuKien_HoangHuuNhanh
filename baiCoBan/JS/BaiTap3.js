// Bài Tập 3: Đếm có bao nhiêu số lẻ và chẵn


document.getElementById("btnCount").onclick = function(){
    var numInt4 = parseInt(document.getElementById("numInt4").value);
    var numInt5 = parseInt(document.getElementById("numInt5").value);
    var numInt6 = parseInt(document.getElementById("numInt6").value);
    var even = 0;

    if (numInt4 % 2 == 0){
        even += 1;
    }
    if (numInt5 % 2 == 0){
        even += 1;
    }
    if (numInt6 % 2 == 0){
        even += 1;
    }
    // console.log(even);
    var odd = 3 - even;
    
    document.getElementById("txtThongBao3").innerHTML = "có " + even + " số chẵn và " + odd + " số lẻ";

}











