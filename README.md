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

After installation, you can now add `paramaters` to the `custom` key:

```
custom:
  parameters:
    github_username:
      Type: String
      Default: ${env:GITHUB_USERNAME}
      Description: Github username, this is the user which will be displayed
    github_access_token:
      Type: String
      Default: ${env:GITHUB_ACCESS_TOKEN}
      Description: Your generated github access token
```

All the properties are added to the template as-is, so you can use any of the [CloudFormation parameter properties] (http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html).


Todo
----

Add option for adding `AWS::CloudFormation::Interface` descriptions and such. PR's are welcome!
