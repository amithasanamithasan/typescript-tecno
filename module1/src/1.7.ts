{
// spread oparator 
// rest oparator
// destructuring



// learn spread oparator

const bros1:string[]=['amit','hasan','faysal']

const bros2:string[]=['tonmoy','kislu','kartis']


bros1.push(...bros2)


const mentor1={
    typescrtipt:'amit',
    redux:'hsasn',
    dbms:'Mizen',


}
const mentor2={
    prisma:'tonmoy',
    next:'kislu',
    cloud:'kartis',
}

const mentorlist= {
    ...mentor1,
    ...mentor2
}

// learn rest oparator 

const gretfriends=(friend1:string,friend2:string,friend3:string)=>{
console.log(`hi ${friend1} ${friend2} ${friend3}`);

}


gretfriends('amit','hasan','faysal');

// dorun 2ta string number asslo name tahole rest oparetor below

const poorfriends=(...frend:string[])=>{
    frend.forEach((friend:string)=>console.log(`hi ${friend}`))
}

}