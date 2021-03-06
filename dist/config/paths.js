'use strict';
var path = require('path');
var fs = require('fs');
var url = require('url');
// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
var resolveApp = function (relativePath) { return path.resolve(appDirectory, relativePath); };
var envPublicUrl = process.env.PUBLIC_URL;
function ensureSlash(path, needsSlash) {
    var hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    }
    else if (!hasSlash && needsSlash) {
        return path + "/";
    }
    else {
        return path;
    }
}
var getPublicUrl = function (appPackageJson) {
    return envPublicUrl || require(appPackageJson).homepage;
};
// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// Webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
function getServedPath(appPackageJson) {
    var publicUrl = getPublicUrl(appPackageJson);
    var servedUrl = envPublicUrl ||
        (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}
// config after eject: we're in ./config/
module.exports = {
    dotenv: resolveApp('.env'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.tsx'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    yarnLockFile: resolveApp('yarn.lock'),
    testsSetup: resolveApp('src/setupTests.ts'),
    appNodeModules: resolveApp('node_modules'),
    appTsConfig: resolveApp('tsconfig.json'),
    appTsProdConfig: resolveApp('tsconfig.prod.json'),
    appTsLint: resolveApp('tslint.json'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    servedPath: getServedPath(resolveApp('package.json')),
};
//# sourceMappingURL=paths.js.map