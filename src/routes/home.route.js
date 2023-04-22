import { GetHome } from '../controllers/home.controller.js';

import express from 'express';

const router = express.Router();


router.get('/', GetHome);



export default router;