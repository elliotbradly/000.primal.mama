

import { PixelModel } from "../pixel.model";
import PixelBit from "../fce/pixel.bit";
import State from "../../99.core/state";

import * as ActCns from "../../act/console.action";

import * as ActPxl from "../../00.pixel.unit/pixel.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";


import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

import * as ActClr from "../../act/color.action";
import * as ActLgt from "../../act/light.action";
import { ColorModel } from "400.pixel/01.color.unit/color.model";

import * as S from 'string'

var bit, val, idx, dex, lst, dat, src;

export const initPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {
  
  bal.slv({ intBit: { idx: "init-pixel" } });

  return cpy;
};

export const updatePixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
 
  return cpy;
};

export const openPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
 
  return cpy;
};

var colorRead = function (png, x, y) {
  var data = [];
  var idx = (png.width * y + x) << 2;
  data[0] = png.data[idx]; //R
  data[1] = png.data[idx + 1]; //G
  data[2] = png.data[idx + 2]; //B
  data[3] = png.data[idx + 3]; //ALPHA
  return data;
};

var update = function () {
  var data = [];

  return data;
};

export const processPixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
  var convert = require("color-convert");

  const data = bal.dat;

  var source = data;
  var width = source.width;
  var height = source.height;
  var pixels = 0;
  var colors = {};
  var colorList = [];
  var pixelList = [];

  var count;

  for (var y = 0; y < height; y++) {
    count = y;

    for (var x = 0; x < width; x++) {
      var now = colorRead(source, x, y);
      pixels += 1;
      var id = convert.rgb.hex(now[0], now[1], now[2]);

      var marling = { x, y, hex: id, r: now[0], g: now[1], b: now[2] };

      pixelList.push(marling);

      if (colors[id] != null) {
        colors[id].push([x, y, now[3]]);
      }

      colors[id] = [];
      colorList.push(now);
    }
  }

  pixelList;

  if (bal.slv != null)
    bal.slv({ pixBit: { idx: "process-pixel", lst: pixelList, dat: colors } });

  return cpy;
};

export const colorPixel = async (
  cpy: PixelModel,
  bal: PixelBit,
  ste: State
) => {
  var lst = bal.lst;
  var dex = bal.lst.length - 1;

  var fin = [];

  var next = async () => {
    if (dex <= 0) {
      console.log("color complete");

      fin;
      debugger;

      bal.slv({ pixBit: { idx: "color-pixel", lst: fin } });
      return;
    }

    var itm = lst[dex];

    if (dex % 10000 == 3) console.log("processing itm " + JSON.stringify(itm));

    dex -= 1;

    if (dex % 10000 == 3) console.log("processing now " + dex);

    var bit = await window["electronAPI"].readColor("#" + itm.hex);

    var nowBit = JSON.parse(bit);

    var nowDat = nowBit.clrBit.dat;

    var marling = {
      x: itm.x,
      y: itm.y,
      hex: nowDat.hex,
      r: nowDat.r,
      g: nowDat.g,
      b: nowDat.b,
    };
    //console.log( marling )

    if (dex % 10000 == 3)
      console.log("processing marling " + JSON.stringify(marling));

    fin.push(marling);
    next();
  };

  next();

  return cpy;
};

