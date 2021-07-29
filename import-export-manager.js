//* Super stuff =>

const imports = {};

//* Local stuff =>

const pathSplitter = (path) => {
  if (!Array.isArray(path)) path = path.split(".");
  return path;
};

const assigner = (imports, path, value) => {
  const newPath = pathSplitter(path);

  const lastKeyIndex = newPath.length - 1;

  for (var i = 0; i < lastKeyIndex; ++i) {
    const key = newPath[i];
    if (!(key in imports)) {
      imports[key] = {};
    }
    imports = imports[key];
  }

  imports[newPath[lastKeyIndex]] = {
    ...imports[newPath[lastKeyIndex]],
    ...value,
  };
};

/**
 * @param {string} path - Object path to save value
 * @param {object} value - Your value in Object
 * @return {undefined} undefined
 */
const exporter = (path, value) => {
  assigner(imports, path, value);
  return () => console.log("I DON'T RETURN ANYTHING!");
};

module.exports = { exporter, imports };
