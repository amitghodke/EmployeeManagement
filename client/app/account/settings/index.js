'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('employeeManagementApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
