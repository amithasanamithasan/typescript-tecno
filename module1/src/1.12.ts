{
// nullable types 

const serchBar= (value: string| null|unknown)=>{
 if(typeof value==="number"){
    console.log("serching value");

 }else{
    console.log("not serching value");
 }

}
serchBar(12)


// unknown typeof

const sppedMeterperSecound= (value: unknown)=>{
if( typeof value === "number"){
    const convertedspeed=  (value *1000)/3600;
    console.log(`the speed is ${convertedspeed} ms^1`);
}


} 
sppedMeterperSecound(1000);


const sppedmeterpersecound= (value: unknown)=>{
    if( typeof value === "number"){
        const convertedspeed=  (value *1000)/3600;
        console.log(`the speed is ${convertedspeed} ms^1`);
    }
    else if(typeof value=== "string"){
        const [result,unit] =value.split(' ');
        console.log(result);
        const convertedspeed=  (parseFloat (result) *1000)/3600;
        console.log(`the speed is ${convertedspeed} ms^1`);
    } else{
        console.log('wrong input ');
    }

}
// sppedmeterpersecound(`1000 KW^-1`);

sppedmeterpersecound(null);
}