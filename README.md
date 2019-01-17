# ssimulacra-bin [![Build Status](http://img.shields.io/travis/abarre/ssimulacra-bin.svg?style=flat)](http://travis-ci.org/abarre/ssimulacra-bin) ![Current Version](https://img.shields.io/npm/v/ssimulacra-bin.svg)

> [ssimulacra](https://github.com/cloudinary/ssimulacra) is a tool to compute the (dis)similarity between two or more PNG images using an algorithm approximating human vision.
>
> Comparison is done using [the SSIM algorithm](https://ece.uwaterloo.ca/~z70wang/research/ssim/) (based on [Rabah Mehdi's implementation](http://mehdi.rabah.free.fr/SSIM/)) at multiple weighed resolutions.

Changes compared to Krause's SSIM implementation:

- Convert sRGB to linear RGB and then to Lab*, to get a perceptually more accurate color space
- Multi-scale (6 scales)
- Extra penalty for specific kinds of artifacts:
  - local artifacts
  - grid-like artifacts (blockiness)
  - introducing edges where the original is smooth (blockiness / color banding / ringing / mosquito noise)

## Install

To compile ssimulacra, `opencv` needs to be installed first (e.g. via `apt-get install libopencv-dev` on Debian/Ubuntu or via [Homebrew](http://brew.sh/)'s `brew install opencv` command on OS X).

```
$ npm install --save ssimulacra
```


## Usage

```js
const execFile = require('child_process').execFile;
const ssimulacra = require('ssimulacra');

execFile(ssimulacra, ['image1.png', 'image2.png'], (err, output) => {
  console.log('ssimilarity', output);
});
```


## CLI

```
$ npm install --global ssimulacra
```

```
$ ssimulacra --help
```


## License

[MIT](LICENSE.txt)
