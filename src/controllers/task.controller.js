import Task from "../models/tasksModel"

export async function createTask(req, res) {
    const {name, done, projectid} = req.body;

    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
    
        }, {
            fields:['name', 'done', 'projectid']
        });
    
        if(newTask) {
            res.json({
                message:'project created successfully',
                data:newTask
            })
        }     
    } catch (error) {
        console.log(error)
        res.status(501).json({error:"Happened a error in the server. Try to send more later"})
    } 
       
}

export async function getTask(req, res) {
    const tasks = await Task.findAll()
    res.json({tasks: tasks})
    
}

export async function getTaskById(req, res) {

    const tasks = await Task.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        tasks:tasks
    }) 
    
}

export async function updateTaskById(req, res) {

    const {name, done, projectid} = req.body;

    const tasks = await Task.findAll({
        attributes: ['id', 'name', 'done', 'projectid'],
        where: {
            id: req.params.id
        }
    })

    if(tasks.length > 0) {
        tasks.forEach(async task => {
            await task.update({
                name,
                done,
                projectid
                
            })
        })
    }
    
    res.json({
        data:tasks
    })
}

export async function deleteTask(req, res) {

    const task = await Task.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        message:"it was deleted succesefully"
    })  
}

export async function getTaskByProject(req, res) {

    const {id} = req.params
    const  tasks = await Task.findAll({
        attributes:['id', 'projectid', 'done', 'name'],
        where: {id}
    })

    res.json({tasks})

    
}