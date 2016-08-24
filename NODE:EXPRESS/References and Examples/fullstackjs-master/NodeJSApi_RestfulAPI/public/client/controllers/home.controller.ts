namespace app.controllers {
	export class HomeController {
		public bugs: IBug[];

		public deleteBug(b: IBug) {
			this.BugService.remove(b._id).then(() => {
				this.bugs.splice(this.bugs.indexOf(b), 1);
			});
		}

		constructor(
			private BugService: app.services.BugService
		) {
			this.bugs = BugService.getAll();
		}		
	}

	angular.module('app').controller('HomeController', HomeController)
}
