{
    // Promise 
type APIdata={
    userId: number;
    id:number;
    title:string;
    completed:boolean;
}


const  getdata = async():Promise<APIdata>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
const data = await response.json()
//   console.log(data);
 return data;
}

getdata()


}