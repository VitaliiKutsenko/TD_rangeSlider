import './style.css'
import {formElem, inputs, numInputs, progress} from "./services/elems";
import {numContent} from "./services/vars";
import {setInitialValues} from "./services/helpers";

// setInitialValues - arguments (min,max)

setInitialValues()


numInputs.forEach(input => {

    input.addEventListener('input',(e) => {
        const [minInput,maxInput] = numInputs

        const rangeValues = {}
        rangeValues.min = parseInt(minInput.value)
        rangeValues.max = parseInt(maxInput.value)
        if((rangeValues.max - rangeValues.min >= numContent.gap) && rangeValues.max <= 10000 ){
            if(e.target.className === 'num-min'){
                inputs[0].value = rangeValues.min
                progress.style.left = (rangeValues.min / parseInt(inputs[0].max)) * 100 + '%'

            } else {
                inputs[1].value = rangeValues.max
                progress.style.right = 100 - (rangeValues.max / parseInt(inputs[1].max)) * 100 + '%'
            }
        }
    })
})

inputs.forEach(input => {

    input.addEventListener('input',(e) => {
        const rangeValues = {}
        rangeValues.min = parseInt(inputs[0].value)
        rangeValues.max = parseInt(inputs[1].value)

        if (rangeValues.max - rangeValues.min < numContent.gap) {
            if (e.target.className === 'range-min') {
                inputs[0].value = (rangeValues.max - numContent.gap)
            } else {
                inputs[1].value = (rangeValues.min + numContent.gap)
            }
        }

        else {
            numInputs[0].value = rangeValues.min
            numInputs[1].value = rangeValues.max

            progress.style.left = (rangeValues.min / parseInt(inputs[0].max)) * 100 + '%'
            progress.style.right = 100 - (rangeValues.max / parseInt(inputs[1].max)) * 100 + '%'
        }


    })
})

formElem.addEventListener('submit',async (e) => {
    e.preventDefault()
    const [min,max] = e.target
    const formData = {
        min:min.value,
        max:max.value,
    }
    console.log(JSON.stringify(formData))
    const response = await fetch('#', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    const result = await response.json();

    //
    // let response = await fetch('#', {
    //     method: 'POST',
    //     body: new FormData(formElem)
    // });
    // let result = await response.json();
    //
})