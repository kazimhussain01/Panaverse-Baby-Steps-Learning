let a = "Hello! World";
console.log(a);
//! Syntax Error
//* leeet message = "Hello World"; //syntax error
//* console.log(message); 
//! Type Error
//* let message = "Hello! World";
//* console.loger(message); //Type erroe
//! Assignability_Error
//* let b = "kazim";
//* Type 'number' is not assignable to type 'string'
//* b = 23;
//* console.log(b);
//! step01_strong_typing
// let c : string = "UK";
// c = "Pakistan";
// let d : number = 7;
// let e : boolean = true
//! type inference
// let c = "pakistan";
// let d = 10;
// d = 15;
// let e = true;
// e = false;
//! step02_const_let
//* use const where variable values do not change
// const f = "5";
// const g : number = 23;
// const h = "Awesome";
//! I suggest use let instead of var everywhere, 
//! becuase let has blocked scope
// if (true) {
//     let i = 22;
//     //* i
// } else {
//     let i = "string";
//     //* use i
// }
// console.log("let" + i); //* i is not defined in this scope
let AllStdname = [
    { id: 1, name: "kazim" },
    { id: 2, name: "ali" },
    { id: 3, name: "Hussain" },
    { id: 4, name: "zain" },
    { id: 5, name: "fareed" },
    { id: 6, name: "hassan" },
    { id: 7, name: "shahbaz" }
];
let stdnamepass = [
    { id: 3, name: "Hussain" },
    { id: 4, name: "Zain" }
];
export let stdrejectname = [
    { id: 1, name: "Kazim" },
    { id: 6, name: "Hassan" }
];
export default { AllStdname, stdnamepass, stdrejectname };
//! Unions_Literals
let myname;
myname = "Kazim Hussain";
console.log(myname);
myname = null;
console.log(myname);
//* myname = 6 //Error
//* myname = undefined //Error
//! Unions_Literals One More Example
let age;
age = 18;
console.log(age);
age = undefined;
console.log(age);
//* age = "Kazim" //Error
//* age = null //Error
//! Objects
let teacher = {
    name: "Kazim Hussain",
    expirence: 10,
};
console.log("Name: " + teacher.name, ("\n" + "Expierence of it field: "
    + teacher.expirence + " Year"));
