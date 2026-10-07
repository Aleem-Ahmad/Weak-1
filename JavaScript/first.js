// JavaScript | WebDevelopment Game
// Disclaimer : ~`This File is going to be the best ever revision sheet`

// ==========================================================================================================

// ====>The basics
// Output    -> console.log("Hello JavaScript!"); // Output: Hello JavaScript!
// Variables -> used to store the data
// -> Named Location in the memory , has address and value
// -> var , let , const
// -> var ES6 sa pahly ka time ka ha . ya function scoped ha ,
// hoisted ha but TDZ ma nahi jata ha , windows object ka hissa banta agar global scoped ho
// -> let aur const ES6 ka time sa hn blocked scope , hoisted hn TDZ ma jaty hn
// -> variable wo dabba jaha value rakho or literal usi value ko kaha jata ha

// Data Types-> Number 64 bit hexadecimal floating points , String , Objects, Arrays , null , undefined
// -> Kuch hoty primitive aur kuch non primitive yani k refrence data types
// -> null ki datatype object ha jo k human error ha
// -> esy hi NAN ki data type number ha
// -> [] , {} ya objects hn
// -> primitives sidhy sadhy sirf value copy hoti ha
// -> numbers , null , undefined , string primitives hn
// -> refrence sidhy value copy nahi karty balk refference hoty hn , yani copy ko karo change to asal b change
// -> ya hoty hn refrence arrays , object , function
// -> yaha sa concept aata ha copy via refrence , shallow copy aur deep clone ya deep copy

// Scope     -> jaha kuch vissible ho yanai kaha kaha dekh sakty yani kaha kaha sa access ha
// -> Global , Function & Block
// -> Function => sirf function k andar zinda ha bahir maritiuuuuu pakki
// -> Block har wo place jo braces { } k andar ha , yu to function bhi block hi huwa , ussualy made to execute relted code coolectively
// -> agar ham kisis variable ko esy scope ma dhund rahy jaha wo declare ha lekin baad ma agy kahi
// lekin outer scope k pas usi name ka variable declare ha . to hoga yu k inner scope ka variable hoisted hoga
// declare on the top of that scope and saying bhaiya G konsa variable kyu k wo outer scope k variable ko shadow kar da ga
// -> ab agar inner scoped varaible let ya const sa declare ha to Refrence Error aur agar var sa declared to Undefined
// -> Isi ko kahty hn scope and hoisting ka conflict jo beginers ko karta ha confused
// -> hoisting ka simple matlab k
// har chiz ki declaration on the top rakh do ta k js ko kaha ja saky ruko bhai agy data hn
// -> agar ham ksis asy varaible ko access kar rahy jo abhi declred nahi ha
// to bhai wo automaticaly global ban jay ga x=abc(); function abc(){ let x=10; return x;}
// -> yaha x global ban jay ga

// closures & Lexical Scoping
// -> Lexical scoping ka matlab k jaha sa function call wo scope decide nahi kary ga balk jaha
// variable bna wo decide kary ga yani function likhny ki jaga sa , baqi concept same ha scope ka
// -> closure ya kahta ha k lexical scopee thik ha lekin agar ik outer function koi chiz bnata ha
// or inner function usko use kar k update karta ha or inCase Outer function terminte karta to still
// inner function k ps wo variable ha
// -> like outer ik factory or inner ik worker , oter chala ik chiz bni worker na rakh li
// ab factory band b ha to worker k ps wo chiz accessible ha
// -> function outer(){
// -> let x=1;
// -> function inner(){
// ->  console.log(x++);
// }}
// -> let counter = outer();
// -> counter();
// -> counter();
// -> counter();
// -> outer chala or x ko 1 bna diya , or ab counter ko outer nahi samjho
// -> ya ab hmesha inner return kary ga yani output 1,2,3

// Strict Mode-> Kuch rules hn jo javascript ko less forgiving bna daty hn
// -> "use-strict" likho on the top , variable declaration zroori ha ,
// -> koi b data type bni to uski deletion prohibited ha , tm function parametres ko same name nahi da sakty
// -> eval or arguments prohibites as variable name ,....

// Type coercian
// -> kuch bhi nahi sirf data types k sath gameplay ha ,

// Operators  -> arithmetic, comparison, logical , ternary , nullish coalescing , optional chaining , rest & spread
// -> Arithmetic to + , - * , / , % , **
// -> comparison > , < , >= , <= , == , != , === , !==
// -> ternary  syntax : condition ? valueIfTrue : valueIfFalse;
// -> Logical && , || , ! , ??
// -> Nulish Coalescing use hota ha || ki jaga , kyu ? kyu k || bewaqoof ha har value ko fasly man jata like 0
// -> Nuslish sirf null ya undefined ko falsy bolta , agar Ok to left nahi to right wala la lo
// -> let age = 0 ?? 50
// -> optional chaining kahti ha agar to koi obj property ha to thik nahi haa to error nahi dana , phir yndefined mily ga
// -> let user = {
// ->   name: "Ali",
// ->   address: {
// ->       city: "Okara"
// }
// };

// ```
//        -> console.log(user?.address?.city); 
// ```

// Control flow
// -> disruptes the normal flow of code
// -> flow diagram can better explain
// -> if, else if, else , switch these are conditional
// -> for , while , do while forEach , for of for in are iterative
// -> last one is function control structure

