import * as tf from '@tensorflow/tfjs';

let model;
let scalers;
async function loadModel() {
    model = await tf.loadLayersModel('ppmodel/model.json');
    const res = await fetch('ppmodel/scaler_stats.json');
    scalers = await res.json();
}

window.onload = loadModel;

function normalizeInput(inputArray, mins, maxs)
{
    return inputArray.map((val, i) => {
        return (val-mins[i]) / (maxs[i] - mins[i])
    });
}

async function predictFireDanger(input)
{
    if(!model || !scalers)
    {
        alert("model or scaler not loaded yet");
        return;
    }
    
    const normInput = normalizeInput(input, scalers.mins, scalers.maxs);
    const inputTensor = tf.tensor2d([normInput]);
    const prediction = model.predict(inputTensor);
    const result = prediction.argMax(-1);
    
    return (await result.data())[0];
}

const exampleInput = [78, 45, 60, .1, 30, 20, 15, 800, 3];

setTimeout(async () => {
    const result = await predictFireDanger(exampleInput);
    const labels = ['Low', 'Moderate', 'High', 'Very High', 'Extreme'];
    console.log("Predicted fire danger level:", labels[result]);

    //console.log("predicted fire danger level: ", result);
}, 1000)



