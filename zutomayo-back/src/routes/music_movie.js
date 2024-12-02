import express from 'express';

import controller from '../controllers/music_movie.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findOne);
router.post('/', controller.create); 
router.put('/', controller.update);
router.put('/:id', controller.updateStock);
router.delete('/:id', controller.remove);

export default router;