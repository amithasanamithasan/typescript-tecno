{
// function 
// arrow function 
// normal functionn

const arrowfunction =(num1: number,num2:number) :number=>{

    return num1+num2



}
arrowfunction(2,4)

// object er moddhe kono akta function thake thole take amra method boli

const  user ={
    name:'amit',
    balance:0,
    addbalance(balance :number):number{
        return this.balance+balance;

    }
}

// object --> function --> method
const student ={
    name:'hasan',
    balance:30911,

   addstudent(balance:number):string{
    return `this is new roll ${this.balance+balance}`
   }
}


const arr:number[]=[1,2,3,4];

const newArray =arr.map((element:number):number=> element*element)



}