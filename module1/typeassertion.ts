{

// type assertion 


const valueKg= (value:string |number )=>{
    if(typeof value==="string"){
const contertedValue = parseFloat(value)*100;

return (`the vaue is ${contertedValue} grm`)
    }
if(typeof value === "number"){
    return value;
}


}
valueKg(1000)as number;


}