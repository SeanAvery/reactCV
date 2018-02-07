'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lbpcascade_frontalface = require('./lbpcascade_frontalface');

var _lbpcascade_frontalface2 = _interopRequireDefault(_lbpcascade_frontalface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  based on https://github.com/jamt9000/webcv
*/

/*
  params:
    cascade: [object] pretrained face detection model
    image: [<img>] html5 image
*/
var FaceDetector = function FaceDetector(cascade, image) {
  _classCallCheck(this, FaceDetector);

  if (!cascade) throw new Error('param 1 must be an object');
  if (!image) throw new Error('param 2 must be a html5 image');
};

/* TESTING */


exports.default = FaceDetector;


var test = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var img;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            img = new Image(720, 1080);

            img.src = './face_close_up.jpg';
            console.log('img', img);
            // const fd = new FaceDetector(lbpcascade_frontalface, )

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function test() {
    return _ref.apply(this, arguments);
  };
}();

test();
