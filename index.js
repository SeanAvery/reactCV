
/*
  based on https://github.com/jamt9000/webcv
*/


/*
  params:
    cascade: [object] pretrained face detection model
    image: [<img>] html5 image
*/
export default class FaceDetector {
  constructor(cascade, image) {
    if (!cascade) throw new Error('param 1 must be an object')
    if (!image) throw new Error('param 2 must be a html5 image')
  }
}


/* TESTING */
import lbpcascade_frontalface from './lbpcascade_frontalface'

const test = async () => {
  console.log('here')
  const img = new Image(720, 1080)
  img.src = './face_close_up .jpg'
  console.log('img', img)
  // const fd = new FaceDetector(lbpcascade_frontalface, )
}

console.log('here')
test()
