const mysql=require('mysql2')

const conn=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Mysql2025',
        database:'TasksDB',
        port:'3306'
    }
)

conn.connect((err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("connected to DB");
  })


  module.exports=conn;