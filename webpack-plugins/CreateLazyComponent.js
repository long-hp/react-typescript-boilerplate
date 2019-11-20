/* eslint-disable */
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

function getFileLazy(componentName, importFileName) {
  return `// @flow
import { lazy } from "react";

const ${componentName}: any = lazy((): any => {
  return import(
    /* webpackChunkName: "components/${componentName}", webpackPrefetch: true */ "${importFileName}"
  );
});

export default ${componentName};
`;
}

class CreateLazyComponent {
  constructor(opt) {
    const defaultOpt = {
      autoDeleteFileEnabled: false
    };
    this.opts = { ...defaultOpt, ...opt };
    this._handleEmit = this._handleEmit.bind(this);
    this._handleFolderInputWatch = this._handleFolderInputWatch.bind(this);
    this._handleReadFile = this._handleReadFile.bind(this);
    this._handleComponentHasLazy = this._handleComponentHasLazy.bind(this);
  }

  _deleteFolderRecursive(path) {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((file, index) => {
        const curPath = path + "/" + file;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  }

  _handleComponentHasLazy(pathName, content) {
    const { output } = this.opts;
    const componentName = pathName
      .match(/.*(?=(\/|\\))/g)[0]
      .replace(/.*(\/|\\)/g, "");
    const componentNameLazy = `${componentName}Lazy`;
    const componentFolderLazy = path.resolve(
      __dirname,
      "../",
      output,
      componentNameLazy
    );
    const importFileName = `${path.relative(
      componentFolderLazy,
      pathName.match(/.*(\/|\\)/g)[0]
    )}/${componentName}`;
    if (!fs.existsSync(componentFolderLazy)) {
      fs.mkdirSync(componentFolderLazy);
      fs.writeFileSync(
        `${componentFolderLazy}/${componentNameLazy}.js`,
        getFileLazy(componentNameLazy, importFileName.replace(/\\/g, "/"))
      );
    }
  }

  _handleReadFile(pathName) {
    return (err, content) => {
      if (err) throw err;
      const { output, autoDeleteFileEnabled } = this.opts;
      const componentName = pathName
        .match(/.*(?=(\/|\\))/g)[0]
        .replace(/.*(\/|\\)/g, "");
      const componentNameLazy = `${componentName}Lazy`;
      const componentFolderLazy = path.resolve(
        __dirname,
        "../",
        output,
        componentNameLazy
      );
      if (content.includes("@lazy")) {
        this._handleComponentHasLazy(pathName, content);
      } else {
        if (autoDeleteFileEnabled) {
          this._deleteFolderRecursive(componentFolderLazy);
        }
      }
    };
  }

  _handleFolderInputWatch(pathName) {
    fs.readFile(pathName, "utf-8", this._handleReadFile(pathName));
  }

  _handleEmit(conpilation, callback) {
    const { input } = this.opts;
    const folderInput = path.resolve(__dirname, "../", input);

    const watcher = chokidar.watch(folderInput);
    watcher.on("change", this._handleFolderInputWatch);

    callback();
  }

  apply(compiler) {
    compiler.plugin("emit", this._handleEmit);
  }
}

module.exports = CreateLazyComponent;
