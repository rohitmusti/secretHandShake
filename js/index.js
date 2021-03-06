function returnData(data){
  var ret = `<div id='cards'>`

  for (i = 0; i < data.length; i++) {
    ret += `<div id='card-` + ((i % 3) + 1)  + `'>`
    ret += `<div class='grabPhrase'>` + data[i].grab_phrase + `</div>`
    ret += `<div class='job'>` + data[i].job + `</div>`
    ret += `<div class='degrees'>` + data[i].degree + `</div>`
    ret += `<ul class='bullets'>`

    for (j = 0; j < data[i].descriptions.length; j++) {
      ret += `<li id='description'>` + data[i].descriptions[j] + `</li>`
    }
    ret += `</ul>`
    ret += `<br />`
    ret += `</div>`
  }
  ret += `</div>`


  return ret
  // return "michael is here"
}

const TEMP = document.getElementById("main")

window.onload = () => {

  retData = returnData(jobs)
  // retData = "michael was here"

  TEMP.innerHTML = retData

}
