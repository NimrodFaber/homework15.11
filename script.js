  
let postweather=(data)=>{
    $.each(data.main,(key,value)=>{
       let container = $('[data-role="current weather"]')
       container.append(`<div>${key}</div>`)
       container.append(`<div>${value}</div>`)
    })
}


let inputcity=$('[data-role="chose city"]')
debugger
let buttoncity=$('[data-role="choose city"]')

 buttoncity.click(function(){
     
$(this).siblings('div').remove()
/* $(this).siblings('span').remove() */
     getWeather(postweather) 
})
function getWeather(cb) {
   
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${inputcity.val()}&appid=65ebf4d9c27aba4bf063fbb989223963`, data => {
        cb(data)
    })
}


   