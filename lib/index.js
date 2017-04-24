'use strict';

const _ = require('lodash');

class ServerlessParameters {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:deploy:deploy': this.addParameters.bind(this),
    };
  }

  addParameters() {
    this.serverless.cli.consoleLog('');
    const template = this.serverless.service.provider.compiledCloudFormationTemplate;
    // this.serverless.cli.consoleLog(template);

    var parameters = {};
    if (this.serverless.service.custom.parameters) {
      parameters = this.serverless.service.custom.parameters;
    }

    template.Parameters = parameters
    this.serverless.cli.consoleLog('Added parameters to template');
    this.serverless.cli.consoleLog(parameters);
  }
}

module.exports = ServerlessParameters;
