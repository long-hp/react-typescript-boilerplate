const fs = require("fs");
const path = require("path");

class EditRuntimeFile {
  constructor(opt) {
    const defaultOpt = {};
    this.opts = { ...defaultOpt, ...opt };
    this._handleAfterEmit = this._handleAfterEmit.bind(this);
  }

  _handleAfterEmit(conpilation, callback) {
    const { filename, pathChange } = this.opts;
    const file = path.resolve(__dirname, "../", filename);
    const content = fs.readFileSync(file, "utf-8");
    const newContent = content.replace(`p="/"`, `p=${pathChange}`);
    fs.writeFileSync(file, newContent);
    callback();
  }

  apply(compiler) {
    compiler.plugin("after-emit", this._handleAfterEmit);
  }
}

module.exports = EditRuntimeFile;
