{
// interface 



// interface
interface User2{
    name:string;
    age:number;
}
// intersection
interface UserwithRoll2 extends User2 {
    role:string;
}
const user2 :UserwithRoll2=
{
name:"amithasan",
age:12,
role:"poor devoloper"

};


    // type alias
    type User1={
        name:string;
        age:number;
    
    } 
type UserwithRoll1= User1 &{role:string}

const user1 :UserwithRoll1=
{
name:"amithasan",
age:12,
role:"manager",

};


// Array
type roll1=number[];

const rollNmuber1:roll1=[1,2,3]








}