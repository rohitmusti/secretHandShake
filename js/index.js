function returnData(data){
  string ret = "<div>"
  for (i = 0; i < data.length; i++) {
    ret += "<div id="grabPhrase">" + data[i].grabPhrase + "</div>"
    ret += "<div id="job">" + data[i].job + "</div>"
    ret += "<div id="description">" + data[i].description + "</div>"
    ret += "<div id="degrees">" + data[i].grabPhrase + "</div>"


  }
  ret += "</div>"

  return ret
}
