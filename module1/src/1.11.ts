{

// ternary oparator || optional chaining || nullish coalecing 
const age:number  = 18;
if(age>=18){
    console.log('you are adult ');
}else{
    console.log('not adult');
}

// ternary oparetion 

const isAdult = age >=18 ? "is Adult" : "not adult "

console.log({isAdult});

// nullish coalescing operator
// ata koknon beboher korbo jokhon null and undefine making upor desition making krte hoi


const  isAuthenticated= null;

const result1 = isAuthenticated ?? "Geust";
console.log(result1);

type User={
    name:string;
    address:{
        city:string;
         road:string;
         parmanetadddress:string;
         presentaddress?:string;
    }
}
const user:User={
    name:'amit',
    address:{
        city:'Dhaka',
        road:'awosam raod',
        parmanetadddress:'dhaka',
      

    }
}

const permanetAdderss= user?.address?.presentaddress ?? "no peresentAddress"
console.log({permanetAdderss});













}