import domtoimage from 'dom-to-image'

export default function SvgToPng (svg, callback) {
  debugger;
  domtoimage.toPng(svg)
    .then(function (dataUrl) {
      const img = new Image()
      img.src = dataUrl
      callback(img)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}