// Loops      -> sab thik thak sirf for ma agar initilizer let k sath declared ha to har iteration ki apni binding ho gi
// -> binding matlab variable ka apni value sa connection yani k jurna
// -> break and continue break khta isko chor do yahi par or khatam bs continue khta isko chor kar agy chalo

// Functions  -> block(group) of realted lines of codes that work together to perform something
// -> Declarations, expressions, arrow functions
// -> Parameters vs arguments, return values
// -> declaration ma hoisting hoti ha expresiion ya arrow function ma nahi
// -> declaration simple function word likh k function bna lana function dance(){}
// -> expression matlab function ko variable ma store kar lana let dance = function(){}
// -> arrow function function expresion ka shorthand ha let dance = () =>{}
// -> arrow function ma agar ik hi paramtre ho to let dance = dancer =>{}
// -> isko bgrer braces ka bhi bna sakty agar function ki sirf ik hi line of code ho
// -> arrow function ma this keyword apny nearest variable ko reffer kartaa
// -> callBack ka matlab ha k Ek function ko doosre function ke argument ke taur par
// pass karna, taake doosra function usay baad mein call kare.
// -> paramtre jo function m as placeholder hoty jo argumenets ka wait karty
// -> arguments asal ma wo values jo pass ki jati hn
// -> function ma b refrence ka masla ha yani ik sa zada variable ik hi function ma reffer kar sakty
// -> higher order functions bhi hoty hn
// -> pure and impure bhi hoty hn
// -> return key word ka simply matlab ha k jaha sa caall huwa wahi valuse dal do
// -> call()
// -> apply()
// -> ya 2no k 2no kam ik hi krty hn arguments lany ka traqia alag ha
// -> apply ik function ko apply karny k kam aata ha or ik sath arguments la lata lekin call alag lag kr k lata

// Arrays ya Lists
// -> collection of data , ha to object hi par different from onject
// -> kuch methods hn jo sari game kar jaty hn
// -> core methods : map, filter, reduce, find, sort, includes , push, pop, shift, unshift
// -> kuch methods hoty muteable jo asal array hi badal dalty
// -> mutable are push , pop , shift , unshift , sort , reverse
// -> aur kuch hoty shareef yani immuteable
// -> wo hn map , find , filter , includes , reduce ,
// -> map is different from forEach , map ik new array return karta automatically , forEach khud sa nahi krta btana parta

// Strings    -> can made with literals or new Keyword
// -> literal sa bni ki type string hogi par new keyword sa bni ki object
// -> one dimenssion array of characters hi man lo
// -> tamplete string is much efficient ya backticks sa bnti or js expressions allow karti
// -> `I am  a tamplete string${any varaible here}`
// -> kuch methods , same kuch mutated kuch immutated
// -> trim , trimStart , trimEnd , pad , padStart , padEnd , replace , replaceAll toUpperCase , toLowerCaseare mutated
// -> search , indexOf , match , matchAll , startsWith , endsWith , split are immutated
// -> regular expression /i is used to ignore text case , /g is used to declare as global scope
// -> /i tan use hota jab kuch find ya serch karna ho data sa
// -> /g tab use hota jab sirf first found nahi balk all founds karny hon kisi string
// -> use hoty replace , search , match marhods k sath

// Objects    -> key value pairs bna k rakhta , ik sa zyada keys , values bhi ho sakti hn
// -> Nested bhi hoty hn yani object k anadr object
// -> shalow copy ma nested object copy nahi hota refer hota ha
// -> for..in loop is best for traversal
// -> obj[key] ka matlab ha k us property yani key ki value
// -> obj.key ka matlab ha wo property ya key yani k man lo variable , ya hoti dot notation
// -> object.assign() bnata ha deepclone , structuredClone kar k bhi kuch hota ha
// -> destructing bhi hoti ha , ya arrays k sath bhi kam karti ha
// -> object can have arrays and also objects inside it
// -> objects can be trasnforemd into arrays and vice versa
// -> JSON.stringify() convert object into string
// -> JSON.parse()  convert string back into object

// Sets       -> ik tarha ka object hi jo elements store karta sirf unique not repating
// -> add() function is same as push data ko add karta kuch or bhi methods hoty hn
// -> add , delete , has , clear , size
// -> union , intersection , isSubsetOf , isSupersetOf , isdisjointForm , difference , symmetricdifference

// Maps       ->

// Fetch Api  -> hmesha async function ma karo or function body ma direct try catch lgao
// -> jab b data = res.json karny lago to to await lgao or jab b data = res.data karo tab b await lgao
// -> wasa to ya strcture ha fetch("https://api.example.com/users")
// .then(response => response.json())
// .then(data => {
// console.log(data);
// })
// .catch(error => {
// console.log(error);
// });
// -> fetch ik promise return karta ha or uska har ik .then bhi jo k resolve hota ha ya reject
// -> agyb ja kaar ham HTTP methods k sath dekhyn gy isko

// Promises   -> asalm ma to async nahi lekin karta usi ko handle ha
// -> asyn kam sa milny waly result ka ik representation
// -> jab b koi async kam hota ha to ik promise kiya jata jo three states ma rehta ha
// -> pending , resolve ya reject
// -> pending is optional
// -> resolve hota to sucess , reject hota to failure
// -> agar tmhary ps ik block of code ha jasa fetch ma
// -> or waha bht sa .then hn or har ik .then ik promise return karta ha
// -> to next .then phly waly .then k promise k result ka wait karta ha yahi promise chaining ha
// -> promise.all()
// ->   Promise.all([
// ->       getUsers(),
// ->       getProducts(),
// ->       getOrders()
// ])
// ->     .then(([users, products, orders]) => {
// ->         console.log(users);
// ->         console.log(products);
// ->         console.log(orders);
// })
// ->     .catch(error => {
// ->         console.log(error);
// });

