// function belgiSoni(word) {
//   let count = 0;
//   for (let i in word) {
//     count++;
//   }
//   return count;
// }
// console.log(belgiSoni(prompt("So'z kiriting: ")));

// String Metodlari

// console.log("tetx".charAt(9)); Indexni aniqlab beradi
// console.log("tetxt".concat(123)); Bir biriga qoshib beradi
// console.log("tetx".replace("t", "!")); Malumotni almashtirib beradi
// console.log("tetx".split(""));
// console.log("text".substr(0, 2)); //substr(dan: raqam, uzunlik?: raqam | aniqlanmagan): string
// Istalgan pastki qatorning boshlang'ich pozitsiyasi. Satrdagi birinchi belgining indeksi nolga teng
// console.log("text".substring());
// substring(boshlash: raqam, tugatish?: raqam | aniqlanmagan): string
// Pastki qatorning boshlanishini ko'rsatadigan nolga asoslangan indeks raqami.
// console.log("text".trim());
// trim(): string
// Satrdan bosh va keyingi oq boʻshliq va qator terminator belgilarini olib tashlaydi.
// console.log("tetx".search());

// let object = {
//     John: 200,
//     John: 200,
//     John: 200,
// }
// // Object uchun for
// for(i in object) {
//     console.log(object[i]);
// }

// ------------UY ISHI------------

// 1. isEmpty() nomli funksiya yozing. Unga Object berib yuborganimda ichida propertylari bo’lsa false, hech qanday propertysi bo’lmasa true qaytarsin. a. Yordam: Object.keys
// function isEmpty(obj) {
//   let keys = Object.keys(obj);
//   return keys.length === 0;
// }
// let obj1 = {};
// console.log(isEmpty(obj1));
// let obj2 = { a: 1, b: 2 };
// console.log(isEmpty(obj2));

// 2. Quyida berilgan Object dagi shaxslar daromadlarini jamini xisoblab chiqaruvchi funksiya yozing. Funksiya PURE (toza) bo’lishi shart! let salaries = { John: 100, Ann: 160, Pete: 130 }
// function calculateTotalIncome(salaries) {
//   let totalIncome = 0;
//   for (let person in salaries) {
//     totalIncome += salaries[person];
//   }
//   return totalIncome;
// }
// let salaries = { John: 100, Ann: 160, Pete: 130 };
// console.log(calculateTotalIncome(salaries));

// 3. Obyekt propertylarini 2ga ko’paytiradigan funksiya yozing. Funksiya PURE (toza) bo’lishi shart! a. Yordam: typeof // funksiyani chaqirishdan avval let menu = { width: 200, height: 300, title: "My menu" }; multiplyNumeric(menu); // chaqirishdan keyin menu = { width: 400, height: 600, title: "My menu" };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] === "number") {
//       menu[key] *= 2;
//     }
//   }
// }
// let menu = { width: 200, height: 300, title: "My menu" };
// multiplyNumeric(menu);
// console.log(menu);

// 4. let arr = [5, 2, 1, -10, 8]; ifodasini teskari tartibda sortlang

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);
