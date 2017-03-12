'use strict';

// Initializes the `elements` service on path `/elements`
const createService = require('feathers-mongoose');
const createModel = require('../../models/elements.model');
const hooks = require('./elements.hooks');
const filters = require('./elements.filters');

module.exports = function() {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'elements',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/elements', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('elements');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
