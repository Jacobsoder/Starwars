const obiwanButton = document.querySelector('#obi-button')
const display = document.querySelector('obi-information')

const obiInformation = document.querySelector('.obi-information')
const obiButton = document.querySelector('#obi-button')

obiButton.addEventListener('click', getObiInformation)

async function getObiInformation() {
	const baseUrl = 'https://swapi.dev/api/people/10/'
    const response = await fetch(baseUrl)
	const data = await response.json()
	console.log('Är data bättre?', data)
    const informationOne = 'Name: ' + data.name + '<br>' + 'Height: ' + data.height + '<br>' + 'Mass: ' + data.mass + '<br>' + 'Hair color: ' + data.hair_color +'<br>' + 'Skin color: ' + data.skin_color + '<br>' + 'Eye color: ' + data.eye_color + '<br>' + 'Birth year: ' + data.birth_year + '<br>' + 'Gender: ' + data.gender
    obiInformation.innerHTML = informationOne
}