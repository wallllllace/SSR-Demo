const minify = require('html-minifier').minify
const path = require('path');
const fs = require('fs');

class SSRCompileDonePlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap('SSRCompileDone', (stats) => {
      const htmlFilePath = path.join(__dirname, '..', 'dist', 'index.html');
      const serverBuildFile = path.join(__dirname, '..', 'dist', 'server.js');
      const bundle = fs.readFileSync(serverBuildFile, 'utf-8');
      const html = fs.readFileSync(htmlFilePath, 'utf-8');
      const minifedHtml = minify(html, { collapseWhitespace: true, quoteCharacter: '\'' });
      const newBundle = bundle.replace(/__SERVER_HTML_TEMPLATE__/, minifedHtml);
      fs.writeFileSync(serverBuildFile, newBundle, 'utf-8');
    });
  }
}

module.exports = SSRCompileDonePlugin;