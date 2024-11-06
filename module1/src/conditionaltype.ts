{
    // Conditional type 
    // jodi akta type r akta type er upor nirvor kore tahole ai condition type use korbo 
    
type a1 = number;

type b1= undefined;
type c1 =  null;

type x = c1 extends null ?true : false //coditional type 


type y = a1 extends null ?true : b1 extends undefined ? undefined:any
    // exmple 2




    type Sheik ={
        bike:string;
        car: string;
        ship: string;
    }
//keyof Sheik "bike"|"car"|"ship"

    // condition tar kce car ace kina /tar kace bike ace kina /tar kace ship ace kina
    type CheckVehicle <T>= T extends keyof Sheik  ? true :false

type Hasbike= CheckVehicle <"ship">
// rturn true value

type Hasplane = CheckVehicle <"plane">
// false return krbe 

}