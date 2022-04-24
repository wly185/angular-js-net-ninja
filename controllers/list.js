myApp.controller('listController', [
  '$scope',
  function ($scope) {
    $scope.items = [
      { name: 'america', language: 'english' },
      { name: 'britain', language: 'english' },
      { name: 'china', language: 'chinese' }
    ];
    $scope.removeItem = function (item) {
      $scope.items = $scope.items.filter((i) => i.name !== item.name);
    };
  }
]);
