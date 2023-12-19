const fs = require('fs');
const path = require('path');
const createFunc = require('../node_custom/create_func');
const createIndexPHP = require('../node_custom/create_index');
const createFooterPHP = require('../node_custom/create_foot');
const createHeaderPhp = require('../node_custom/create_head');
const createThemeStyle = require('../node_custom/create_style');

const versionFilePath = path.join(__dirname, '../bog_road_theme/version.txt');
let currentVersion = 1.0;

try {
  currentVersion = parseFloat(fs.readFileSync(versionFilePath, 'utf-8').trim()) || currentVersion;
} catch (error) {
  console.log(error)
}

const newVersion = (currentVersion + 0.1).toFixed(1);
fs.writeFileSync(versionFilePath, newVersion);

const assetManifest = require('../dist/manifest.json');

const functionsPhpContent = createFunc(newVersion, assetManifest);
const IndexPhpContent = createIndexPHP();
const createFooter = createFooterPHP();
const createHeader = createHeaderPhp();
const createStyle = createThemeStyle(newVersion);

const OutputFunc = (filename, content) => {

  const OutputPath = path.join(__dirname, `../bog_road_theme/${filename}`);
  fs.writeFileSync(OutputPath, content);

  console.log(`generated a ${filename} in my theme folder`)
}

OutputFunc('functions.php', functionsPhpContent);
OutputFunc('index.php', IndexPhpContent);
OutputFunc('footer.php', createFooter);
OutputFunc('header.php', createHeader);
OutputFunc('style.css', createStyle);
