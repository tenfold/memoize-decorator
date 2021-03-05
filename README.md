# ts-library-template
Template for creating typescript libraries

## To start a new Typescript library

1. Create a new repo in Github and clone it
2. Add this repo as another origin `git remote add template git@github.com:tenfold/ts-library-template.git`
3. `git reset --hard template/master`
4. Modify `package.json` and other files to your specific needs
5. Enable the new repo in Drone and add the `codecov_token` secret. To get the token value go to `https://codecov.io/gh/tenfold/<library-name>`

When maintaining your library you can keep pulling this repo for new interesting changes. `git fetch template && git merge template/master`

## To publish your library

1. Commit any outstanding changes and push.
2. Run `npm version patch` (you can also pass `minor` or `major`)

## To use a library published with this

You can either refer to a single version or with semver.
```
"some-package": "tenfold/your-library#v1.0.0",
"some-package-with-semver": "tenfold/your-library#semver:^v1.0.0",
```
