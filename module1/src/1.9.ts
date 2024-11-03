{
    // type Alias
    // type ke akta name dwa ji

const student1:{
    name:string;
    age:number;
    gender:string;
    contactNo:string;
    address:string;

}={
name:'amit',
age:28,
gender:"male",
contactNo:'01993790088',
address:"uttar badda gm bari",
};

const student2:{
    name:string;
    age:number;
    gender:string;
    address:string;
}={
    name:'amit',
    age:28,
gender:"male",
address:"uttar badda gm bari",
}
const student3:{
    name:string;
    age:number;
    gender:string;
    address:string;
}={
    name:'amit',
    age:28,
gender:"male",
address:"uttar badda gm bari",
}

// type alias proper system 

   type Man ={
    name:string;
    age:number;
    gender:string;
    contactNo?:string;
    address:string;
   }

   const man1:Man={
name:'amit',
age:28,
gender:"male",
contactNo:'01993790088',
address:"uttar badda gm bari",
};

const man2:Man={
    name:'amit',
    age:28,
gender:"male",
address:"uttar badda gm bari",
}
const man3:Man={
    name:'amit',
    age:28,
gender:"male",
address:"uttar badda gm bari",
}
    // type Alias String 
type Username=string;
type IsAdmin=boolean;
const user:Username= "Amit hasan faysal";
const isAdmin:IsAdmin=true;



 // type Alias function

type ADD=(num1:number,num2:number)=>number;
 const sum:ADD = (num1,num2)=>num1+num2;




}