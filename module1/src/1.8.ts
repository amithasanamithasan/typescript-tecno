{

//object  distructuring

const user={
    id:123,
    name:{
        firstname:'amit',
        middlename:'hasan',
     lastname:'faysal',


    },
    contact:2344555,
    address:'uttar badda gm bari',
}
const {contact, name:{firstname} }=user;
// arary distructuring
const MyfriendsName =['amit','hasan','faysal','tounmoy','kislu','kartis']

const [,,,dosto, ...rest]=MyfriendsName;

}