import { Bug, bugs } from './bug.model';
import * as express from 'express';

export function getAllBugs(req: express.Request, res: express.Response) {
	res.json(bugs);
}

export function getOneBug(req: express.Request, res: express.Response, next: Function) {
	res.json(req['bug']);
}

export function createBug(req: express.Request, res: express.Response) {
	let b = new Bug(req.body.description, req.body.priority, req.body.submittedBy);
	bugs.push(b);
	res.json(b);
}

export function editBug(req: express.Request, res: express.Response, next: Function) {
	req.body._id = req.params.id;
	bugs[bugs.indexOf(req['bug'])] = req.body;
	res.json(req.body);
}

export function removeBug(req: express.Request, res: express.Response, next: Function) {
	bugs.splice(bugs.indexOf(req['bug']), 1);
	res.json({ success: true });
}

export function findBug(req: express.Request, res: express.Response, next: Function) {
	let bug = bugs.filter((b) => b._id.toString() === req.params.id)[0];
	if (!bug) return next({ status: 400, message: 'Could not find the requested bug' });
	req['bug'] = bug;
	next();
}
