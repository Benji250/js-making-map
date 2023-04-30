// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution:
// 			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 		minZoom: '15',
// }).addTo(map);

// const marker = L.marker([51.5, -0.09]).addTo(map);



//map object

// get coordinates via geolocation api
const myMap = {
    coordinates: [],
	businesses: [],
	map: {},
	markers: {},

    buildMap() {
		this.map = L.map('map', {
		center: this.coordinates,
		zoom: 12,
		});
		// add openstreetmap tiles
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		minZoom: '15',
		}).addTo(this.map)
		// create and add geolocation marker
		const marker = L.marker(this.coordinates)
		marker
		.addTo(this.map)
		.bindPopup('<p1><b>You are here</b><br></p1>')
		.openPopup()
	},

}

// get coordinates via geolocation api
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

window.onload = async () =>{
    const coords = await getCoords()
	myMap.coordinates = coords
	myMap.buildMap()
}








//const circle = L.circle([51.508, -0.11], {
   // color: 'red',
   // fillColor: '#f03',
    //fillOpacity: 0.5,
    //radius: 500
//}).addTo(map);
