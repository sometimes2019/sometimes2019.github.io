const glob = require('glob')
const path = require('upath')
const fs = require('fs')

const status = ['success', 'info', 'warning', 'danger']
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

glob(`${__dirname}/**/*.?(html|htm)`, (err, filePath) => {
  if (err) throw err
  console.log(filePath)

  const template = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <title>doc-mirror</title>
</head>

<body>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="page-header">
        <h1>DOC-MIRROR <small>one more option</small></h1>
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="list-group">
        ${
    filePath.filter(item => !item.includes('index.html')).map(item => {
      const src = path.relative(__dirname, item)
      let title = src.slice(src.indexOf('/') + 1)
      title = title.slice(0, title.lastIndexOf('.'))
      return `<a class="list-group-item list-group-item-${status[randomIntegerInRange(0, 3)]}" href="./${src}">${title}</a>`
    }).join('\n')
    }
      </div >
    </div >
  <div class="col-md-2"></div>
  </div >
</body >

</html >
  `
  fs.writeFile(path.resolve(__dirname, 'index.html'), template, (err) => {
    if (err) throw err
    console.log('gen code-mirror success!')
  })
})
