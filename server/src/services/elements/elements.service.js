// Initializes the `elements` service on path `/elements`
const createService = require("feathers-mongodb");
const hooks = require("./elements.hooks");
const filters = require("./elements.filters");

module.exports = function() {
  const app = this;
  const paginate = app.get("paginate");
  const mongoClient = app.get("mongoClient");
  const options = {};

  // Initialize our service with any options it requires
  app.use("/elements", createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service("elements");

  mongoClient.then(db => {
    service.Model = db.collection("elements");
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
