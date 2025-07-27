// const express=require('express')
const tasksModel=require('../models/TasksModel')

// קבלת רשימת המשימות 
exports.getTasks=(req,res)=>{
tasksModel.getTasks((err, result) => {
    // if (err) {
    //     console.error(err);
    //     return res.status(500).json({ message: 'Error.' })
    // }
    res.render('getTasks',{results:result});
});

}


//הצגת טופס להוספת משימה חדשה
exports.viewTasks=()=>{

}

// הוספת משימה חדשה
exports.addTasks=(req, res)=>{
    const {title,status_task}=req.body;
    if(!title||!status_task){
        return res.status(400).json({message:'is exsis'})
    }
    tasksModel.addTasks(title,status_task,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({message:'Error'})
        }
        res.render(200).send('Task add')
    })
    

}


// סימון משימה כ בוצעה
exports.completeTasks=(req,res)=>{
  const {id}=req.params;
  tasksModel.edit(id,complete,(err,result)=>{
    if(err){
        console.error(err);
        return res.status(500).json({message:'Error'})
    }
    res.send('Edit.')
  })
}

// המשימה מחיקת 
exports.deleteTasks=(req,res)=>{
    const {id}=req.params;
    tasksModel.DeleteById(id,(err,result)=>{
        if(err){
            console.error(err)
            return res.status(500).json({message:'Error'})
        }
        res.status(200).send('Task delete')
    })

}

// הצגת תוכן קובץ הלוג בדפדפן.
exports.getLogs=()=>{

}

// מחיקת קובץ הלוג.
exports.deleteLogs=()=>{

}