// ```
//        -> Jab multiple Promises hain aur ek doosre par depend nahi karte, unko parallel start karne ke liye

//        -> let promise = new Promise((resolve, reject) => {

//        ->  let success = true;

//        ->  if (success) {
//        ->      resolve("Kaam complete");
//        ->  } else {
//        ->      reject("Kaam fail");
//              }

//             });
// ```

// Local-Stoarge & Session Staorage
// -> Local Storage Browser ki local storage ma kuch rakhna agar broser band b tab b data hota hi ha ,
// -> fast login ya jasa intersts ya cookies etc
// -> session bhi local hi hoti lekin jasa tab band ya browser band data deleted
// -> setItem , getItem , removeItem , clear , length

// Debouncing vs Throtling
// -> Debouncing matlab kisi kam ko hony sa roki rakhna like
// -> user type kary to wait karo jasa typing ruk jay to koi kam ya eventListen jo b karny wala kar lo
// -> throatiling wwait ni krwata yai rok k nahi rakhta ya ik fixed duration k bd km krta
// ha yani function chalata jasa k scrolling Event k liey

// ==========================================================================================================
// APPENDED IMPORTANT KEY POINTS
// =============================

// ====> The basics — additional key points

// ```
//        -> JavaScript is dynamically typed: variable ka type runtime par value se determine hota hai.
//        -> `typeof` kisi value ka type check karne ke liye use hota hai.
//        -> `typeof null` -> "object" ek historical JavaScript bug hai.
//        -> `typeof NaN` -> "number".
//        -> `typeof []` aur `typeof {}` -> "object".
//        -> `typeof function(){}` -> "function".
//        -> `const` variable ko reassign nahi kar sakte, lekin const object/array ke andar ka data mutate ho sakta hai.
//        -> `let` aur `const` block-scoped hain.
//        -> `var` function-scoped hai.
//        -> Primitive types: string, number, bigint, boolean, undefined, symbol, null.
//        -> Reference-type values mein objects, arrays aur functions aate hain.
//        -> `BigInt` large integers ke liye use hota hai: `123n`.
//        -> `Symbol` unique identifiers ke liye use hota hai.
// ```

// ====> Scope & Hoisting — additional key points

// ```
//        -> Scope chain: JS current scope mein variable dhundta hai, na mile to outer scope, phir us se outer.
//        -> Shadowing: inner scope mein same name ka variable outer variable ko hide karta hai.
//        -> `let`/`const` declaration se pehle access karna TDZ ki wajah se ReferenceError deta hai.
//        -> `var` declaration hoist hoti hai aur initialization `undefined` ke sath hoti hai.
//        -> Function declarations hoist hoti hain aur declaration se pehle call ki ja sakti hain.
//        -> `let`/`const` ko "hoisted nahi" kehna technically incomplete hai; unki binding create hoti hai lekin initialization declaration par hoti hai.
//        -> Undeclared variable ko strict mode mein assign karna ReferenceError deta hai.
//        -> Global `let`/`const` aur global `var` ka global object ke sath behavior different hota hai.
// ```

// ====> Closures & Lexical Scoping — additional key points

// ```
//        -> Closure tab banta hai jab function apne outer lexical environment ke variables ko remember/access karta hai.
//        -> Closure ki wajah se outer function finish hone ke baad bhi required variables accessible reh sakte hain.
//        -> Closures private state banane ke liye useful hain.
//        -> Callback functions bhi closures create kar sakte hain.
//        -> `let` in loops gives each iteration its own binding, which is important with closures.
//        -> `var` loop variable ke sath callbacks commonly same binding share karte hain.
// ```

// ====> Strict Mode — additional key points

// ```
//        -> Correct directive: `"use strict";`
//        -> Strict mode accidental global variables ko prevent karta hai.
//        -> Strict mode mein plain function ka `this` `undefined` hota hai.
//        -> Strict mode silent failures ko errors mein convert kar sakta hai.
//        -> Strict mode duplicate parameter names ko prohibit karta hai.
//        -> Strict mode mein octal-style legacy syntax restricted hai.
//        -> ES modules automatically strict mode mein run hote hain.
// ```

// ====> Type Coercion — additional key points

// ```
//        -> Type coercion ka matlab ek type ko doosri type mein convert hona.
//        -> Explicit coercion: `Number()`, `String()`, `Boolean()`.
//        -> Implicit coercion operators ke through automatically ho sakti hai.
//        -> `+` string concatenation bhi kar sakta hai.
//        -> `-`, `*`, `/` operands ko numbers mein coerce kar sakte hain.
//        -> `==` type coercion allow karta hai.
//        -> `===` type coercion nahi karta, value aur type dono compare karta hai.
//        -> Best default: comparison ke liye `===` aur `!==` prefer karo.
//        -> Falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`.
//        -> Arrays aur objects truthy hote hain, even `[]` aur `{}`.
//        -> `Boolean([])` -> true.
//        -> `Boolean({})` -> true.
// ```

// ====> Operators — additional key points