//creates a master collection of colors swatches
export const buildPixel = async (
  cpy: PixelModel,
  bal: PixelBit,
  ste: State
) => {
  var root = "./color/";

  bit = await ste.bus(ActDsk.READ_DISK, { src: bal.src });
  dat = bit.dskBit.dat;
  dat = JSON.parse(dat);

  bit = await ste.hunt(ActClr.OPEN_COLOR, { dat });
  var colorDat = bit.clrBit.dat;

  bit = await ste.hunt(ActLgt.READ_LIGHT, { val: 0 });
  var wall0 = bit.lgtBit;

  bit = await ste.hunt(ActLgt.READ_LIGHT, { val: 1 });
  var wall1 = bit.lgtBit;

  var colorList = [];

  for (var key in colorDat) {
    var itm = colorDat[key].substring(1);
    colorList.push(itm);
  }

  var dex = colorList.length - 1;

  colorList;

  var output = [];

  var next = async () => {
    if (dex < 0) {
      output;

      output.forEach(async (a) => {
        var dir = root + a.flv + "/" + a.src + ".png";

        var nowClr = a.hex;

        if (nowClr == null && a.idx != null) nowClr = a.idx;
        bit = await ste.bus(ActDsk.SWATCH_DISK, { idx: nowClr, src: dir });
      });

      if (bal.slv != null)
        bal.slv({ pixBit: { idx: "build-pixel", lst: output } });
      return;
    }

    var idx = colorList[dex];
    dex -= 1;

    bit = await ste.hunt(ActClr.READ_COLOR, { idx, val: 1 });

    var colorDat = bit.clrBit.dat;
    output.push(colorDat);

    next();
  };

  next();

  return cpy;
};
var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const readPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {
  var convert = require("color-convert");
  var PNG = require("pngjs").PNG;
  var FS = require("fs-extra");

  var r, g, b;
  var hex;
  bal.src;

  var outputList = [];
  var outputData = {};

  bal.src;

  if (bal.val == null) bal.val = 0;

  if (bal.src == null) bal.src = './data/color-list/000.color.name.json'

  var FS = require("fs-extra");
  //this this the list of colors which need to be index from when it comes to the color data
  //ex: bal.src = './data/color-list/000.color.name.json
  dat = FS.readJsonSync(bal.src);

  bit = await ste.hunt(ActClr.OPEN_COLOR, { dat });

  //we just want to pull out the color data out by name only
  if (bal.val == 1) {

    var want = {}

    for (var key in bit.clrBit.dat) {
      var hole = S(key).slugify().s
      if (want[hole] != null) continue
      want[hole] = bit.clrBit.dat[key];
    }

    var need = want[bal.idx]

    if (need == null) {


      need = '#00FF00'
      //need = {}
    }

    //so you got the color but you need the rgb
    bit = await ste.hunt(ActClr.READ_COLOR, { idx: need });

    bal.slv({ pxlBit: { idx: "read-pixel", dat: bit.clrBit.dat.bit } });
    return

  }



  var clrMod: ColorModel = ste.value.color;

  bal.idx;

  var stream;
  var width;
  var height;

  var location = 0;

  FS.createReadStream(bal.idx)
    .pipe(
      new PNG({
        filterType: 4,
      })
    )
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {

        if (y % 100 == 0) console.log('wheee ' + y + ' // ' + this.height)


        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;
          // invert color
          r = this.data[idx];
          g = this.data[idx + 1];
          b = this.data[idx + 2];
          hex = convert.rgb.hex([r, g, b]);

          var clr = clrMod.completeList(hex);

          var name = clr.name;

          if (outputData[name] == null) outputList.push(clr);
          if (outputData[name] == null) outputData[name] = clr;

          dat = { x, y, r, g, b, hex, name };

          this.data[idx] = clr.rgb.r;
          this.data[idx + 1] = clr.rgb.g;
          this.data[idx + 2] = clr.rgb.b;




          //let us do a closest here
          //outputList.push(dat)
          //this.data[idx + 3] = this.data[idx + 3] >> 1;
        }
      }


      this.pack().pipe(FS.createWriteStream("./data/index.png"));

      for (var key in outputData[key]) {
        var pal = outputData[key];
        debugger;
      }

      FS.writeJsonSync("./data/index.json", outputList);

      bal.slv({ pxlBit: { idx: "read-pixel", lst: outputList } });
    });

  return cpy;
};

export const writePixel = (cpy: PixelModel, bal: PixelBit, ste: State) => {
  
  bal.slv({ pxlBit: { idx: "write-pixel" } });

  return cpy;
};

