const jimp  = require("jimp");
const fs = require("fs");
const path = require("path")

const IMAGE_FOLER = path.resolve(__dirname, "../img");

const IMAGE_PATHS = []

const rangeOfImageSizes = ["0.25", "0.5", "1"]

fs.readdir(IMAGE_FOLER, (err, files)=> {
  if(err){
    console.log(err)
    return
  }
  else{
    IMAGE_PATHS = files;
  }
})

IMAGE_PATHS.forEach((image, index) => {
  jimp.read(image)
})

//https://www.youtube.com/watch?v=iW6eWvxpfvc