// ```
//        -> `&&` left value falsy ho to left return karta hai, warna right value.
//        -> `||` left value truthy ho to left return karta hai, warna right value.
//        -> `!` boolean context mein value ko negate karta hai.
//        -> `??` sirf `null` aur `undefined` ko missing maanta hai.
//        -> `0 ?? 50` -> `0`.
//        -> `0 || 50` -> `50`.
//        -> Optional chaining `?.` null/undefined ke case mein error ki jagah `undefined` de sakti hai.
//        -> Optional chaining property access, method call aur bracket access ke sath use ho sakti hai:
//           `user?.name`
//           `user?.login?.()`
//           `user?.["name"]`
//        -> Rest `...` values ko collect karta hai.
//        -> Spread `...` values ko expand karta hai.
//        -> Rest aur spread ka syntax same hai lekin purpose different hai.
// ```

// ====> Control Flow — additional key points

// ```
//        -> `if/else` conditions ke basis par code execute karta hai.
//        -> `switch` multiple exact cases ke liye useful hai.
//        -> `break` loop/switch ko immediately terminate karta hai.
//        -> `continue` current loop iteration skip karta hai aur next iteration par jata hai.
//        -> `return` function ko terminate karta hai aur value caller ko deta hai.
//        -> `forEach()` loop-like hai lekin `break` aur `continue` directly use nahi kar sakte.
//        -> `for...of` iterable ki values deta hai.
//        -> `for...in` object ki enumerable property keys deta hai.
// ```

// ====> Loops — additional key points

// ```
//        -> `for` mein initializer, condition aur update teen parts hote hain.
//        -> `while` pehle condition check karta hai, phir body chalata hai.
//        -> `do...while` body ko kam az kam ek baar execute karta hai.
//        -> `for...of` arrays, strings, Sets, Maps aur other iterables ke liye useful hai.
//        -> `for...in` mainly object properties traverse karne ke liye use hota hai.
//        -> `let` ke sath `for` loop mein per-iteration binding important hoti hai, especially closures ke sath.
//        -> `const` ko `for...of`/`for...in` mein use kiya ja sakta hai kyunki har iteration mein binding create ho sakti hai.
// ```

// ====> Functions — additional key points

// ```
//        -> Function declaration:
//           `function add(a, b) {}`
//        -> Function expression:
//           `const add = function(a, b) {}`
//        -> Arrow function:
//           `const add = (a, b) => {}`
//        -> Default parameters:
//           `function greet(name = "Guest") {}`
//        -> Rest parameters:
//           `function sum(...numbers) {}`
//        -> A function can be passed as an argument, returned from another function, or stored in a variable.
//        -> Higher-order function wo function hai jo function ko argument leta hai ya function return karta hai.
//        -> Callback wo function hai jo kisi doosre function ko pass kiya jata hai aur baad mein call hota hai.
//        -> Regular function ka `this` call-site se determine hota hai.
//        -> Arrow function apna `this` create nahi karta; lexical `this` use karta hai.
//        -> Arrow functions ka apna `arguments` object nahi hota.
//        -> `call()` function ko immediately invoke karta hai aur arguments individually leta hai.
//        -> `apply()` function ko immediately invoke karta hai aur arguments array/array-like form mein leta hai.
//        -> `bind()` function ko immediately call nahi karta; new function return karta hai with bound `this`.
//        -> Pure function same input par same output deta hai aur external state ko mutate nahi karta.
//        -> Impure function external state read/change kar sakta hai.
//        -> Recursion: function ka khud ko call karna.
//        -> Every recursive function needs a base case.
// ```

// ====> Arrays — additional key points

// ```
//        -> Arrays zero-indexed hoti hain.
//        -> `arr.length` last index nahi, total number of elements deta hai.
//        -> `push()` end mein add karta hai.
//        -> `pop()` end se remove karta hai.
//        -> `unshift()` start mein add karta hai.
//        -> `shift()` start se remove karta hai.
//        -> `slice()` original array ko mutate nahi karta.
//        -> `splice()` original array ko mutate karta hai.
//        -> `map()` same length ka usually new array return karta hai.
//        -> `filter()` condition satisfy karne wale elements ka new array return karta hai.
//        -> `find()` first matching element return karta hai.
//        -> `findIndex()` first matching element ka index return karta hai.
//        -> `some()` check karta hai kam az kam ek element condition satisfy karta hai ya nahi.
//        -> `every()` check karta hai kya sab elements condition satisfy karte hain.
//        -> `reduce()` array ko single accumulated result mein reduce karta hai.
//        -> `includes()` existence check karta hai.
//        -> `indexOf()` matching element ka first index deta hai, warna `-1`.
//        -> `sort()` default mein elements ko strings ki tarah sort karta hai.
//        -> Numbers ke liye:
//           `arr.sort((a, b) => a - b)`
//        -> `reverse()` original array mutate karta hai.
//        -> `forEach()` new array return nahi karta; normally `undefined` return karta hai.
//        -> `map()` ka purpose transformation hai; `forEach()` ka purpose side effects/iteration hai.
//        -> Array destructuring:
//           `const [a, b] = arr;`
//        -> Object destructuring:
//           `const {name, age} = user;`
// ```

// ====> Strings — additional key points

