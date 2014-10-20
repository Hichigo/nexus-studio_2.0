nexusApp.directive('myPane', function() {
    return {
      require: '^myTabs',
      restrict: 'E',
      transclude: true,
			replace: true,
      scope: {
        title: '@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'release/tpl/my-pane.html'
    };
  });