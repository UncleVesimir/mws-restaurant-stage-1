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
  makeMobileImage(filePath, imageFileName, fileExtension)
})
}

function makeMobileImage(path, imageFileName, fileExtension){
  jimp.read(path)
    .then( img => {
      const writePath = `${IMAGE_FOLDER}/jimp_test/${imageFileName}_256w${fileExtension}`
      img.resize(256, jimp.AUTO)
        .quality(60)
          .write(writePath, logImageComplete.call(null, writePath, imageFileName))
    })
}

function logImageComplete(writePath, name){
  console.log(`Mobile friendly version of ${name}.jpg has been saved to:
  ${writePath}`);
}