// ```
//        -> Strings immutable hoti hain.
//        -> String methods original string ko change nahi karte; new string return karte hain.
//        -> `trim()`, `trimStart()`, `trimEnd()` whitespace remove karte hain.
//        -> `toUpperCase()` aur `toLowerCase()` new string return karte hain.
//        -> `replace()` normally first matching occurrence replace karta hai.
//        -> `replaceAll()` all matching occurrences replace karta hai.
//        -> `split()` string ko array mein convert karta hai.
//        -> `includes()` substring existence check karta hai.
//        -> `charAt()` character access ke liye use hota hai.
//        -> `at()` positive aur negative index access support karta hai.
//        -> `substring()` aur `slice()` string portions extract kar sakte hain.
//        -> Template literals backticks `` ` ` `` se banti hain aur `${}` interpolation support karti hain.
//        -> Regex `/i` case-insensitive matching ke liye hota hai.
//        -> Regex `/g` global matching ke liye hota hai.
//        -> `/g` ka matlab global scope nahi, global matching hai.
// ```

// ====> Objects — additional key points

// ```
//        -> Object property ko dot notation ya bracket notation se access kar sakte hain.
//        -> `obj.key` literal property name `"key"` access karta hai.
//        -> `obj[key]` variable `key` ke andar stored property name access karta hai.
//        -> Object destructuring values extract karne ke liye use hoti hai.
//        -> Nested objects shallow copy mein same nested reference share kar sakte hain.
//        -> `{...obj}` aur `Object.assign({}, obj)` shallow copies hain, deep clones nahi.
//        -> `structuredClone(obj)` supported cloneable data ka deep clone create kar sakta hai.
//        -> `JSON.stringify()` object/value ko JSON string mein convert karta hai.
//        -> `JSON.parse()` valid JSON string ko JavaScript value mein convert karta hai.
//        -> `Object.keys(obj)` keys ka array deta hai.
//        -> `Object.values(obj)` values ka array deta hai.
//        -> `Object.entries(obj)` `[key, value]` pairs ka array deta hai.
//        -> `hasOwnProperty()` / `Object.hasOwn()` own property check karne ke liye use hote hain.
//        -> Objects reference values hain, isliye assignment normally same object reference ko point kar sakti hai.
//        -> Spread syntax objects merge/copy karne ke liye commonly use hoti hai:
//           `const merged = {...obj1, ...obj2};`
// ```

// ====> Sets — additional key points

// ```
//        -> Set unique values store karta hai.
//        -> Duplicate values automatically ignore hoti hain.
//        -> `add()` value add karta hai.
//        -> `delete()` value remove karta hai aur boolean return karta hai.
//        -> `has()` existence check karta hai.
//        -> `clear()` sab values remove karta hai.
//        -> `size` number of values deta hai.
//        -> Set iterable hai, isliye `for...of` use kar sakte hain.
//        -> `values()` values iterator deta hai.
//        -> `keys()` Set mein practically values iterator hi deta hai.
//        -> `entries()` `[value, value]` pairs deta hai.
//        -> `forEach()` Set ke elements iterate karta hai.
//        -> Modern Set methods:
//           `union()`
//           `intersection()`
//           `difference()`
//           `symmetricDifference()`
//           `isSubsetOf()`
//           `isSupersetOf()`
//           `isDisjointFrom()`
//        -> Array ko unique values mein convert karne ka common pattern:
//           `[...new Set(array)]`
// ```

// ====> Maps — additional key points

// ```
//        -> Map key-value pairs store karta hai.
//        -> Map ki keys kisi bhi data type ki ho sakti hain, including objects.
//        -> `set(key, value)` value store karta hai.
//        -> `get(key)` value retrieve karta hai.
//        -> `has(key)` key existence check karta hai.
//        -> `delete(key)` key-value pair remove karta hai.
//        -> `clear()` Map empty karta hai.
//        -> `size` number of entries deta hai.
//        -> `keys()` keys iterator deta hai.
//        -> `values()` values iterator deta hai.
//        -> `entries()` `[key, value]` pairs deta hai.
//        -> `forEach()` Map entries iterate karta hai.
//        -> Map ko `for...of` se directly iterate kar sakte hain.
//        -> Object vs Map: Map arbitrary key types support karta hai aur dedicated key-value methods provide karta hai.
// ```

// ====> Fetch API — additional key points

// ```
//        -> `fetch()` Promise return karta hai.
//        -> `fetch()` default mein GET request karta hai.
//        -> HTTP status `404` ya `500` milna automatically fetch Promise ko reject nahi karta.
//        -> `response.ok` successful HTTP status range check karne ke liye use hota hai.
//        -> `response.status` HTTP status code deta hai.
//        -> JSON response ke liye `await response.json()` use hota hai.
//        -> `response.json()` khud Promise return karta hai.
//        -> POST/PUT/PATCH mein `method`, `headers` aur `body` commonly use hote hain.
//        -> JSON request body bhejne ke liye `JSON.stringify()` use hota hai.
//        -> JSON body receive karne ke liye `response.json()` use hota hai.
//        -> Common HTTP methods:
//           GET -> data lena
//           POST -> data create/send karna
//           PUT -> complete resource update/replace
//           PATCH -> partial update
//           DELETE -> resource delete
//        -> Common headers:
//           `"Content-Type": "application/json"`
//        -> `try/catch` ke sath async/await fetch ko handle karna readable pattern hai.
//        -> Fetch failure ke sath network error aur HTTP error ko conceptually separate samjho.
//        -> Fetch flow:
//           request -> Response object -> response body parsing -> actual data.
// ```

// ====> Promises — additional key points

