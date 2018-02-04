export default function SvgToPng (svgCode, callback) {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 300
  document.body.appendChild(canvas)
  const context = canvas.getContext('2d')
  const domURL = self.URL || self.webkitURL || self
  const img = new Image()

  img.onload = function () {
    context.drawImage(this, 0, 0)
    const url = canvas.toDataURL('image/png')
    domURL.revokeObjectURL(url)
    callback(url)
  }

  function b64EncodeUnicode (str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
      function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1)
      }))
  }

  function buildSvgImageUrl (svgCode) {
    const b64 = b64EncodeUnicode(svgCode)
    return 'data:image/svg+xml;base64,' + b64
  }

  img.src = buildSvgImageUrl(svgCode)
}
