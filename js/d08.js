var ds = ["Chau", "Anh","Tu", "Long","Nghi","Tin","Phat","Hoang","Thong","Duc"];

function display(){
    let html = "<ul>";

    for(let i = 0; i < ds.length; i++){
        // html += "<li>" + ds[i] + "</li>";
        html += `<li> ${ds[i]} </li>`;
    }
    html += "</ul>";

    document.getElementById("DanhSach").innerHTML = html;
}

function fn_factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }
    // return n * fn_factorial(n - 1);
    let kq = 1;
    for(let i = 2; i <= n; i++){
        kq *= i;
    }
    return kq;
}