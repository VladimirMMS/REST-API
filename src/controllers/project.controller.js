import Project from "../models/projectModel";

export async function getProject(req, res) {
    
    const projects = await Project.findAll()
    res.json({
        data:projects
    })    
}

export async function getProjectById(req, res) {
    const projects = await Project.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json({
        data:projects
    })  
}

export async function deleteProjectById(req, res) {
    
    const projects = await Project.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json({
        data:projects
    })  
}

export async function createProject(req, res) {

    const {name, priority, description, deliverydate} = req.body;

    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
    
        }, {
            fields:['name', 'priority', 'description', 'deliverydate']
        });
    
        if(newProject) {
            res.json({
                message:'project created successfully',
                data:newProject
            })
        }     
    } catch (error) {
        console.log(error)
        res.status(501).json({error:"Happened a error in the server. Try to send more later"})
    } 
}

export async function updateProjectById(req, res) {
    
    const {name, priority, description, deliverydate} = req.body;

    const projects = await Project.findAll({
        attributes: ['id', 'name', 'priority', 'deliverydate'],
        where: {
            id: req.params.id
        }
    })

    if(projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            })
        })
    }
    
    res.json({
        data:projects
    })  
}
