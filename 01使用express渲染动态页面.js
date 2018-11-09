const express = require('express');
const app = express();
const path = require('path')

const person = {
  name:'zs',
  age:18,
  gender:'男',
  hobby:['打球','打篮球','踢足球']
}

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'./views/index.html'))
})


app.listen(3000,()=>{
  console.log('正在监听端口3000,http://127.0.0.1:3000');
})