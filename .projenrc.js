const { ConstructLibraryCdk8s } = require('projen');
const project = new ConstructLibraryCdk8s({
  author: 'Hunter Thompson',
  authorAddress: 'aatman.bos@smallcase.com',
  cdk8sVersion: '1.0.0-beta.10',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-kuma-types',
  repositoryUrl: 'https://github.com/aatman.bos/cdk8s-kuma-types.git',

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();