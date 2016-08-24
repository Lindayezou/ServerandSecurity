import * as express from 'express';
import * as controller from './bug.controller';

const router = express.Router();

// GET: /api/bugs
router.get('/', controller.getAllBugs);

// GET: /api/bugs/:id
router.get('/:id', controller.findBug, controller.getOneBug);

// POST: /api/bugs
router.post('/', controller.createBug);

// PUT: /api/bugs/:id
router.put('/:id', controller.findBug, controller.editBug);

// DELETE: /api/bugs/:id
router.delete('/:id', controller.findBug, controller.removeBug);

export = router;
