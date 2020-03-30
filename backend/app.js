const express = require('express');

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.post('/api/posts',(req,res,next)=>{
  const post = req.body;
  console.log(post);
  res.status(201).send({
    message:"Post added successfully"
  });
});

app.get('/api/posts',(req,res,next)=>{
  const posts=[
    {
      id:'aadlkfakldfakljd',
      title:'This is the first post',
      content:'This is a randomn post content'
    },
    {
      id:'sdfsadfadffdfds',
      title:'This is the second post',
      content:'This is a randomn post content too'
    },
    {
      id:'alkdfjalfkddjs',
      title:'This is the third post',
      content:'This is a randomn post content too'
    }
  ];

  res.status(200).json({
    message:'All Posts fetched',
    posts:posts
  });
});

module.exports=app;
