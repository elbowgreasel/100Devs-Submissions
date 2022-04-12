document.querySelector('#big-button').addEventListener('click', getFetch)
document.querySelector('#arrow-left').addEventListener('click', selectPrevious)
document.querySelector('#arrow-right').addEventListener('click', selectNext)

let total = 0;

function getFetch() {
  const url = `https://api.magicthegathering.io/v1/cards`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      const card = data.cards[total]
      console.log(card)
      document.querySelector("#api-title").innerText = card.name
      document.querySelector("img").src = card.imageUrl
      document.querySelector("#mana-cost").innerText = card.manaCost
      document.querySelector("#original-text").innerText = card.originalText
      document.querySelector("#original-type").innerText = card.originalType
      document.querySelector("#stats").innerText = `Power:${card.power} || Toughness:${card.toughness}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function selectNext() {
  if(total === 99){
    total = 0
  }
  else{
    total += 1
  }
  getFetch()
}

function selectPrevious() {
  if(total === 0){
    total = 99
  }
  else{
    total -= 1
  }
  getFetch()
}

