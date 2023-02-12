"use strict"

////Array Methods

////Array.from(x)

//Այս ֆունկցիան ստանում է զանգված՝ հիմնվելով x տվյալի վրա

{ let arr = Array.from("ABCD") };
//console.log(arr)=["A","B","C","D"]

///Arraay.of(...x)

///այս ֆունկցիան ստանում է զանգված հիմնվելով փոխանցված պարամետրերի վրա,որոնք կարող են լինել տարբեր տիպի

{ let arr = Array.of("ABC", 4, 15, true) };
//console.log(arr)= ["ABC",4,15,true]

///Array.isArray(x)

//Այս ֆունկցիան ստուգում է արդյոք փոխանցված x արժեքը զանգված է թե ոչ և ստանում է տրմաբանական տիպի արժեք

//console.log(Array.isArray("ABC"))=false
//console.log(Array.isArray(["A","B","C"]))=true

///concat()

//Այս ֆունկցիայի օգնությամբ կարող ենք իրար միցնել մի քանի զանգված

{
    let arr = ["a", "b", "c"];
    let arr_1 = ["d", "e", "f"]
};
//console.log(arr.concat(arr_1))=["a","b","c","d","e","f"]

///  at(index) վերադաձնում է տվյալ index-ում գտնվող տարրը,իսկ եթե index-ը բացասական է ապա հաշվում է վերջից

{ let arr = ["a", "b", "c", "d"] };
//console.log(arr.at(1))="b"
//console.log(arr.at(-1))="d"

///pop() ֆունկցիայի օգնությամբ զանգվացի վեռյից հանում ենք վերջին տարրը

{
    let arr = [1, 2, 3, 4];
    let arr_1 = arr.pop()
};
//console.log(arr_1) = 4
//console.log(arr) =[1,2,3]

/// push() ֆունկցիան նախատեսված է զանգվածի վերջում 1 տարր ավելացնելու համար

{
    let arr = [1, 2, 3, 4];
    arr.push(5)
};
//console.log(arr)=[1,2,3,4,5]

///shift() ֆունկցիան նախատեսված է զանգվածի սկզբից մեկ տարր հանելու համար

{
    let arr = [1, 2, 3, 4];
    let arr_1 = arr.shift()
};
//console.log(arr_1)=1
//console.log(arr)=[2,3,4]

///unshift() ֆունկցիան նախատեսված է զանգվածի սկզբում նոր տարր ավելացնելու համար

{
    let arr = [1, 2, 3, 4];
    arr.unshift(0)
};
//console.log(arr)=[0,1,2,3,4]

///slice(a,b) ֆունկցիան նախատեսված է զանգվածից ինչ-որ ենթազանգված անջատելու համար,որտեղ a-ն սկզբնական դիրքն է իսկ b-ն վերջնական

{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let arr_1 = arr.slice(2, 4)
};
//console.log(arr_1)=[3,4]

///find(fn) ֆունկցիան որպես պարամետր ստանում է մեկ այլ ֆունկցիա և վերադարձնում է զանգվածի առաջին տարրը որը բավարարում է ֆունկցիային պայմանին
/*let fn = function(el,index,list){
    if(el.endsWith("n")){
        return el
    }
}*/
{
    let arr = ["Anna", "Armen", "Karen"];
    let name = arr.find(el => el.endsWith("n"))
};
//console.log(name)="Armen"

{
    let arr = [1, 2, 3, 4, 5,];
    let number = arr.find(el => el > 2)
};
//console.log(number)=3

/// findIndex(fn) ֆունկցիան աշխատում է find()-ի պես,սակայն վերադարձնում է ոչ թե ֆունկցիայի պայմանին բավարարող առային տարրը,այլ առաջին index-ը

{
    let arr = ["Anna", "Armen", "Karen"];
    let name = arr.findIndex(el => el.endsWith("n"))
};
//console.log(name)=1

