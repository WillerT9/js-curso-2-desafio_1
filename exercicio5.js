let tabuada = prompt('Digite o número que deseja saber a tabuada:');

function numero (numeroP){
    for (let i = 0; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
    }
    
    return(numeroP);
}
numero();