//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const drink = document.querySelector('input').value

  if(drink.trim() === ""){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const drank = data.drinks[0]
        console.log(drank)
        document.querySelector("h2").innerText = drank.strDrink
        document.querySelector("img").src = drank.strDrinkThumb
        document.querySelector("h3").innerText = drank.strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
  }
  else{
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          const drank = data.drinks[0]
          console.log(drank)
          document.querySelector("h2").innerText = drank.strDrink
          document.querySelector("img").src = drank.strDrinkThumb
          document.querySelector("h3").innerText = drank.strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
}