"use strict"
 ////Number.Methods

 
 //// parseFloat() ֆւնկցիան վերադարձնում է թվի ինչպես ամբողջ այպես ել իրական մասը

 {let a = 17.2;
 let b = parseFloat(a)};
 //console.log(b) = 17.2
  
 //եթե առժեքի միայն դիմացի մասն է թվայն իսկ մնացացը տողայօն տիպի է.ապա Number.parseFloat() ֆւնկցիայի օգնությամբ կարող ենք առանձնացնել թվային մասը

 {let a = "17.5km";
 let b = parseFloat(a)};
 //console.log(b) = 17.5

 ///parseInt() ֆունկցիան առանձնացնում է թվային արժեքի միայն ամբողջ մասը

 {let a = 17.2};
 //console.log(parseInt(a)) = 17

 /////եթե առժեքի միայն դիմացի մասն է թվայն իսկ մնացացը տողայօն տիպի է.ապա NUmber.parseInt() ֆունկցիայի օգնությամբ կարող ենք առանձնացնել թվային արժեքի ամբողջ մասը

 {let a = "17.5km"};
 //console.log(parseInt(a)) = 17

 /// toFixed-ը թույլ է տալօս սահմանել ստորակետից հետո ընկաց տվերի քանակը

 {let a = 17.826124;
 let b = 17};
 //console.log(a.toFixed(1)) = 17.8
//console.log(b.toFixed(2)) = 17.00


//toPrecision -ը նման է toFixed-ին,սակաըն սահմանում է ոչ թե միայն ստորակետից հետո ընկած թվերի քանակը,աըլ ամբողջությամբ

{let a = 147.49};
//console.log(a.toPrecision(3)) = 147
//console.log(a.toPrecision(10)) = 147.4900000


///toString-ը թվային տիպի արժեքը դարձնում է տողային

{let a = 525.2;
let b = a.toString()};
//console.log(typeof b) = string

let a = "Don't give up! You can do whatever You want"
let b = a.slice(a.indexOf("Y"),2);
console.log(b);