///includes(x) ֆունկցիան ստուգում է արդյոք զանգվածում կա տրված արժեքը և վերադարձնում է տրամաբանական տիպի արժեք

{ let arr = ["Anna", "Armen", "Karen"] };
//console.log(arr.includes("Armen"))=true
//console.log(arr.includes("Poghos"))=false

/// indexOf(x,s) այս ֆունկցիան նույնպես փորձում է տեսնել արդյոք զանգվածում կա x տարրը,լինելու դեպքու վերադաձնում է տարրի index-ը
///  իսկ բացակայության դեպքում վերադարձնում է -1։ s-ով նշվում է այն դիրքը որտեղից սկսաց պետք է գործի ֆունկցիան

{ let arr = ["Anna", "Armen", "Karen", 12, 1, 15, 5, 1] };
//console.log(arr.indexOf("Armen"))=1
//console.log(arr.indexOf("Armne",3))=-1

///filter(fn)ֆունկցիան որպես պարամետր նույնպես ընդունում է մեկ այլ ֆունկցիա,և որպես նոր զանգված վերադարձնում է այն տարրերը որոնք բավարարում են ֆունկցիայի պայմանին
{
    let fn = function (el) {
        if (el.startsWith("A")) {
            return el
        }
    }
    let arr = ["Armen", "Anna", "Karen", "Sergey", "Ashot", "Gevorg"];
    //let arr_1 = arr.filter(el=>el.startsWith("A"));
    let arr_1 = arr.filter(fn)
}
//console.log(arr_1)=["Armen","Anna","Ashot"]

///map() ֆունկցիան թույլ է տալիս մեզ ինչպես ելքագրել մեր զանգվածի բոլոր տարրերը,այնպես էլ տալիս է հնարավորություն կատարել փոփոխութթյուններ

{
    let arr = ["armen", "ashot", "karen", "anna", "marine"]
    let arr_1 = arr.map(el => el = el.toUpperCase())
};
//console.log(arr_1) =["ARMEN","ASHOT","KAREN","ANNA","MARINE"]


///.sort(a,b) նախատեսված է զանգվածը աճման կամ նվազման կարգով սորտավորելու համար

//թվայն տարրեր ունեցող զնգվածի աճման կարգով դասավորում
{
    let arr = [10, 2, 7, 6, 5, 8, 12, 25]
    let arr_2 = arr.sort((a, b) => a - b)
};
//console.log(arr_2)=[2,5,6,7,8,10,12,25]

//թվայն տարրեր ունեցող զնգվածի նավազման կարգով դասավորում
{
    let arr = [10, 2, 7, 6, 5, 8, 12, 25];
    let arr_2 = arr.sort((a, b) => b - a)
};
//console.log(arr_2)=[25, 12, 10, 8, 7, 6, 5, 2]


///Տողային տիպի տարրեր ունեցող զանգվացի այբոնական աճման կարգով սորտավորում
{
    let arr = ["Armen", "Arman", "sergey", "Karen", "Frunz", "Nvard"]
    let arr_2 = arr.sort((a, b) => a.localeCompare(b))
};
//console.log(arr_2)=['Arman', 'Armen', 'Frunz', 'Karen', 'Nvard', 'sergey']

///Տողային տիպի տարրեր ունեցող զանգվացի այբոնական նվազման կարգով սորտավորում

{
    let arr = ["Armen", "Arman", "sergey", "Karen", "Frunz", "Nvard"]
    let arr_2 = arr.sort((a, b) => -a.localeCompare(b))
};
//console.log(arr_2)=['sergey', 'Nvard', 'Karen', 'Frunz', 'Armen', 'Arman']


///.splice ֆունկցիան հնարավորություն է տալիս զանկվածի ցանկացած դիրքից ավելացնել կամ հեռացնել տարր

{let a = [1,2,5,6,7,8,10];
let v=a.splice(2,0,3,4) &&a.splice(8,0,9)}
//console.log(a);


