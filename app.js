class Person {
    constructor(ad, soyad, yas) {
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
    }
}

function arrayYaradin(secim) {
    let arr = [];
    if (secim.toLowerCase() === "he") {
        let n = parseInt(prompt("Neçə nəfər əlavə etmək istəyirsiniz?"));
        for (let i = 0; i < n; i++) {
            let ad = prompt((i+1) + ". kişinin adi:");
            let soyad = prompt((i+1) + ". kişinin soyadi:");
            let yas = parseInt(prompt((i+1) + ". kişinin yaşini sorusun:"));
            let person = new Person(ad, soyad, yas);
            arr.push(person);
        }
    } else if (secim.toLowerCa*se() === "yox") {
        console.log("Array oluşturulmadi.");
    } else {
        console.log("Yanliş seçim!");
    }
    return arr;
}

let secim = prompt("Array elementləri yaratmaq istəyirsiniz? (he/yox)");
let Arr = arrayYaradin(secim);

if (Arr.length > 0) 
    console.log("Yaradilmiş Array:");
    Arr.forEach((person, index) => {
        console.log((index+1) + ". " + person.ad + " " + person.soyad + ", " + person.yas + " yaşinda");
    })
  