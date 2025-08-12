/*
BMI (Body Mass Index) =weight (kg)/hight(m)^2    

*/

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#h').value)
    const weight = parseInt(document.querySelector('#w').value)
    const result = document.querySelector('#result')

    if(height ===''||height<=0 || isNaN(height)){
        result.innerHTML ='Please enter valid height'
    }
    else if(weight ===''||weight<=0 || isNaN(weight)){
        result.innerHTML ='Please enter valid weight'
    }
    else{
        const bmi = (weight / (height*height /10000)).toFixed(2);
        // result.innerHTML =`<span>${bmi}</span>`

        // cm*cm /10000 =m*m

        if (bmi<18.50) {
            result.innerHTML= `<span>${bmi} and you are under weight</span>`
        }else if(bmi>=18.50 && bmi <=25){
            result.innerHTML= `<span>${bmi} and you are normal</span>`
        }else if(bmi>25){
            result.innerHTML= `<span>${bmi} and you are obese</span>`
        }
    }

})
