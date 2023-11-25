const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const pkmnName = form[0].value
    pokedexData(pkmnName)
    
})

const pokedexData = async (pkmnData) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnData}`)
    const data = await response.json()
    document.body.innerHTML = `
        <div class="card border-dark" style="width:400px">
            <img class="card-img-top" src=${data['sprites']['front_default']} alt="Card image">
            <div class="card-body">
                <h4 class="card-name">${data['forms'][0]['name']}</h4>
                <p class="card-ability">${data['abilities'][0]['ability']['name']}</p>
            </div>
        </div>
    `
}