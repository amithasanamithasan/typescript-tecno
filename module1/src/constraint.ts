{
    // Constrints  with Generics
    
    
    
    // exmple 1
    // id name email fixed 
    const addCourse =<T extends{id:number,name:string,email:string
    }>(student: T)=>{
        const Department= 'science' //fixed course
     return {
        ...student,
        Department
     }
    }
    
    
    const student1 = addCourse<{
        id:number;
        name:string;
        email:string;
        studentType:string;
    }> (
        {
            id:222,
            name:'amit',
            email:'e@gmail.com' ,
            studentType:'Brillient'
        });
    const student2 = addCourse ({
        id:2233,
        name:'amit',
        email:'e@gmail.com' ,
        studentType:'Good',
        BeforSchool: "cambrian"
    });
    
    // 
    }