const express=require('express')
const router=express.Router()
const TasksControler=require('../controllers/TasksControler')



// קבלת רשימת המשימות 
router.get('/tasks',TasksControler.getTasks)
//הצגת טופס להוספת משימה חדשה
router.get('/tasks/add',TasksControler.viewTasks)
// הוספת משימה חדשה
router.post('/tasks',TasksControler.addTasks)
// סימון משימה כ בוצעה
router.put('/tasks/:id',TasksControler.completeTasks)
// המשימה מחיקת 
router.delete('/tasks/:id',TasksControler.deleteTasks)
// הצגת תוכן קובץ הלוג בדפדפן.
router.get('/logs',TasksControler.getLogs)
// מחיקת קובץ הלוג.
router.delete('/logs',TasksControler.deleteLogs)



module.exports = router;