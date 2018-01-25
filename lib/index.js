'use strict';

const _ = require('lodash');

class ServerlessParameters {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:package:createDeploymentArtifacts': this.addParameters.bind(this),
      'before:deploy:deploy': this.addParameters.bind(this),
    };
  }

  addParameters() {
    const template = this.serverless.service.provider.compiledCloudFormationTemplate;
    // this.serverless.cli.consoleLog(template);

    var parameters = {};
    if (this.serverless.service.custom.parameters) {
      parameters = this.serverless.service.custom.parameters;
    }

    template.Parameters = parameters
    this.serverless.cli.log('Added parameters to template');
  }
}

module.exports = ServerlessParameters;
