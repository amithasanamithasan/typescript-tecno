{
// Union And intersection Types

// union types 

// aita hocce string litaral types
// type Fronteddevolopers='poordevolopers'|'prodevoloper'
// type FullstackDevolopers='Frontenddevolopers'|'Backenddevoloper'

// type Devoloper = Fronteddevolopers|FullstackDevolopers

// const newDevloper:Fronteddevolopers='prodevoloper'


// // exmple2

// type User ={
//     name:string;
//     email?:string;
//     gender:"male"|"female";
//     bloodGroup:"O+"|"A+"|"AB+";
// }
// const user:User={
//     name:'amit',
//     gender:'male',
//     bloodGroup:'A+',

// }

// intersection 
// mane hocche common property gula


type Fronteddevoloper={
    skill:string[];
    designation1:'Frontend Devolopers'

}
type BackendDevoloper={
    skill:string[];
    designation2:'Backend Devolopers'

}

type FullstackDevolopers= Fronteddevoloper & BackendDevoloper

const fullstackDevolopers:FullstackDevolopers={
    skill:['html','css','javascript'],
    designation1:'Frontend Devolopers',
    designation2:"Backend Devolopers",
}

// union |   => ata hobe nile oita hobe 

// intersection &  => shobgula obbsie thakte hobe 




}