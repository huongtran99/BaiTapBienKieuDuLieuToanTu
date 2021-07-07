/*Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
Sau đó hiển thị điểm trung bình và tổng của những điểm này.*/

let vat_ly = parseInt(prompt("Nhập điểm vật lý"));
let hoa_hoc = parseInt(prompt("Nhập điểm hóa học"));
let sinh_hoc = parseInt(prompt("Nhập điểm sinh học"));

let tongdiem = vat_ly + hoa_hoc + sinh_hoc;
let diemtrungbinh = tongdiem/3;
document.write("Điểm trung bình 3 môn là: " + diemtrungbinh + "<br>");
document.write("Điểm tổng của 3 môn là: " + tongdiem +"<hr>");



/*Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).
    [Hướng dẫn: C/5 = (F-32)/9]*/

let C = parseInt(prompt("Nhập vào độ C"));
let F =  (9 * C)/5 +32;
document.write(C + " Độ C" + " =" + F + " Độ F"+ "<hr>");


/*Bài 3: Viết chương trình tính diện tích hình tròn*/

let r = parseInt(prompt("Nhập vào bán kính hình tròn"));
let area = Math.PI * r * r;
document.write("Diện tích hình tròn là: " + area + "<hr>");


/*Bài 4: Viết chương trình chu vi hình tròn*/

let chu_vi = 2 * r *Math.PI;
document.write("Chu Vi hình tròn là: " + chu_vi);
