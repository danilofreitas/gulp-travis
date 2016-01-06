(function() {
  'use strict';

  angular
    .module('angularTravis')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
