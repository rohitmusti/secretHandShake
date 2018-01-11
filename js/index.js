function returnData(data){
  var ret = `<div id='card'>`

  for (i = 0; i < data.length; i++) {
    ret += `<div id='grabPhrase'>` + data[i].grab_phrase + `</div>`
    ret += `<div id='job'>` + data[i].job + `</div>`
    ret += `<ul id='bullets'>`

    for (j = 0; j < data[i].descriptions.length; j++) {
      ret += `<li id='description'>` + data[i].descriptions[j] + `</li>`
    }
    ret += `</ul>`
    ret += `<div id='degrees'>` + data[i].degree + `</div>`
  }

  ret += `</div>`

  return ret
  // return "michael is here"
}

const TEMP = document.getElementById("TESTER")

window.onload = () => {

  retData = returnData(jobs)
  // retData = "michael was here"

  TEMP.innerHTML = retData

}
