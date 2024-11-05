const getLocation= document.getElementById('currentLocation');

async function sucessLocated(position){
await console.log(position);
localStorage.setItem('latitude',position.coords.latitude, position.coords.longitude);
localStorage.setItem('longitude',position.coords.longitude);
};

function errorLocated(){
    console.log("there is some error in locating (^<>^) ");
}

getLocation.addEventListener('click',async ()=>{
    navigator.geolocation.getCurrentPosition(sucessLocated, errorLocated);
})