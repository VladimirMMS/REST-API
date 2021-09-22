import { Router } from 'express'
import { getTask, createTask, getTaskById, deleteTask, updateTaskById} from '../controllers/task.controller'


const router = Router()


router.get('/', getTask)
router.post('/', createTask)
router.get('/:id', getTaskById)
router.delete('/:id', deleteTask)
router.put('/:id', updateTaskById) 
router.get('/project/:id', updateTaskById)



export default router;