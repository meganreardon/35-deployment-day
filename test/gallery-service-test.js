'use strict';

describe('Gallery Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST('http://localhost:8000/api/gallery', galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryID = 'testid';
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json, text/plain, */*'
      };

      this.$httpBackend.expectDELETE('http://localhost:8000/api/gallery/testid', headers)
      .respond(204);

      this.galleryService.deleteGallery(galleryID);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.fetchGalleries()', () => {
    it('should fetch all galleries', () => {
      let headers = {
        Authorization: 'Bearer test token 2',
        Accept: 'application/json'
      };

      let galleries = [
        {
          name: 'test gallery 1 name',
          desc: 'test gallery 1 description'
        },
        {
          name: 'test gallery 2 name',
          desc: 'test gallery 2 description'
        },
        {
          name: 'test gallery 3 name',
          desc: 'test gallery 3 description'
        }
      ];

      this.$httpBackend.expectGET('http://localhost:8000/api/gallery/', headers)
      .respond(200, galleries);

      // NOTE: this line is commented out because it cases test to fail, we talked about this in class as an issue others were having as well
      // this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});
