import stdname, {stdrejectname} from "./app.js"

//Import Objname
let objname = stdname.AllStdname;
let objnamepass = stdname.stdnamepass;
let objnamerejected = stdname.stdrejectname;

stdname.AllStdname.forEach(stdname =>{
    console.log(`ID = ${stdname.id}, Name: ${stdname.name}`); 
})

//Import Objnamepss
console.log("!!Import Pass Std Name");
stdname.stdnamepass.forEach(stdname => {
    console.log(`ID = ${stdname.id}, Name: ${stdname.name}`);
});

console.log("!!Import Reject Std Name");
stdname.stdrejectname.forEach(stdname=>{
    console.log(`ID = ${stdname.id}, Name: ${stdname.name}`);
    
})





