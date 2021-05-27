import {Router, Request, Response} from 'express';

import {getTasks, saveTasks, getTask, updateTask, finishedTask, removeTask} from './controller/tasksController';

const routes = Router();

routes.get('/', (request: Request, response:Response)=> {
    return response.json ({message: 'cu'})
});

routes.get('/tasks', getTasks);

routes.get('/tasks/:id', getTask);

routes.post('/tasks', saveTasks);

routes.put('/tasks/:id', updateTask);

routes.patch('/tasks/:id', finishedTask);

routes.delete('/tasks/:id', removeTask);


export default routes;