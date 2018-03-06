const Plugin = require('.');

describe('Plugin', () => {

  describe('Without configuration', () => {
    let serverlessParamsPlugin;

    beforeEach(() => {
      const serverless = {
        cli: {
          log: () => {},
        },
        service: {
          provider: {
            compiledCloudFormationTemplate: {},
          }
        }
      };
      serverless.service.provider.compiledCloudFormationTemplate = { Resources: {} };
      serverlessParamsPlugin = new Plugin(serverless);
      serverlessParamsPlugin.serverless.service.service = 'new-service';
    });

    it('does not modify CloudFormation template', () => {

      serverlessParamsPlugin.addParameters();

      const resultTemplate = serverlessParamsPlugin.serverless.service.provider.compiledCloudFormationTemplate;
      expect(Object.keys(resultTemplate)).toEqual([ 'Resources' ]);
    });
  });

  describe('With configuration', () => {
    let serverlessParamsPlugin;

    beforeEach(() => {
      const serverless = {
        cli: {
          log: () => {},
        },
        service: {
          custom: {
            parameters: {},
          },
          provider: {
            compiledCloudFormationTemplate: {},
          }
        }
      };
      serverless.service.provider.compiledCloudFormationTemplate = { Resources: {} };
      serverlessParamsPlugin = new Plugin(serverless);
      serverlessParamsPlugin.serverless.service.service = 'new-service';
    });

    it('adds `Parameters` to compiled CloudFormation template', () => {

      serverlessParamsPlugin.addParameters();

      const resultTemplate = serverlessParamsPlugin.serverless.service.provider.compiledCloudFormationTemplate;
      expect(resultTemplate.Parameters).toBeDefined();
    });
  });


});