export const palettePixel = async (
  cpy: PixelModel,
  bal: PixelBit,
  ste: State
) => {
  var convert = require("color-convert");
  var PNG = require("pngjs").PNG;
  var FS = require("fs-extra");

  var r, g, b;
  var hex;

  var now = bal.src + "/index.json";

  bit = await ste.bus(ActDsk.READ_DISK, { src: now });

  lst = JSON.parse(bit.dskBit.dat);

  var data = {};

  lst.forEach((a) => {
    var idx = a.name;
    data[idx] = a.value;
  });

  data;

  var near = require("nearest-color").from(data);

  var out = "./data/fin.png";

  if (bal.val != null) out = bal.val;

  bal.idx


  FS.createReadStream(bal.idx)
    .pipe(
      new PNG({
        filterType: 4,
      })
    )
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;
          // invert color
          r = this.data[idx];
          g = this.data[idx + 1];
          b = this.data[idx + 2];

          hex = convert.rgb.hex([r, g, b]);

          var clr = near(hex);
          //var name = clr.name;

          //dat = { x, y, r, g, b, hex, name };

          this.data[idx] = clr.rgb.r;
          this.data[idx + 1] = clr.rgb.g;
          this.data[idx + 2] = clr.rgb.b;

          //want to check chroma key values here

          if (cpy.chroma != null) {

            cpy.chroma.forEach((a) => {

              if (clr.rgb.r == a.rgb.r && clr.rgb.g == a.rgb.g && clr.rgb.b == a.rgb.b) {
                this.data[idx + 3] = 0;
              }

            })

          }

          if (clr.rgb.r == 0 && clr.rgb.g == 255 && clr.rgb.b == 0) {
            this.data[idx + 3] = 0;
          }

          //let us do a closest here
          //outputList.push(dat)
          //this.data[idx + 3] = this.data[idx + 3] >> 1;
        }
      }



      out


      this.pack().pipe(FS.createWriteStream(out));



      bal.slv({ palBit: { idx: "palette-pixel" } });
    });

  return cpy;
};

export const batchPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  var FS = require("fs-extra");

  if (bal.lst == null) bal.lst = []

  var dex = 0;

  FS.emptyDirSync('./output')

  var next = async () => {

    if (dex >= bal.lst.length - 1) {



      console.log("Frames extracted successfully!");

      bal.slv({ palBit: { idx: "batch-pixel" } });
      return



    }

    dex += 1

    idx = bal.lst[dex]

    const path = require('path');
    const fileName = './output/' + path.basename(idx);

    var inside = idx
    var outside = bal.src

    bit = await ste.hunt(ActPxl.PALETTE_PIXEL, { idx, src: bal.src, val: fileName })

    await next()


  }

  await next()



  return cpy;
};


export const chromaPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  bit = await ste.bus(ActDsk.READ_DISK, { src: './palette/chroma-key-green/index.json' });

  var dat = JSON.parse(bit.dskBit.dat)
  cpy.chroma = dat;

  bal.slv({ pxlBit: { idx: "chroma-pixel" } });

  return cpy;
};




export const framePixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {
  //const ffmpeg = require("fluent-ffmpeg");
  const fs = require("fs");

  var ffmpegPath = "./bin/ffmpeg.exe";

  const videoFile = "data/000.mp4";
  const outputDir = "./frames";

  var FS = require('fs-extra')

  FS.emptyDirSync( outputDir )

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  //var itm = new ffmpeg(videoFile)
  //  .on("end", () => {

  //    console.log("Frames extracted successfully!");

  //    bal.slv({ palBit: { idx: "frame-pixel" } });
  //  })
  //  .on("error", (err) => {
  //    console.error("An error occurred:", err);
  //  })
  //  .takeScreenshots({
  //    count: 96, // Number of frames to extract
  //    filename: "frame.png", // Output filename pattern
  //    folder: outputDir, // Output directory
  //  });

 // itm.setFfmpegPath(ffmpegPath);

  return cpy;
};


export const sortPixel = async (cpy: PixelModel, bal: PixelBit, ste: State) => {

  var FS = require('fs-extra')


  FS.emptyDirSync('./output')

  var list = FS.readdirSync('./frames')

  list.forEach((a, b) => {

    var dex = String(b).padStart(3, "0")

    var end = a.split('.').pop()

    var input = './frames/' + a;
    var output = './output/' + dex + '.' + end;

    FS.copySync(input, output)
  })

  bal.slv({ palBit: { idx: "sort-pixel" } });

  return cpy;
};

export const testPixel = (cpy: PixelModel, bal:PixelBit, ste: State) => {
  
  bal.slv({ palBit: { idx: "test-pixel" } });

  return cpy;
  };