// ```
//        -> Promise ki states: pending, fulfilled, rejected.
//        -> Fulfilled aur rejected dono settled states hain.
//        -> Promise ek baar settled hone ke baad state change nahi karta.
//        -> `resolve()` Promise ko fulfill karta hai.
//        -> `reject()` Promise ko reject karta hai.
//        -> `.then()` fulfilled result handle karta hai.
//        -> `.catch()` rejection/error handle karta hai.
//        -> `.finally()` success ya failure dono cases ke baad execute ho sakta hai.
//        -> `.then()` generally new Promise return karta hai, isi wajah se chaining possible hai.
//        -> `.then()` mein normal value return karo to next `.then()` ko woh value milti hai.
//        -> `.then()` mein Promise return karo to next `.then()` us Promise ke settle hone ka wait karta hai.
//        -> `async` function always Promise return karta hai.
//        -> `await` Promise ke fulfilled result ko obtain karne ke liye use hota hai.
//        -> `await` rejection ko `try/catch` mein catch kiya ja sakta hai.
//        -> `Promise.all()` sab promises ke fulfill hone ka wait karta hai.
//        -> `Promise.all()` mein ek Promise reject ho jaye to returned Promise reject ho jata hai.
//        -> `Promise.allSettled()` sab promises ke complete hone ka wait karta hai, chahe fulfilled hon ya rejected.
//        -> `Promise.race()` jo Promise pehle settle ho uska result/rejection deta hai.
//        -> `Promise.any()` jo Promise pehle fulfill ho uska result deta hai; sab reject hon to reject hota hai.
//        -> Promise chaining = dependent asynchronous operations.
//        -> `Promise.all()` = independent asynchronous operations ko together wait karna.
//        -> Promise khud asynchronous kaam create nahi karta; Promise async operation ke eventual result ko represent/handle karta hai.
// ```

// ====> Local Storage & Session Storage — additional key points

// ```
//        -> `localStorage` aur `sessionStorage` dono Web Storage API ka part hain.
//        -> Dono key-value pairs ko strings ki form mein store karte hain.
//        -> `setItem(key, value)` data save karta hai.
//        -> `getItem(key)` data retrieve karta hai.
//        -> `removeItem(key)` ek item remove karta hai.
//        -> `clear()` storage ke saare items remove karta hai.
//        -> `length` stored items ki count deta hai.
//        -> `key(index)` given index par key return kar sakta hai.
//        -> Objects/arrays store karne ke liye `JSON.stringify()` use karo.
//        -> Retrieve karte waqt `JSON.parse()` use karo.
//        -> Missing key par `getItem()` normally `null` return karta hai.
//        -> `localStorage` data browser session ke across persist kar sakta hai.
//        -> `sessionStorage` current page session/tab ke scope mein hota hai.
//        -> Storage same-origin policy ke under hoti hai.
//        -> `localStorage` ko sensitive secrets/passwords ke liye automatically secure storage nahi samajhna chahiye.
//        -> Storage synchronous API hai, isliye very large amounts of data ke liye appropriate nahi.
// ```

// ====> Debouncing vs Throttling — additional key points

// ```
//        -> Debounce: events repeatedly trigger hon to function tab chale jab triggering ruk jaye aur delay complete ho.
//        -> Common debounce use case: search input.
//        -> Throttle: repeated events ke bawajood function fixed time interval mein limited frequency par chale.
//        -> Common throttle use case: scroll, resize, mouse movement.
//        -> Debounce = "wait until activity stops".
//        -> Throttle = "run at most once per interval".
//        -> Debounce mein commonly previous timer `clearTimeout()` se cancel hota hai.
//        -> Throttle ka purpose execution frequency limit karna hai.
//        -> Dono performance aur unnecessary function/API calls reduce karne ke techniques hain.
// ```

// ====> Event Loop — NEW IMPORTANT TOPIC

// ```
//        -> JavaScript execution ka main thread single-threaded hota hai.
//        -> Call Stack synchronous JavaScript code execute karta hai.
//        -> Browser Web APIs timers, DOM events, network operations waghera handle karne mein help karti hain.
//        -> Callback Queue/macrotask queue mein callbacks wait kar sakte hain.
//        -> Microtask Queue mein Promise callbacks (`.then`, `.catch`, `.finally`) aur related microtasks aate hain.
//        -> Event Loop check karta hai ke Call Stack empty hai ya nahi aur queued work ko stack tak bhejne mein role play karta hai.
//        -> Microtasks generally next macrotask se pehle drain hoti hain.
//        -> `setTimeout(..., 0)` ka matlab immediately execute nahi; minimum scheduling delay ke baad queue hota hai.
//        -> Promise callbacks usually `setTimeout` callbacks se pehle execute hote hain when both are scheduled from the same turn.
// ```

// ====> Destructuring — NEW IMPORTANT TOPIC

// ```
//        -> Array destructuring:
//           `const [a, b] = [10, 20];`
//        -> Object destructuring:
//           `const {name, age} = user;`
//        -> Object property rename:
//           `const {name: userName} = user;`
//        -> Default value:
//           `const {name = "Guest"} = user;`
//        -> Rest destructuring:
//           `const [first, ...rest] = arr;`
//        -> Destructuring values extract karne ka convenient syntax hai.
// ```

// ====> Spread vs Rest — NEW IMPORTANT TOPIC

// ```
//        -> Spread `...` iterable/object ko expand karta hai.
//        -> Array spread:
//           `[...arr]`
//        -> Object spread:
//           `{...obj}`
//        -> Function arguments:
//           `sum(...numbers)`
//        -> Rest parameters values ko collect karke array banate hain.
//        -> Function rest:
//           `function sum(...numbers) {}`
//        -> Same `...` syntax, but:
//           spread = expand
//           rest = collect
// ```

