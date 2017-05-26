Serverless Parameters
---------------------
This plugin adds the possibility to add [CloudFormation parameters](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html) to your Serverless applications. This is convenient if you want to just generate a CloudFormation template, and use it as a subtemplate for some other stack, or when you are deploying somethign manually or via a cloudformation deploy button.

Installation
------------
Install the plugin through npm: `npm install serverless-parameters`. Add it your Serverless plugin list:

```
plugins:
  - serverless-parameters
```

Usage
-----

After installation, you can now add `parameters` to the `custom` key:

```
custom:
  parameters:
    EnableFeatureX:
      Type: String
      AllowedValues: yes,no
      Default: yes
      Description: Enable feature X
    VPCId:
      Type: AWS::EC2::VPC::Id
      Description: Select the VPC you want to use
    SomeEnvVarPrefilled:
      Type: String
      Default: ${env:MY_ENV_VAR}
      Description: A default parameter, filled with a value from your env when deployed with `sls deploy`
```

All the properties are added to the template as-is, so you can use any of the [CloudFormation parameter properties](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html).

You can then add Ref's on the places where you want to use them, eg in your environment settings:
```
provider:
  name: aws
  environment:
    FEATURE_X:
      Ref: EnableFeatureX
    some_env_var:
      Ref: SomeEnvVarPrefilled
```

Todo
----

Add option for adding `AWS::CloudFormation::Interface` descriptions and such. PR's are welcome!
