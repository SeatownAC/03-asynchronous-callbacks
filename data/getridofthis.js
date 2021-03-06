

INDEX.JS

'use strict';

const fs = require('fs');
//Here we will require the file path from our function to change an aspect (color? size? anything easy!)
//Here we will require the file path from our function to change second aspect (color? size? anything easy!)

// NO, you may not read synchronosly ... this is only for expedience in the demo
const buffer = fs.readFileSync(`${__dirname}/bitmap.bmp`);

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const transformation = process.argv[4];

// Create a naked object to model the bitmap properties
const parsedBitmap = {};

//const buffer = fs.readFile(inputFile, (err, data) => {
  //if(err) {throw err}

  //here might go our if/else/else if statements having to do with our image manipulations?

  //parseBitMap(data);
//});

// Identify the offsets by reading the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 20;
const NUM_COLORS_OFFSET = 46;
const COLOR_TABLE_OFFSET = 54;
const BYTES_PER_PIXEL_OFFSET = 28;

//------------------------------------------------------
// READING INFORMATION FROM THE BITMAP FILE
//------------------------------------------------------
parsedBitmap.type = buffer.toString('utf-8', 0, 2);
parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
parsedBitmap.bytesPerPixel = buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
parsedBitmap.numColors = buffer.readInt32LE(NUM_COLORS_OFFSET);

// The size of the color table is calculated by finding the number of colors first and then multiplying by 4
let COLOR_TABLE_SIZE = parsedBitmap.numColors * 4;
parsedBitmap.colorTable = buffer.slice(COLOR_TABLE_OFFSET,COLOR_TABLE_SIZE);

console.log(parsedBitmap);


