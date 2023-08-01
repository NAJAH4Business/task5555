
let form = document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherFunction()
    form.reset()
})
const errorF = document.getElementById('error')
const locationF = document.getElementById('location')
const forecastF = document.getElementById('forecast')

let weatherFunction = async() =>{
    try{
        const address = document.getElementById('address').value
        const res = await fetch('http://localhost:3000/weather?address='+address)
        const data = await res.json()
        console.log(data)
        
        if (data.error) {
            errorF.innerText = data.error;
            setTimeout(() => { locationF.innerText = ""; }, 500);
            setTimeout(() => { forecastF.innerText = ""; }, 1000);
            setTimeout(() => { longitude.innerText = ""; }, 1500);
            setTimeout(() => { latitude.innerText = ""; }, 2000);
          } else {
            setTimeout(() => {locationF.innerText = data.location;}, 500);
            setTimeout(() => { forecastF.innerText = data.forecast;}, 1000);
            setTimeout(() => { longitude.innerText = data.longitude;}, 1500);
            setTimeout(() => { latitude.innerText = data.latitude;}, 2000);
            setTimeout(() => {errorF.innerText = "";}, 500);
          }
    }
    catch(e){
        console.log(e)
    }
}
