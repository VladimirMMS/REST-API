import { Router } from 'express'
import { createProject, 
    getProject, 
    getProjectById, 
    deleteProjectById, 
    updateProjectById } from '../controllers/project.controller';


const router = Router()


router.get('/', getProject)
router.post('/', createProject)
router.get('/:id', getProjectById)
router.delete('/:id', deleteProjectById)
router.put('/:id', updateProjectById)




export default router;