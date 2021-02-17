import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUser, getUsers, userId, deleteUser, patchUser } from '../controllers/users.js';

const router = express.Router();

let users = [];

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', userId);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;
