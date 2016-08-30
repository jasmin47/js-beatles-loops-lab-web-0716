function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = [],
      i
    for (i = 0; i < musicians.length; i++) {
      var musician = musicians[i]
      var instrument = instruments[i]
      musiciansInstruments.push(`${musician} plays ${instrument}`)
      }
    return musiciansInstruments
}

function johnLennonFacts(noPunctuation) {
  var exclamationPoints = [],
      i
  for (i = 0; i < noPunctuation.length; i++) {
    exclamationPoints.push(`${noPunctuation[i]}!!!`)
    }
  return exclamationPoints
}

function iLoveTheBeatles(parameter){
var phrase = "I love the Beatles!",
    i
var array = []
if (parameter > 10) {
  array.push(phrase)
}
else {
  parameter += 1
  for (i = 0; i < parameter; i++) {
    array.push(phrase)
  }

}
return array
}
