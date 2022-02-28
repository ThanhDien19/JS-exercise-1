
// Bài 1: Tính tiền lương nhân viên
/*  
 nhập lương 1 ngày - số ngày làm - tổng lương
tổng lương = số ngày làm * lương 1 ngày
in ra tổng lương
*/
var salaryPerDay = 100000;
var dayWorking ;
var salaryTotal ;
dayWorking = 5;
salaryTotal = dayWorking * 100000;
console.log(salaryTotal);

// Bài 2:Tính giá trị trung bình
/*  
 nhập số thứ 1, thứ 2.. thứ 5
 giá trị trung bình = (số thứ 1 + số thứ 2 +...+ số thứ 5) / 5
 in ra giá trị trung bình
*/
var realNumber1;
var realNumber2;
var realNumber3;
var realNumber4;
var realNumber5;
realNumber1 = 5;
realNumber2 = 5;
realNumber3 = 5;
realNumber4 = 5;
realNumber5 = 5;
var average;
average =
  (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
console.log(average);

// Bài 3: Quy đổi tiền
/*  
 nhập giá quy đổi usd sang vnd 1usd = 23500
 nhập số tiền usd cần quy đổi 
 giá trị quy đổi = số tiền quy đổi * 23500
 in ra giá trị quy đổi
*/
var usdToVnd;
var usd;
usd = 23500;
usdToVnd = 2;
usdToVnd = usdToVnd * usd;
console.log(usdToVnd);

// Bài 4: Tính chu vi diện tích hình chữ nhật 
/*
 nhập độ dài cạnh dài hình chữ nhật 
 nhập độ dài chiều rộng hình chữ nhật 
 chu vi = (chiều dài + chiều rộng ) *2
 diện tích = chiều dài * chiều rộng
 in ra chu vi, diện tích
 */
var lengthRec;
var widthRec;
var perimeterRec;
var areaRec;
lengthRec = 2;
widthRec = 3;
perimeterRec = (lengthRec + widthRec) * 2;
areaRec = lengthRec*widthRec;
console.log(perimeterRec, areaRec);

// Bài 5: Tính tổng 2 ký số.
/*
nhập vào 1 số bất kỳ có 2 chữ số
hàng đơn vị = số bất kỳ % 10
hàng chục = math.floor ( số bất kỳ /10)
tổng 2 ký số = hàng chục + hàng đơn vị 
in ra tổng 2 ký số
 */
var number;
var units;
var dozens;
number = 86;
units = number % 10;
dozens = Math.floor(number / 10);
console.log(number,dozens,units);

