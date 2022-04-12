document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://api.imgflip.com/get_memes`
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      const random = Math.floor(Math.random() * 99)
      const meme = data.data.memes[random]
      console.log(meme)
      document.querySelector("#api-title").innerText = `${meme.name}`
      document.querySelector("img").src = meme.url
      document.querySelector("h3").innerText = meme.id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

