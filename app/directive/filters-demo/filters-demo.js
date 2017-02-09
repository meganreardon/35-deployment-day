'use strict';

require('./_filters-demo.scss');

module.exports = function() {
  return {
    restrict: 'EAC',
    template: require('./filters-demo.html'),
    controller: ['$log', FiltersDemoController],
    bindToController: true,
    controllerAs: 'filtersDemoCtrl',
    scopt: {
      title: '@'
    }
  };
};

function FiltersDemoController() {
  this.stuffToFilter = [ 1234, 3258761, 432, 'apple', 'banana', 'carrot'];
  this.stuffToReverse = [
    {name: 'Debby', age: 34},
    {name: 'Emma', age: 56},
    {name: 'Carol', age: 14},
    {name: 'Amy', age: 3},
    {name: 'Betty', age: 89}
  ];
  this.dateToMakeDate = [ 1288323623006 ];
}
