const conn=require('../db/config')
//החזרת כל רשמית המשימות
exports.getTasks=(callback)=>
{
const queryget=`SELECT * FROM TasksDB.tasks`
conn.query(queryget,callback );
}


//הוספת משימה חדשה
 exports.addTask=(title,status_task,callback )=>{
const query='INSERT INTO TasksDB.tasks (title, status_task, message) VALUES (?, ?, ?)';
conn.query(query,[title,status_task],callback);
  
 }


 
//ID מחיקה לפי
exports.DeleteById = (id, callback) => {
  const query = 'DELETE FROM TasksDB.tasks  WHERE id = ?';
  db.query(query, [id], callback);
}

exports.edit=(id,callback)=>{
  const query='UPDATE TasksDB.tasks SET status_task=?, WHERE id = ?';
conn.query=(query,[status_task,id],callback);
}


