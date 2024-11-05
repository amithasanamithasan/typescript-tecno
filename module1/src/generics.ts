{

// generics
// aita ke amra dynamic and reusable krte chie
type GenericsArray1<T> =Array<T>;
type GenericsArraye2<T> =Array<T>;
type GenericsArraye3<T>= Array<T>;
// const rollNumber :number[] =[1,2,30];
const rollNumber :GenericsArray1<number> =[1,2,30];

// const mentors:string[]=['amit','hasan','faysal'];
const mentors:GenericsArraye2<string>=['amit','hasan','faysal'];


// const booleanArray : boolean[]=[true,false,true];

const booleanArray : GenericsArraye3<boolean>=[true,false];


// array of Objects 
interface user {
    name:string,
    age:number,
}
const  user:GenericsArray1<user> = [
{
name: "amit",
age:29,

},
{
    name: "amitHasan",
    age:290,
    
    }
]

// generic tuple 

type GenericsArray<a,b> =[a,b]

const Man: GenericsArray<string,string>=['amit','Doli']

 const UserId: GenericsArray<number ,{name:string,email:string}>
 =[12345,{
    name:'hasan',
    email:"amit@gmail.com"
}
]

// function 

const add=(x:number ,y:number)=> x+y;

add(10,29)









}