const router = require("express").Router();
let Todo = require("../models/todo");

router.route("/addtodo").post((req,res)=>{

    const Date = req.body.Date;
    const Time = req.body.Time;
    const Type = req.body.Type;
    const Name = req.body.Name;
    const Task = req.body.Task;

    const newTodo = new Todo({
        Date,
        Time,
        Type,
        Name,
        Task
    })

    newTodo.save().then(()=>{
        res.json("TODO Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/alltodos").get((req,res)=>{
    Todo.find().then((todos)=>{
        res.json(todos)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/updatetodo/:id").put(async(req, res) =>{
    let todoId = req.params.id;

    const Date= req.body.Date;
    const Time=req.body.Time; 
    const Type=req.body.Type; 
    const Name=req.body.Name;
    const Task=req.body.Task;

    const updateTodo = {
        Date,
        Time,
        Type,
        Name,
        Task
    }
    await Todo.findByIdAndUpdate(todoId, updateTodo)
    .then(() =>{
        res.status(200).send({status: "TODO updated",})
    }).catch((err) => {
        console.log(err);
    res.status(500).send({status: "Error with upading data", error: err.message});
})   
})

router.route("/deletetodo/:id").delete(async(req,res) =>{
    let todoId = req.params.id;

    await Todo.findByIdAndDelete(todoId)
    .then(() => {
        res.status(200).send({status: "TODO deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete package", error: err.message});
    })
})

router.route("/gettodo/:id").get(async(req,res) =>{
    let todoId = req.params.id;
    await Todo.findById(todoId)
    .then((todo) => {
        res.status(200).send({status: "TODO fetched", todo});
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with get package", error: err.message});
    })
})

module.exports = router;