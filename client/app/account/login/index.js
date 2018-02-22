'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('employeeManagementApp.login', [])
  .controller('LoginController', LoginController)
  .name;
