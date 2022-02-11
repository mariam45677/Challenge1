//window.alert("Hello");
//اكتب محتوةي جوه الصفحه بتاعتي بس مش هنستخدمها
//document.write()
// بعمل صفحه كانله
//document.createElement
// بطبع رسالة
//console.log("dsssdsd")
//E6 (ايكما بتحط معايير للمعلومات ررقم السادس ده رقم الاصدار يعني من الاخر بيطبع بكذا لغة تانية )
//console.log("MariamEssa");
/*console.log(typeof "MariamEssa");
// مصفوفة
console.log(typeof [10,20,30]);
console.log(typeof{name: 'os',age : 18 ,country: 'Egypt'});
//انشاءا متغير
var us = "mariam";
console.log(us);
*/
// هنا هيعطي ايرور
/*let a= 1
let a= 2
console.log(a);
// هنا هيعطي ايرور
const a= 1
const a= 2
console.log(a);
// هنا مفيش ايرور
var a= 1
var a= 2
console.log(a);
*/
// console.log("mariam essa 'ddddd'");
// console.log("mariam essa \"Name\"");
// console.log("mariam \
//  essa ");
//  console.log("mariam \n essa ");
//اعلي رقم امن مش بيطلع ارقام غريبة
// console.log(Number.MAX_SAFE_INTEGER);
// // اخر رقم
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE+876767576565);
// console.log((100).toString);
// console.log(100..toString);
//اقدر اتحكم بيها انا عاوزة ارجع كام رقم منهم
// console.log(100.666666.toFixed(2));
// console.log(parseInt("100"));
// //هل هوا عدد صحيح
// console.log(Number.isInteger("100"));
// console.log(Number.isNaN("Mariam"));
// console.log(Math.round(5.22));
// //هيقربه لاعلي قيمة
// console.log(Math.ceil(5.22));
// //هينزله لتحت خالص
// console.log(Math.floor(5.22));
// //اقل رقم
// console.log(Math.min(5,33,55,22,7,8,221));
// //اكبر رقم
// console.log(Math.max(5,33,55,22,7,8,221));
// //بتجيب الاس
// //اقل رقم
// let name ="mariam Wep";
// //بيرجعلي اول حرف
// console.log(name[1]);
// console.log(name.charAt(1));
// console.log(name.charAt(5));
// //احسب عدد العناصر الموجوده
// console.log(name.length);
// //بيشيل المسافات
// console.log(name.trim());
// //بيخلي الحروف كابتيل
// console.log(name.toUpperCase());

// //بيخلي الحروف اسمول
// console.log(name.toLowerCase());
//بيجيبلي هيا ف الانديكس الكام
// console.log(name.indexOf("Wep"));
// //بيبحث من الاخر مش من الاول
// console.log(name.lastIndexOf("m"));
// //بيقطع من اول الاندكس الرابع
// console.log(name.slice(4));
// console.log(name.slice(4,8));
// // بيكرر الكلام كام مرة
// console.log(name.repeat(5));
// //بيرجعهالي مصفوغة
// console.log(name.split());
// //لوحطتله قيمة بيقص لحد الرقم اللي عطهوله
// console.log(name.split(""));
// //بردو بيقص من اول الاندكس لحد الرقم اللي هعطهوله
// console.log(name.substr(0,6));
// console.log(name.substr(16));
// //هل الاسم ده موجود ولا لا
// console.log(name.includes("wep",8));
// //هل بيبدا بحرف ال m
// console.log(name.startsWith("m"));
// //هب البوزيشن اتنين بيبدا بحرف ال ام ولا لا
// console.log(name.startsWith("m",2));
// //هشوف اهر الجملة الللي كاتباها بتنتهي بحرف ال   اي ولا لا مممكن اكتب ال لينس كمان علشان احدد
// console.log(name.endsWith("e"));

//المصفوفة
//nested array
// let array =["ass","cs",["sdsd","sdsd"]];
// //console.log("Hello " + array[0]);
// //بيجيبلي الحرف التاني من الاندكس زيرو
// console.log( array[0][2]);
// //نوع المتغر ده اي
// console.log( Array.isArray(array));
//التحكم ف المصثوثة بالميثود
// let my= ["adfd","dfdfdf","edrerer","ererfdf"];
// console.log(my);
// //اضافة عنتصر
// my.unshift("");
// // اضافة بس ق النهاية
// my.push("");
// // بيمسح اول عنصر
// my.shift("");
// دي بتعد عناصر معينه ف الكصفوفة بعطيها استارت واند

// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(myFriends);
// console.log(myFriends.slice());
// console.log(myFriends.slice(1));
// console.log(myFriends.slice(1, 3));
// console.log(myFriends.slice(-3));
// console.log(myFriends.slice(1, -2));
// myFriends.splice(1, 2, "Sameer", "Samara");

// console.log(myFriends);
// اعمل كذا اريي مه بعض يعني كونكت
// let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let myNewFriends = ["Samar", "Sameh"];
// let schoolFriends = ["Haytham", "Shady"];
// // هنا بيطبع الاتنين اريي مع بعض وبيضيف عناصر
// let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);

// console.log(allFriends);

// //بيفصلي بينهم بعلامات
// console.log(allFriends.join());
// console.log(allFriends.join(""));
// console.log(allFriends.join(" @ "));
// console.log(allFriends.join("|"));
// console.log(allFriends.join("|").toUpperCase());
// كود لعمل منتجات وكتابتها ف التيمبليت عادي
// مثال ع الفور

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;

// document.write(`<h1>Show ${showCount} Products</h1>`);
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < colors.length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }
// while



let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let admins_count = 0;
myAdmins.length = myAdmins.indexOf("Stop");
document.write(`<div>We Have ${myAdmins.length} Admins</div>`);

document.write(`<hr/>`);

let leader = 0;
let teamN = 0;
let workerN = 0;
for (; leader<myAdmins.length; leader++){
  teamN++
  document.write(`<div>The admin For Team ${teamN} is ${myAdmins[leader]}</div>`);
  letter = myAdmins[leader][0];
  document.write(`<h3>Team Members:</h3>`);
  for (let workers = 0; workers<myEmployees.length; workers++){
    myEmployees[workers].startsWith(letter)
    ? document.write(`<p>- ${++workerN} ${myEmployees[workers]}</p>`)
    : workers = workers
  }
  workerN = 0
  document.write(`<hr/>`);
 
}