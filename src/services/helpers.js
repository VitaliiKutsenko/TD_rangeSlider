import {inputs, numInputs, progress} from "./elems";
const [inputMin,inputMax] = inputs
const [numMin,numMax] = numInputs

export const setInitialValues = (min = numMin,max = numMax) => {

    progress.style.left = (min.value / parseInt(inputs[0].max)) * 100 + '%'
    progress.style.right = 100 - (max.value / parseInt(inputs[1].max)) * 100 + '%'
    inputMin.value = min.value
    inputMax.value = max.value
}
