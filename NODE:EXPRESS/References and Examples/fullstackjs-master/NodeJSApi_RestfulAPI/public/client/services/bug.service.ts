namespace app.services {
	interface IBugResourceClass extends IBug, ng.resource.IResource<IBugResourceClass> {}

	interface IBugResource extends ng.resource.IResourceClass<IBugResourceClass> {
		update(params: Object, body: Object)
	}

	export class BugService {
		private BugResource: IBugResource;

		public getAll() {
			return this.BugResource.query();
		}

		public getOne(id: number) {
			return this.BugResource.get({ id: id });
		}

		public create(bug: IBug) {
			return this.BugResource.save(bug).$promise;
		}

		public update(bug: IBug) {
			return this.BugResource.update({ id: bug._id }, bug).$promise;
		}

		public remove(id: number) {
			return this.BugResource.delete({ id: id }).$promise;
		}

		constructor(
			private $resource: ng.resource.IResourceService
		) {
			this.BugResource = <IBugResource>$resource('/api/bugs/:id', null, {
				'update': { method: 'PUT' }
			});
		}
	}
	angular.module('app').service('BugService', BugService);
}
