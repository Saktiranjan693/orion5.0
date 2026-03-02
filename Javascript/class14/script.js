// Sychronous and Asynchronous

// Synchronous
console.log("Hello");
console.log("World");

// Asynchronous

console.log("one");
console.log("two");
console.log("three");
console.log("four");
console.log("five");


setTimeout(() => {
    console.log("six");
}, 1000); 

console.log("seven");

//! clallback hell

// ()=>{
//     ()=>{
//         ()=>{
//             ()=>{
//                 ()=>{
//                     ()=>{


//                     }
//                 }
//             }
//         }
//     }
// }


function geruser(userId,callback){
    setTimeout(() => {
        console.log("getting user from database...");
        callback({userId: userId, username: "john"});
        
    }, 1000);
}

function getuserPosts(username,callback){
    setTimeout(()=>{
        console.log("getting posts for user...");
        callback([{postId: 1, title: "post 1"}, {postId: 2, title: "post 2"}]);

    },1000);
}

function getPostComments(postId,callback){
    setTimeout(()=>{
        console.log("getting comments for post...");
        callback([{commentID:101,text:"nice post!"}, {commentID:102,text:"thanks for sharing!"}]);
    })
}

//nested callbacks (callback hell)

getuserPosts(1,(user)=>{
    getuserPosts(user.username,(posts)=>{
        getPostComments(posts[0].postId,(comments)=>{
            console.log(comments);
        });
});     
});