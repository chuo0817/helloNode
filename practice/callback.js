function learn(something) {
  console.log(something)
}

function we (cb, something) {
  something += 'is cool'
  cb(something)
}

we(learn, 'NodeJs')