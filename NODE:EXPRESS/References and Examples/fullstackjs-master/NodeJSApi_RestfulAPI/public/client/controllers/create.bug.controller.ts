namespace app.controllers {
  export class CreateBugController {
    public bug = { priority: 'Low' };

    public createBug() {
      this.BugService.create(this.bug as IBug).then(() => {
        this.$state.go('Home');
      })
    }

    constructor(
      private BugService: app.services.BugService,
      private $state: ng.ui.IStateService
    ) {
      
    }
  }
  angular.module('app').controller('CreateBugController', CreateBugController);
}