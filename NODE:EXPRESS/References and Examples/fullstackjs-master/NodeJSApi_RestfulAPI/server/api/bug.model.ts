export let nextId = 1;

export class Bug implements IBug {
	public _id: number;
	public created: number;

	constructor(
		public description: string,
		public priority: string,
		public submittedBy: string,
		dateSubmitted ?: string
	) {
		if (dateSubmitted) this.created = Date.parse(dateSubmitted);
		else this.created = Date.now();
		// increment the id after creating a bug
		this._id = nextId++;
	}
}

export let bugs = [];

export function seedBugs() {
	bugs.push(new Bug('Add more items', 'High', 'Jeremy', 'June 13, 2016 13:30:00 GMT'));
	bugs.push(new Bug('Add some css to the page', 'Low', 'Cody', 'August 7, 2015, 20:14:17 GMT'));
	bugs.push(new Bug('Create some more test examples', 'Medium', 'Jeremy', 'June 15, 2016 16:48:12 GMT'));
	bugs.push(new Bug('Add more peanutbutter', 'High', 'Nick', 'June 2, 2014 23:01:19 GMT'));
}

export function clearBugs() {
	bugs.length = 0;
	nextId = 1;
}