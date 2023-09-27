//packages
const fs = require('fs-extra');

//test data
const firstFolder = 'first_folder';
const secondFolder = 'second_folder';
const thirdFolder = 'third_folder';
const file = '/file.txt';

//test stepes
fs.emptyDirSync(firstFolder);   

fs.ensureFileSync(firstFolder + file);

fs.emptyDirSync(secondFolder);

fs.moveSync(firstFolder + file, secondFolder + file);

fs.emptyDirSync(thirdFolder);

fs.copySync(secondFolder + file, thirdFolder + file);

fs.removeSync(secondFolder + file); 
fs.removeSync(thirdFolder + file);

fs.removeSync(firstFolder);
fs.removeSync(secondFolder);
fs.removeSync(thirdFolder);
