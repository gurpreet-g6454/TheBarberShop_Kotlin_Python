const publicRoutes = {
  'POST /user': 'UserController.register',
  // 'POST /register': 'UserController.register', // alias for POST /user
  // 'POST /login': 'UserController.login',
  // 'POST /validate': 'UserController.validate',
  'GET /users': 'UserController.getAll',
  // 'PATCH /users': 'UserController.editUser',
  'GET /runseeds': 'UserController.runseeds',
  

  // 'POST /role': 'RoleController.create',
  // 'GET /role': 'RoleController.getAll',

  'POST /company': 'CompanyController.create',
  'GET /company': 'CompanyController.getAll',
  'PUT /company': 'CompanyController.edit',
  'DELETE /company': 'CompanyController.deleteCompany',

  'POST /booking': 'BookingController.create',
  'GET /booking': 'BookingController.getAll',
  'PUT /booking': 'BookingController.edit',
  'DELETE /booking': 'BookingController.deleteBooking',

  'POST /hospital': 'HospitalController.create',
  'GET /hospital': 'HospitalController.getAll',
  'PUT /hospital': 'HospitalController.edit',
  'DELETE /hospital': 'HospitalController.deleteHospital',

  // 'POST /country': 'CountryController.create',
  // 'GET /country': 'CountryController.getAll',

  // 'POST /scope': 'ScopeController.create',
  // 'GET /scope': 'ScopeController.getAll',

  // 'POST /userCountry': 'UserCountryController.create',
  // 'GET /userCountry': 'UserCountryController.getAll',

};

module.exports = publicRoutes;
