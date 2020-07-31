import express      from 'express';
import controllers  from './controllers';

const router = express.Router();

router.get('/todo', controllers.todo.get);

export default router;
