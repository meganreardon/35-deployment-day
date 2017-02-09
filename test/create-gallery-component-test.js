'use strict';

describe('Create Gallery Component', function(){

  beforeEach(() => {
    angular.mock.module('cfgram'); // eslint-disable-line
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => { // eslint-disable-line
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  // NOTE: took most from example code
  describe('createGalleryCtrl.createGallery', () => {
    it('should create a gallery', () => {

      let createGallery = this.$componentController('createGallery');

      let gallery = {
        name: 'test gallery name',
        desc: 'test gallery description'
      };

      let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer test token'
      };

      let url = 'http://localhost:8000/api/gallery';

      this.$httpBackend.expectPOST(url, gallery, headers).respond(200);

      createGallery.gallery = gallery;
      createGallery.createGallery();

      this.$rootScope.$apply();

    });
  });

});
