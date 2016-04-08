var depsNormalize = require('deps-normalize');

module.exports = function(content) {
    const decl = typeof content === 'string' ?
        this.exec(content, this.resourcePath) :
        content;

    return depsNormalize(Array.isArray(decl) ? decl : decl.deps);
};
