function returnData(data){


  for (i = 0; i < data.length; i++) {
    var ret = `<div id='card'>`

    ret += `<div id='grabPhrase'>` + data[i].grab_phrase + `</div>`
    ret += `<div id='job'>` + data[i].job + `</div>`
    ret += `<div id='degrees'>` + data[i].degree + `</div>`
    ret += `<ul id='bullets'>`

    for (j = 0; j < data[i].descriptions.length; j++) {
      ret += `<li id='description'>` + data[i].descriptions[j] + `</li>`
    }
    ret += `</ul>`
    ret += `<br />`
    ret += `</div>`
  }


  return ret
  // return "michael is here"
}

const TEMP = document.getElementById("TESTER")

window.onload = () => {

  retData = returnData(jobs)
  // retData = "michael was here"

  TEMP.innerHTML = retData

}
