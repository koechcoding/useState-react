import express from 'express';
import {
    registerUser,
    findUserById,
    findUserProfile,
    deleteUser
} from '../controllers/user';

import { requireSignin, hasAuthorization } from '../controllers/auth';


const router = express.Router();


router.route('/api/users').post(registerUser);

router
	.route('/api/users/:userId')
	.get(findUserProfile)
	.delete(deleteUser);

router.param('userId', findUserById);

export default router;