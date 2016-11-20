'use strict';

describe('Service: pics', function () {

  // load the service's module
  beforeEach(module('watts4000project02eweatherappApp'));

  // instantiate service
  var pics;
  beforeEach(inject(function (_pics_) {
    pics = _pics_;
  }));

  it('should do something', function () {
    expect(!!pics).toBe(true);
  });

});
