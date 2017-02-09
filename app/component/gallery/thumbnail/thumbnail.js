'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    gallery: '<',
    pic: '<'
  }
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deleteAPic = function() {
    $log.debug('thumbnailCtrl.deleteAPic');
    picService.deletePic(this.gallery, this.pic)
    .catch( err => {
      $log.error(err.message);
    });
  };
}