// ====> Equality & Important Values — NEW IMPORTANT TOPIC

// ```
//        -> `===` strict equality: type conversion nahi karta.
//        -> `==` loose equality: type coercion kar sakta hai.
//        -> Prefer `===` unless loose equality ka behavior intentionally required ho.
//        -> `NaN !== NaN`.
//        -> `Number.isNaN(value)` specifically NaN check karne ke liye useful hai.
//        -> `null` intentional empty value ko represent kar sakta hai.
//        -> `undefined` commonly missing/unassigned value ko represent karta hai.
//        -> `null == undefined` -> true.
//        -> `null === undefined` -> false.
// ```

// ====> Error Handling — NEW IMPORTANT TOPIC

// ```
//        -> `try` mein risky code run hota hai.
//        -> `catch` error handle karta hai.
//        -> `finally` normally cleanup code ke liye use hota hai.
//        -> `throw` manually error generate/throw kar sakta hai.
//        -> Promise rejection `.catch()` ya async/await ke `try/catch` se handle ki ja sakti hai.
//        -> `throw new Error("message")` standard error object create karne ka common pattern hai.
// ```

// ====> DOM & Events — NEW IMPORTANT TOPIC

// ```
//        -> DOM browser ke HTML document ka JavaScript-accessible representation hai.
//        -> `document.querySelector()` first matching element deta hai.
//        -> `document.querySelectorAll()` matching elements ka collection deta hai.
//        -> `addEventListener()` event listener attach karta hai.
//        -> Common events: `click`, `input`, `change`, `submit`, `keydown`, `keyup`, `scroll`.
//        -> Event object event ki information provide karta hai.
//        -> `event.target` actual element identify karta hai jis par event originate hua.
//        -> `preventDefault()` browser ka default behavior prevent karta hai.
//        -> Event bubbling mein event target se ancestors ki taraf propagate kar sakta hai.
//        -> Event delegation parent par listener laga kar child events handle karne ki technique hai.
// ```

// ====> Modules — NEW IMPORTANT TOPIC

// ```
//        -> ES Modules code ko multiple files mein organize karne ke liye use hote hain.
//        -> `export` values/functions/classes ko doosri files ke liye available karta hai.
//        -> `import` exported values ko doosri file mein use karta hai.
//        -> Named export:
//           `export { add };`
//        -> Named import:
//           `import { add } from "./math.js";`
//        -> Default export:
//           `export default add;`
//        -> Default import:
//           `import add from "./math.js";`
//        -> Modules automatically strict mode mein execute hote hain.
// ```

// ====> Classes & OOP — NEW IMPORTANT TOPIC

// ```
//        -> Class objects banane ka structured syntax provide karti hai.
//        -> `constructor()` object initialization ke liye use hota hai.
//        -> `new` class ka instance create karta hai.
//        -> Methods class ke behavior define karte hain.
//        -> `extends` inheritance ke liye use hota hai.
//        -> `super()` parent constructor/method ko access karne ke liye use hota hai.
//        -> JavaScript ka class system prototypes ke upar built hai.
//        -> Encapsulation, inheritance, polymorphism aur abstraction OOP ke common concepts hain.
// ```

// ====> Prototypes — NEW IMPORTANT TOPIC

// ```
//        -> JavaScript objects prototype chain ke through properties/methods inherit kar sakte hain.
//        -> Agar property object par na mile to JS prototype chain mein search karta hai.
//        -> `Object.getPrototypeOf(obj)` prototype access kar sakta hai.
//        -> `Object.create(proto)` specified prototype ke sath object create kar sakta hai.
//        -> Classes JavaScript ke prototype-based inheritance model ke upar syntax provide karti hain.
// ```

// ====> Regular Expression — NEW IMPORTANT TOPIC

// ```
//        -> Regex text patterns search, match aur replace karne ke liye use hota hai.
//        -> `/i` case-insensitive matching.
//        -> `/g` global matching.
//        -> `/m` multiline mode.
//        -> `^` beginning aur `$` ending represent kar sakte hain.
//        -> `\d` digit.
//        -> `\w` word character.
//        -> `\s` whitespace.
//        -> `+` one or more.
//        -> `*` zero or more.
//        -> `?` zero or one / lazy behavior depending on context.
//        -> Regex commonly `test()`, `match()`, `replace()` waghera ke sath use hota hai.
// ```


// ================================================================================================================================

// Kuch Logics
/*
Prime Number kasa banta ha 
condition 1 : wo 1 sa bara hi hona chahiey
condition 2 : jis number ko check kar rahi ho usko usi number sa ik number choty sa divide karo 
              or 2 tak divide check kro agar wo kahi bhi reminder 0 to wo prime nahi or agar reminder zero na ay to 
              congratulations its a prime number
*/
function isPrime(num) {
    if (num <= 1) {
        return false; // Early return for numbers less than or equal to 1
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {     //num ko 2 sa num tak divide karty jao agaar koi bhi number divide ho gaya to false return kardo
            return false; // Early return if a divisor is found
        }
    }
    return true;
}

let isNumPrime = num => {
    if (num <= 1) return false;
    let i = num - 1;
    while (num > 1) {
        if (num % i === 0) { return false; }
        i--;
    }

    return true;
}

let primeTest = (num) => {
    if (num <= 1) return false;
    let i = 2;
    while (num > 1) {
        if (num / i === 0) { return false; }

        i++;
    }

    return true;

}

