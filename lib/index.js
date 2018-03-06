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

    if (_.has(this.serverless.service, 'custom.parameters')) {
      template.Parameters = this.serverless.service.custom.parameters;
    }

    this.serverless.cli.log('Added parameters to template');
  }
}

module.exports = ServerlessParameters;
