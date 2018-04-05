const jimp  = require("jimp");
const fs = require("fs");
const path = require("path")

const IMAGE_FOLDER = path.resolve(__dirname, "../img/");

console.log(IMAGE_FOLDER)

let IMAGE_NAMES;
let promiseArray = [];


const rangeOfImageSizes = ["0.25", "0.5", "1"]

fs.readdir(IMAGE_FOLDER, (err, files)=> {
  if(err){
    console.log(err)
    return
  }
  else{
    IMAGE_NAMES = files;
    console.log(IMAGE_NAMES)
    runProcessing()
  }
})

path.ex

function makePathToFile(fileName){
  return path.resolve(IMAGE_FOLDER, fileName);
}

function runProcessing(){
IMAGE_NAMES.forEach((image, index) => {
  let filePath = makePathToFile(image);
  let fileExtension = path.extname(filePath);
  let imageFileName = path.basename(filePath, fileExtension);
  makeImage(filePath, imageFileName, fileExtension, 180, 45);
  makeImage(filePath, imageFileName, fileExtension, 350, 50);
  makeImage(filePath, imageFileName, fileExtension, 480, 50);
})
}

function makeImage(path, imageFileName, fileExtension, width, quality){
  jimp.read(path)
    .then( img => {
      const writePath = `${IMAGE_FOLDER}/${imageFileName}_${width}w${fileExtension}`
      img.resize(256, jimp.AUTO)
        .quality(60)
          .write(writePath, logImageComplete.call(null, writePath, imageFileName))
    })
}

function logImageComplete(writePath, name){
  console.log(`Mobile friendly version of ${name}.jpg has been saved to:
  ${writePath}`);
}