//! Object_Aliased
let student;
student = {
    name: "Kazim Hussain",
    exp: 3
};
console.log("Name : " + student["name"]);
console.log("Expirence : " + student.exp);
let city = { diameter: 10 };
let country = { diameter: 20 };
city = country;
country = city;
//* Inline Method
let ball = { diameter: 10 };
let spher = { diameter: 20 };
ball = spher;
spher = ball;
let tube = { diameter: 10, length: 20, name: "Kazim" };
// tube = ball //!Error
ball = tube;
//!Structural_Typing_Object
let mytype = { id: 1, name: "Kazim" };
//*Case 1
mytype = { id: 2, name: "Hussain" };
//*Case 2
// mytype = {id : 5, name_person : "Hassan"} //!Error, renamed or missing property
//*Case 2
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
let x;
x = { id: 8, fullname: "Kazim Rajpoot" };
//*Case 3
// mytype = {id : 10, name : "Zain", age : 22} //!Case 3: Error, excess property
let mytype2 = { id: 2, name: "Tom" };
//*Case 1
mytype = mytype2;
let mytype3 = { id: 7, name_person: "Kazim" };
//* Case 2
//* mytype = mytype3 //! Error, renamed or missing property, rule same for stale and fresh object 
let k;
let m = { id: 7, fullname: "Kazim" };
k = m; //Ok `fullname` matched by index signature
let mytype4 = { id: 10, name: "Kazim", age: 18 };
//* Case 3
mytype = mytype4; //! Case 3: Ok, excess property allowed in case of stale object which is different from fresh object
let myBook = {
    author: {
        firstName: "Sir Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};
let myObject = {
    key1: "value1",
    key2: function () {
        console.log("This is my Method");
    }
};
myObject.key2();
let obj1 = {
    teacher_id: 297,
    name: "Sir Zia",
    student_id: 787,
    student_name: "Kazim Hussain"
};
console.log("Teacher_id : " + obj1.teacher_id);
console.log("Teacher_Name : " + obj1.name);
console.log("Student_id : " + obj1.student_id);
console.log("Student_name : " + obj1["student_name"]);
//! Any__Unknown_Never_Types
//* Any
let myval;
myval = true; // OK
myval = 42; // OK
myval = "hey!"; // OK
myval = []; // OK
myval = {}; // OK
myval = Math.random; // OK
myval = null; // OK
myval = undefined; // OK
myval = () => { console.log('Hey again!'); }; // OK
//* Unknown
let value;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK
//* Assigning a value of type unknown to variables of other types
let val;
const val1 = val; // OK
const val2 = val; // OK
// const val3: boolean = val; //! Will throw error
// const val4: number = val; //! Will throw error
// const val5: string = val; //! Will throw error
// const val6: Record<string, any> = val; //! Will throw error
// const val7: any[] = val; //! Will throw error
// const val8: (...args: any[]) => void = val; //! Will throw error
//* Never
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
//! Explict_Casting
let myname1 = "Kazim";
console.log(myname1);
console.log(myname1.length);
//! Enum
var name;
(function (name) {
    name[name["Kazim"] = 0] = "Kazim";
    name[name["Zain"] = 1] = "Zain";
    name[name["Fareed"] = 2] = "Fareed";
})(name || (name = {}));
;
let c = name.Kazim;
var name1;
(function (name1) {
    name1[name1["Kazim"] = 1] = "Kazim";
    name1[name1["Zain"] = 2] = "Zain";
    name1[name1["Fareed"] = 3] = "Fareed";
})(name1 || (name1 = {}));
let fullname = name1[2];
console.log(fullname);
var name2;
(function (name2) {
    name2[name2["Kazim1"] = 7] = "Kazim1";
    name2[name2["Zain1"] = 2] = "Zain1";
    name2[name2["Fareed1"] = 8] = "Fareed1";
})(name2 || (name2 = {}));
let lastName = name2[4];
let lastName1 = name2[2];
let lastName2 = name2[8];
console.log(lastName);
console.log(lastName1);
console.log(lastName2);
; //starts with 0
var d = 1 /* Color.Green */;
; //can assign values to all
var colorIndex = 4 /* Color2["Blue"] */;
console.log(colorIndex);
//! Arrays
let array1 = [1, 3, 7, 4, 6]; //* Correct Syntax
console.log(array1[1]); //* Correct Syntax
let array2 = [4, 2, 7]; //* Alternative Syntax
let array3 = []; //* Correct Syntax to Empty Array
// let array4 : number[] = new number[2]; //!Error
let array5 = [];
array5.push(12345); //! Dynamically Adding
//! Functions
//* Name Function
function add(x, y) {
    return x + y;
}
//* Anonymous function
let add1 = function (x, y) {
    return x + y;
};
//* Anonymous function with explict type 
let myadd = function (x, y) {
    return x * y;
};
//* type names dont matter
let myadd1 = function (x, y) {
    return x - y;
};
//* Lambda functions
let myadd2 = (x, y) => {
    console.log("Kazim Hussain");
    return x + y;
};
let y = myadd2(7, 7);
console.log(y);
//! function_optional_parameter
function adding(firstName, lastName) {
    if (lastName)
        return firstName + "  " + lastName;
    else
        return firstName;
}
let result1 = adding("Bob"); //ok
// let result2 = adding("Bob", "Adams", "Sr.");  //! error, too many parameters
var result3 = adding("Bob", "Adams"); //also ok
//* anonymous function type with optional parameters
let myadd4 = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//! function_default_parameter
function adding1(firstName, lastName = "Kazim") {
    if (lastName)
        return firstName + "  " + lastName;
    else
        return firstName;
}
let ans = adding1("Bob"); //works correctly because last parameter is optional
console.log(ans);
// let ans1 = adding1("Bob", "Adams", "Sr.");  //error, too many parameters
let ans2 = adding1("Bob", "Adams"); //correct
//* anonymous function type with defult parameters
let myadd7 = function (firstName, lastName = "Kazim Rajpoot") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//! function_rest_parameter
function rest(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = rest("Kazim", "Zain", "Fareed", "Hassan", "Hamza");
console.log(employeeName);
//* Anonymous function type with Rest parameters
let rest1 = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
let employeeName1 = rest1("Kazim Rajpoot", "Zain Hashmi", "Taqi", "Bilal", "Ali");
console.log(employeeName1);
//! Async Function
function myCallBack(text) {
    console.log("Purchased " + text);
}
function callingfunction(initialText, callback) {
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    console.log("Searching");
    callback(initialText);
}
callingfunction("Pizza!", myCallBack);
function sum(name, name1) {
    return name + name1;
}
console.log(sum("Kazim ", "Rajpoot"));
console.log(sum(2, 4));
console.log(sum(true, false));
function added(num, num1) {
    return num + num1;
}
function added1(num, num2) {
    return num + num2;
}
console.log(added("Kazim ", 23));
console.log(added1("Hussain ", false));
//! Touple 
var tuple = [1, "bob"];
var secondElement = tuple[1];
console.log(secondElement);
//! Touple with function Destructuring 
let fn = () => {
    return ["Kazim", true];
};
let [str, bol] = fn();
console.log(str);
console.log(bol);
//! Touple with Object Destructuring 
let fn5 = () => {
    return {
        person: "Kazim",
        age1: 27,
    };
};
let { person, age1 } = fn5();
console.log(person);
console.log(age1);
//! Obeject Orianted Programing
class point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let pt = new point(40, 30);
let pt2 = new point(21, 11);
console.log(pt);
console.log(pt2);
// ! Obeject Orianted Programing with Method Call
class square {
    constructor(pt) {
        this.pt = pt;
    }
    printpoint() {
        console.log("Your Point is: ", pt);
    }
}
let sq = new square(pt);
sq.printpoint();
//! Object Orianted with ReadOnly 
class kazim {
    constructor(othername = "Hussain") {
        this.firstname = "Hello";
        this.lastname = "Kazim";
        this.firstname = othername;
    }
}
let read = new kazim();
console.log(read);
// const g = new kazim();
// g.firstname = "also not ok"; //!Error
//! Object Orianted with Super Calls
class base {
    constructor(name) {
        this.name = "Hello Kazim Hussain";
        this.name = name;
    }
}
class Derived extends base {
    constructor() {
        super("Hussain");
        this.RollNumber = 77;
    }
}
let obj2 = new Derived();
console.log(obj2);
//! One More Object Orianted with Super Calls
class Basic {
    constructor() {
        this.name = "Zain";
        this.rollnumber = 786;
    }
}
class common extends Basic {
    constructor() {
        super();
        this.IsMarried = false;
    }
}
let obj3 = new common();
console.log(obj3);
//! Getters / Setters
class C {
    constructor() {
        this._length = 0;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let obj4 = new C();
console.log(obj4.length);
//! One More Example Getters / Setters
class K1 {
    constructor() {
        this._height = 11;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
}
let obj5 = new K1();
console.log(obj5._height);
obj5.height = 22;
console.log(obj5.height);
//! One More Example Getters / Setters with if Condition
class think {
    constructor() {
        this._size = 11;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        if (value > 12)
            this._size = value;
    }
}
let obj7 = new think();
obj7.size = 8;
console.log(obj7.size);
//! Index Signatures
class MyClass {
    constructor() {
        this.personName = true; // type is string but DataType is Boolean
        this.personName2 = false; // type is string but DataType is Boolean
    }
    check(s) {
        return this[s];
    }
}
let obj8 = new MyClass();
console.log(obj8.personName);
console.log(obj8.personName2);
class Sonar {
    ping() {
        console.log("ping!");
    }
}
//   class Ball implements Pingable {
//     pong() {
//         console.log("pong!");
//       }
//     }
//! extends Clauses
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d1 = new Dog();
console.log(d1);
// Base class method
//   d.move();
// Derived class method
//   d.woof(3);
//! Member Visibility
//* public
class Base {
    greet() {
        console.log("hy");
    }
}
let obj9 = new Base();
console.log(obj9.greet);
//* Private
// class Base1 {
//     private greet(){
//         console.log("Hello");
//     }
// }
// let obj10 = new Base1()
// obj10.greet
//* protected
class Greeter1 {
    greet1() {
        console.log("Hello World" + this.getName);
    }
    getName() {
        return "hy";
    }
}
class SpecialGreete extends Greeter1 {
    day() {
        //* OK to access protected member here
        console.log("Day" + this.getName);
    }
}
//Property 'getName' is protected and only accessible within class 'Greeter1' and its subclasses.
//* let obj11 = new Greeter1()
//* obj11.getName
//! Static Members
class MyClass1 {
    printX() {
        //* Property 'x' does not exist on type Beacuse 'x' is not a Propert 'x' is a Class
        //*   console.log(MyClass.x);
    }
}
MyClass1.x = 0;
let obj12 = new MyClass1();
obj12.printX;
//! One More Exapmle Static Member
class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = ++user.StaticId;
    }
}
user.StaticId = 1;
let u1 = new user("Kazim", 18);
console.log(u1);
let u2 = new user("ALi", 18);
console.log(u2);
let u3 = new user("Zain", 18);
console.log(u3);
