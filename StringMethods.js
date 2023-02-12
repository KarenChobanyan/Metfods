"use strict"

              ////// Methods of String
                                                  /// String.length

/// Տողն էլ զանգվածի նման ունի իր length-ը

{ let a = "hello world" };
///console.log(a.length)= 11

/// Կարող ենք առանձնացնել նաև տողի ցանկացաց [index],

{
    let a = "hello world";
    let b = a[4]
};
///console.log(b)= "o"

                                                  /// String.toAppercase

/// .toUpperCase-ի օգնությամբ մենք կարող ենք տողի տառերը ամբողջությամբ դարձնել մեծատառ

{
    let a = "hello world";
    let b = a.toUpperCase()
};
///console.log(b)= "HELLO WORLD"

                                                 ///String.toLowCase()

/// .toLowase-ի օգնությամբ մենք կարող ենք տողի տառերը ամբողջությամբ դարձնել փոքրատառ

{ let a = "HELLO WORLD" };
//console.log(a.toLowerCase()) = hello world

////Method .split()

// Այս մեթոդը թույլ է տալիս մեզ բաժանել String-ը մաասերի և դարձնել այն որպես նոր,առանձին զանգված
//  ()-ի մեջ գրվում է այն symbol-ը կամ տաոը ըստ որի մենք ուզում ենք բաժանել տեքստը

{
    let a = "hello world";
    let b = a.split(" ");
}///// նշելով դատարկ բացատ տեքստը բաժանում ենք ըստ եղած բացատների
////console.log(b)  = {"hello", "world"}

////Հիմա նույն տեքստը բաժանենք ըստ "l" տառի և քանի որ ունենք 3 "l" տեքստում,կստանանք զանգված կազմվաց 3 մասից։{"he"," ","o wor","d"}

{
    let a = "hello world";
    let b = a.split("l");
}
///console.log(b) =  {"he"," ","o wor","d"}

////իսկ եթե փորցենք բաժանել նույն տեքստը ըստ այնպիսի սիմվոլի կամ տառի որը չկա տեքստում,արդյունքում կստանանք նույն տեքստը առանց փոփոխության

{
    let a = "hello world";
    let b = a.split("z");
}
//console.log(b)= {"hello world"}

                                             //// Method subString()
/// .substringi օգնույամբ մենք կառօղ ենք անջատտել և առանձնանել տողից ցանկացած հատված։
/// ()-ի մեջ պետք է նշվի սկզբնական և վերջնական դիրքերը(index) այն հատվացի որն ուզում ենք առանձնացնել։

///Առանձնացնենք "hello" հատվածը "hello word" տեքստից

{
    let a = "hello word";
    let b = a.substring(0, 5)
};/// 0-ն սկզբնական դիրքն է որը ներառվում է առանձնացվող հատվածի մեջ,իսկ 5-ը վերջնական դիրքն է,որը սակայն չի ներառվում 
///console.log(b)="hello"

///իսկ եթե ()-ի մեջ նշենք մեկ index, այդ դեպքում առանձնացվող հատվածը կլինի տողի նշված դիրքից մինչև վերջ ընկնող հատվածը։

{
    let a = "hello world";
    let b = a.substring(4)
};
///console.log(b)="o world"

                                         ////Strring.substr(a,n)

//Սա առանձնացնում է տեքստի a դիրքից n սիմվոլ         

{ let a = "hello world" };
//console.log(a.substr(0,2)) = he

///String.slice(a,b)

//Այս ֆունկցիան առանձնացնուն և վերադարձնում է տեքստում a-ից b ընկաց հատվածը.և կարող է ընդունել նաև բացասական արժեք (հաշվելով վերջից)

{ let a = "hello world" };
//console.log(a.slice(1,4)) = ell
//console.log(a.slice(6,-2)) = wor

                                           ///// .charAt(index)

///Այս ֆւնկցիան վերադարնում տողի կոնկրետ index ունեցող սիմվոլ։

{ let a = "hello world" };
///console.log(a.charAt(2)) = "l";

/// Եթե տվյալ ինդեքսումմ սիմվոլ չկա,ապա վերադաձնում է դատարկ տող;

{ let a = "hello world" };
///console.log(a.charAt(45)) =                      ;

                                               ////String.concat
///Նախատեսված է մի քանի տարբեր տեքստե իրար միացնելու համար

{
    let text = "life is awesome";
    let text_2 = "enjoy it";
    let text_3 = text.concat(" ,", text_2)
};
///console.log(text_3) = lifis is awesome, enjoy it;

                                               //// String.endsWith()

/// Սա boolean տիպի օբյեկտ  և վերադարձնում է true կամ  false,կախված արդյոք տողոը ավարտվում է  նշված սիմվոլով թե ոչ

