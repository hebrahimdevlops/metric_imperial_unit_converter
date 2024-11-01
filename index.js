/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function convertValue(){
    const inputValue = parseFloat(document.getElementById("input-sect").value)
    let lengthOutPut = document.getElementById("length-el")
    let volumeOutPut = document.getElementById("volume-el")
    let massOutPut = document.getElementById("mass-el")
    
    
    
    const lengthConversion = (inputValue * 3.281).toFixed(3)
    const volumeConversion = (inputValue * 0.264).toFixed(3)
    const massConversion   = (inputValue * 2.204).toFixed(3)
    
    if (isNaN(inputValue)) {
        lengthOutPut.textContent = "Length: Please enter a valid number!"
        volumeOutPut.textContent = "Volume: Please enter a valid number!"
        massOutPut.textContent = "Mass: Please enter a valid number!"
        return
    }
    if (inputValue === 1){
        
        lengthOutPut.textContent = `${inputValue} meter
                                = ${lengthConversion} feet | ${inputValue} foot 
                                = ${(inputValue/3.281).toFixed(3)} meters`
                                
    volumeOutPut.textContent = `${inputValue} litre
                                = ${volumeConversion} gallons | ${inputValue} gallon 
                                = ${(inputValue/0.264).toFixed(3)} litres`  
    
    
    massOutPut.textContent = `${inputValue} kilogram
                                = ${massConversion} pounds | ${inputValue} pound 
                                = ${(inputValue/2.204).toFixed(3)} kilograms` 
    
    return
    }
    
    
    
    lengthOutPut.textContent = `${inputValue} meters
                                = ${lengthConversion} feet | ${inputValue} feet 
                                = ${(inputValue/3.281).toFixed(3)} meters`
                                
    volumeOutPut.textContent = `${inputValue} litres
                                = ${volumeConversion} gallons | ${inputValue} gallons 
                                = ${(inputValue/0.264).toFixed(3)} litres`  
    
    
    massOutPut.textContent = `${inputValue} kilograms
                                = ${massConversion} pounds | ${inputValue} pounds 
                                = ${(inputValue/2.204).toFixed(3)} kilograms`                          
    
    
    
    
    
    
}
document.getElementById("convert-btn").addEventListener('click', convertValue)
