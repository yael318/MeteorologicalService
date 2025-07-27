const express=require('express')
const app=express();
const help=require('./routers/helpRouter')
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/helpRouter',help)

app.listen(5000, function () {
    console.log('Example app listening on port http://localhost:5000/ !');
    console.log(`field`);
  });
  