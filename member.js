function skillsMember() {
   return {
     restrict: 'E',
     templateUrl: 'modules/skills/member.html',
     controller: 'SkillsMenmberController',
     controllerAs: 'vm',
     bindToController: true,
     scope: {
        member: 'm'
     }
    };
}