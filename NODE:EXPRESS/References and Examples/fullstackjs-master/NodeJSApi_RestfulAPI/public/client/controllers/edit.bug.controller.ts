namespace app.controllers {
  export class EditBugController {
    public bug: IBug;

    public edit() {
      this.BugService.update(this.bug).then(() => {
        this.$state.go('Home');
      });
    }

    constructor(
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService,
      private BugService: app.services.BugService
    ) {
      if (!$stateParams['id']) $state.go('Home');
      this.bug = BugService.getOne($stateParams['id']);
    } 
  }

  angular.module('app').controller('EditBugController', EditBugController);
}
