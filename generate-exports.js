const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'icons');
const packageJsonPath = path.join(__dirname, 'package.json');

// Read all .js files except index.js
const icons = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.js') && file !== 'index.js');

// Generate "exports" field in package.json
const exportsField = {
  ".": "./icons/index.js",
};

icons.forEach((file) => {
  const iconName = path.basename(file, '.js');
  exportsField[`./${iconName}`] = `./icons/${file}`;
});

// Update package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
pkg.exports = exportsField;
fs.copyFileSync(packageJsonPath, packageJsonPath + '.bak');
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));

console.log('✅ package.json "exports" field updated.');

// Generate icons/index.js
const indexFilePath = path.join(iconsDir, 'index.js');
const exportStatements = icons.map(file => {
  const name = path.basename(file, '.js');
  return `export { default as ${name} } from './${name}.js';`;
});
fs.writeFileSync(indexFilePath, exportStatements.join('\n') + '\n');

console.log('✅ icons/index.js generated.');
