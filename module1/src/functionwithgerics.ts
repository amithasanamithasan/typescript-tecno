{
// Function with Generics

const createArray =(param:string) :string[]=>{
    return [param]
}
const create_Array_With_Generics = <T> (param:T) :T[]=>{
    return [param]
}

const rest1= createArray('Amit hasan Faysal');

const resGeneric= create_Array_With_Generics<string> ('amithsanfaysal');

type User={
    id:number;
    name:string;
}
const resGenricObj= create_Array_With_Generics<User>({id:123,name:'amit hsan faysal'})


// eample 2


const create_Array_With_Tuple = <T,Q,R> (param1:T ,param2:Q, param3:R) :[T,Q,R]=>{
    return [param1, param2 ,param3]
}



const rest3= create_Array_With_Tuple<string, number, { name: string, country: string }>('Amit hasan Faysal',1233,{
   name:'asia',
   country:'bangladesh'
}
);


// exmple 3
const addCourse =<T>(student: T)=>{
    const Department= 'science' //fixed course
 return {
    ...student,
    Department
 }
}


const student1 = addCourse (
    {
        name:'amit',
        email:'e@gmail.com' ,
        studentType:'Brillient'
    });
const student2 = addCourse ( 
    {name:'amit',
    email:'e@gmail.com' ,
    studentType:'Good',
    BeforSchool: "cambrian"
});

// 
}