{ let a = "life is awesome!" };
///console.log(a.endsWith("awesome!")) = true;
//console.log(a.endsWith("!")) = true;
//console.log(a.endsWith("awesome")) = false;

                                                  ////String.startsWith()

/// Սա boolean տիպի օբյեկտ  և վերադարձնում է true կամ  false,կախված արդյոք տողոը ավարտվում է  նշված սիմվոլով թե ոչ

{ let a = "life is awesome" };
//console.log(a.startsWith("life")) = true
//console.log(a.startsWith("l")) = true
//console.log(a.startsWith("L")) = false

                                                 //// String.includes()

/// Սա boolean տիպի օբյեկտ  և վերադարձնում է true կամ  false,կաղված արդյոք տողում կա նշված սիմվոլը թե ոչ              

{ let a = "life is awesome" };
//console.log(a.includes("fe")) = true;
//console.log(a.includes("so"))  = true;
//console.log(a.includes("sa")) = false;

                                          /// String.indexOf()
                                       // String.lastIndexOf()

/// Առաջինը վերադարձնում է տվյալ տողի մեջ տրված սիմվոլի առաջին հանդիպման index-ը, և -1 սիմվոլի բացակայության դեպքում
/// Երկրորդը վերադարձնում է տվյալ տողի մեջ տրված սիմվոլի վերջին հանդիպման index-ը, և -1 սիմվոլի բացակայության դեպքում

{ let a = "Life is awesome!So you need live an awesome life!" };
//console.log(a.indexOf("f")) = 2
//console.log(a.indexOf("awesome")) = 8
//console.log(a.indexOf("!")) = 15

{ let a = "Life is awesome!So you need live an awesome life!" };
//console.log(a.lastIndexOf("f")) = 46
//console.log(a.lastIndexOf("awesome")) = 36
//console.log(a.lastIndexOf("!")) = 48
//console.log(a.lastIndexOf("wa")) = -1

                                  // String.localCompare()

///Սա համեմտում է տողային տիպի 2 տվյալ, նույնը լինելու դեպքում վերադարձնում է 0, առաջինի այբենական կարգով ավելի բարձր լինելու դեպքում վերադարձնում է -1
// իսկ երկրորդի այբենական կարգով ավելի բարձր լինելու դեպքում վերադարձնում է 1

{ let a = "hello" };
//console.log(a.localeCompare("hello")) = 0
//console.log(a.localeCompare("hello!")) = -1
//console.log(a.localeCompare("awesome")) = 1

                                 ///// String.repeat()

// Սա կրկնում է տեքստը տրված քանակով

{
    let a = "hello";
    let b = a.repeat(4)
};
//console.log(b); = hellohellohello

                                       ////String.replace()
                                       //String.replaceAll()

///Առաջինը փոխարինում է տեքստի առաջին հանդիպած հատվածը նորով
/// Երկրորդը փոխարինում է տեքստում հանդիպող նշված բոլոր հատվածները նորով 

{ let a = "Life is awesome!So you need live an awesome life!" };
//console.log(a.replace("awesome","perfect")) = Life is perfet!So you need live an awesome life!
//console.log(a.replaceAll("awesome","perfect")) =Life is perfect!So you need live an perfect life!

                                       ////String.serch()

//սա շատ նման է indexOf() -ին,և վերադարձնում է տեքստում տված ենտատեքստի առաջին հանդիպման ինդեքսը, և -1 տեքստում ենտատեքստի բացակայության դեպքում

{ let a = "Life is perfect!So you need live an perfect life!" };
//console.log(a.search("per")) = 8
//console.log(a.search("pr")) = -1

                                  //String.trim()

//Սա տեքստի սկզբից և վերջից հանում է բացատները

{ let a = "    hello world " };
//console.log(a.trim()) = "hello world"

//String.trimStart()-ը տեքստի միայն դիմացից է հանում բացատը
//String.trimEnd()-ը  տեքսստի միայն վերջից է հանում բացատը

{ let a = "  hello world  " };
//console.log(a.trimStart()) ="hello world  "
//console.log(a.trimEnd()) = "  hello world"

//String.padEnd(n,s)

//Այս ֆունկցիան տեքստի սկզբից ավելացնում է s սիմվոլը այնքան մինչև տեքստի length-ը դառնա n

{ let a = "hello world" };
//console.log(a.padEnd(16,"~")) = "hello world~~~~~"

//String.padStart()-ի դեպքուն տողի սկզբից է ավելացվում s սիմվոլը այնքան.մինչև տողի երկարությունը դառնա n

{ let a = "hello world" };
//console.log(a.padStart(16,"~")) = "~~~~~hello world"