//Rough Draft of Recursion Function for Prime Check
// let i = 2;
// let primeCheck = (n) => {
//     if (n != i) {
//         if (n <= 1) return false;
//         if (n % i === 0) return false;
//         i++;
//         return primeCheck(n);
//     }
//     i = 2;
//     return true;

// }

// Cleaner Recursion Function for Prime Check
let primeCheck = (n, i = 2) => {

    if (n <= 1) return false;

    if (i === n) return true;

    if (n % i === 0) return false;

    return primeCheck(n, i + 1);
};

weatherAPI = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
let dekhMosam = async () => {
    let res = await fetch(weatherAPI);
    let data = await res.json();
    console.log(data.current);
}

// dekhMosam();

//self writen FetchAPI function to get weather data from open-meteo.com
// let phirSaDekhMosam = async () => {
//     let res = await fetch(weatherAPI);
//     let lamosam = await res.json();
//     console.log(lamosam);
// })

//dekh bhai jab b bahir ki duniya sa kuch lao to wait karo or js ko b karwao
// is liey function ko async bna do
// ab fetch kro API or usko res ma store kro or isk liey await lgao
//ab res json nahi ha isko jason bnao res.json kr k or isma b awiat lgao or isko data ma save karlo
//ab data tyar ha console.log kr k varify karlo 



/*================================================================================
=======================Its 1st October , the Next Day ============================
==================================================================================*/

/*
Core methods:
map, filter, reduce, find, sort, includes
push, pop, shift, unshift
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//pop
numbers.pop(); // Removes the last element from the array
//push
numbers.push(11); // Adds 11 to the end of the array
//shift
numbers.shift(); // Removes the first element from the array
//unshift
numbers.unshift(0); // Adds 0 to the beginning of the array

let chars = numbers.map((num) => {
    return num += "A";
})

let avg = numbers.reduce((n) => {
    return n / numbers.length;
})

let primes = numbers.filter((num) => {
    return primeCheck(num);
}
)
console.log(chars); // Output: ["0A", "1A", "2A", "3A", "4A", "5A", "6A", "7A", "8A", "9A", "10A"]
console.log(avg); // Output: 5.5
console.log(primes); // Output: [2, 3, 5, 7]

// A very important concept in JavaScript is the concept of why forEach and map are different.
// forEach is used to iterate over an array and perform an action on each element, 
// but it does not return a new array. map, on the other hand, is used to 
// create a new array by applying a function to each element of the original array.

/* 
===========================Objects
*/

// Objects
// Creating and updating properties, nested objects
// Looping with for...in
// JSON basics: JSON.parse, JSON.stringify

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}

car.color = "red"; // Adds a new property to the object
car.year = 2021; // Updates the value of an existing property

car.owner = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
}

console.log(car);
// Output: whol e object with all properties including nested objects

for (let key in car) {
    console.log(key + ": " + car[key]); // Loops through the properties of the object
}

//Modern Concept being used here is Destructuring
let { make, model, year, color, owner } = car;

console.log(make, model, year, color);
//modern concept can be used here is optional chaining to access nested properties safely
console.log(owner?.address?.city);   // Output: Anytown

//JSON basics
let carJSON = JSON.stringify(car);
console.log(carJSON); // Output: JSON string representing the object

let carObj = JSON.parse(carJSON);
console.log(carObj); // Output: Object parsed from JSON string

//copy object mannualky & using spread operator & using Object.assign
let carCopy1 = car;
let carCopy2 = { ...car, condition: "new" }; // Using spread operator
let carCopy3 = Object.assign({}, car, { condition: "used" }); // Using Object.assign

//Now It Comes to Arrays --> let that yesterday

let customers = [{ name: "abc", phone: "12344", bill: 1000 }, { name: "xyz", phone: "12344", bill: 2000 }, { name: "pqr", phone: "12344", bill: 3000 }];

//Array Methods
//push, pop, shift, unshift, includes, find, filter, map, reduce

customers.push({ name: " asad ", phone: " 12344 ", bill: 4000 }); // Adds a new customer to the end of the array
customers.unshift({ name: " zain ", phone: " 12344 ", bill: 5000 }); // Adds a new customer to the beginning of the array

//customers.pop(); // Removes the last customer from the array
//customers.shift(); // Removes the first customer from the array

customers.includes({ name: "abc", phone: "12344", bill: 1000 }); // Returns true if the customer is in the array, false otherwise

//word problem made easy ....
let nums = [1, 2, 4, 5];
let findMissingNumber = (arr) => {
    let missingNum = 0;
    //let i = arr.length - 1;
    while (true) {
        if (arr.includes(missingNum)) {
            missingNum++;
        } else {
            return missingNum;
        }
    }
}

//algorithm to find missing number in an array of numbers from 0 to n
// 1. find the length of the array and store it in a variable x
// 2. find the sum of the array elements and store it in a variable sum
// 3. find the sum of the first n natural numbers using the formula n(n+1)/2 and store it in a variable y
//othervise list li lenth ma 1 barha kar x ma store kro or 2 barha kar y ma
//  or 2no ko multiply kr k 2 sa divide kr dana ha or jo b answer ay usko sum ma store krlo
//  or phir array k elements ko add kr k sum ma sa minus kr do jo jawab mily wahi missing number ha  

let upDatedCustomers = customers.map(customer => {
    return { ...customer, bill: customer.bill + 100 }; // Adds 100 to each customer's bill
});


