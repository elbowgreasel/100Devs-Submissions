document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const random = Math.ceil(Math.random() * 12)
  const dndClass = selectClass(random)
  const url = `https://www.dnd5eapi.co/api/classes/${dndClass}`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("#api-title").innerText = data.index
      document.querySelector("img").src = `./assets/${dndClass}.jpg`
      document.querySelector("h3").innerText = `Hit Die: ${data.hit_die}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function selectClass(num){
  switch(num){
    case 1:
      return "barbarian"
      break
    case 2:
      return "bard"
      break
    case 3:
      return "cleric"
      break
    case 4:
      return "druid"
      break
    case 5:
      return "fighter"
      break
    case 6:
      return "monk"
      break
    case 7:
      return "paladin"
      break
    case 8:
      return "ranger"
      break
    case 9:
      return "rogue"
      break
    case 10:
      return "sorcerer"
      break
    case 11:
      return "warlock"
      break
    case 12:
      return "wizard"
      break
  }
}
