const express = require('express');
const app = express();
const path = require('path')



app.set('view engine','ejs')
app.set('views','./views')


const router = require('./router.js')

app.use(router)




app.listen(3000,()=>{
  console.log('正在监听端口3000,http://127.0.0.1:3000');
})