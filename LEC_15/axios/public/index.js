//function to get comments data
// console.log(axios)
// function getComment(URL){
// //how to send get request using axios
// axios.get(URL).then((data)=>{
//     console.log(data)
// })
// .catch(err=>console.log(err))
// }
// getComment("https://jsonplaceholder.typicode.com/comments")
 async function getComment(URL){
    try{
        let comment = await axios.get(URL)
        console.log(comment)
    }
    catch(err){
        console.log(err)
    }
}
 getComment("https://jsonplaceholder.typicode.com/comments")

 //function to add new blog
 addBlog("http://localhost:3000/blog","first blog","first blog description")
async function addBlog(URL,title,description){
    try{
        let newBlog={
        title:title,
        description:description
    }
let response=await axios.post(URL,newBlog);
console.log(response.data)   
} catch(error){
    console.log(error)
}
}