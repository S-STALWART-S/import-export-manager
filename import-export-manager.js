//* Super stuff =>

const imports = {};

//* Local stuff =>

const pathSplitter = (path) => {
  if (!Array.isArray(path)) var newPath = path.split(".");
  return newPath;
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

//* Global stuff =>

// /**
//  * @param {string} path - Object path to save value
//  * @param {string} componentName - Object key to access this component
//  * @param {string} fileSRC - File address using __filename
//  * @return {undefined} undefined
//  */
// const lazyExporter = (path, componentName, fileSRC) => {
//   path = pathSplitter(path);
//   fileSRC = fileSRC.split("/src")[1];
//   assigner(imports, path, {
//     [componentName]: () => lazy(() => import(fileSRC)),
//   });
// };

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
