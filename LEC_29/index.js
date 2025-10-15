const {PrismaClient} = require('./generated/prisma')
const prisma = new PrismaClient()
async function addUser() {
    await prisma.user.create({
        data:{
            name:"keshav",
            email:"kk@gmail.com",
            password:"kk"
        }
    })
}  
// addUser()
// .then(()=>{
//     console.log("user added successfully")
//     // console.log(data)
// })

// async function addTweet(content,userId){
//     await prisma.tweet.create({
//         data:{
//             content:content,
//             userId:userId
//         }
//     })
// }
// addTweet("my first tweet",1)
// .then(()=>console.log("tweet is created"))


//find all tweet by user whos id is 1;

// async function getUserTweet(userId){
//  let tweet = await prisma.tweet.findMany({
//     where:{
//         userId:Number(userId)
//     }
//  })
//  return tweet
// }
// getUserTweet("1")
// .then((data)=>{
//     console.log(data)
// })



//user whos id is one wants to update his tweet ---->  tweet id is 1 

// async function updateTweet(tweetid,userId,updatedContent){
//     let tweet = await prisma.tweet.findUnique({
//         where:{
//             id:Number(tweetid)
//         }
//     })
//     if(!tweet){
//         return "tweet doesnot exist"
//     }
//     if(tweet.userId!=Number(userId)){
//         return "user cannot update this tweet"
//     }
//     await prisma.tweet.update({
//         where:{
//             id:Number(tweetid)
//         },
//         data:{
//             content:updatedContent
//         }
//     })
// }    


// updateTweet("1","1","update tweet")
// .then(()=>{
//     console.log("tweet is updated");      
// }) 


async function deleteUser(userid){
    let user = await prisma.user.findUnique({
        where:{
            id : Number(userid)
        }
    })
    if(!user){
        console.log("user not found");
    }
    await prisma.user.delete({
        where:{
            id : Number(userid)
        }
    })
    return "deleted"
    
}
// deleteUser("1")
// .then((data)=>{
//     console.log(data)
// })
// .catch(err=> console.log(err)); 


async function findUser(userId) {
    let user = await prisma.user.findUnique({
        where:{
            id:Number(userId)
        },
        select:{
            name:true,
            email:true
        }
    })
    return user;
}
findUser(6)
.then((data)=>{
console.log(data)
    console.log("find")
})


async function getUsers() {
    let allUsers = await prisma.user.findMany({
        select:{
            name:true,
            email:true
        }
    })   
    return allUsers;
}
getUsers() 
.then((data)=> console.log(data))