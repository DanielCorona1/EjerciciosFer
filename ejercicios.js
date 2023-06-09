// Ejercicios

/*Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.
*/

/////////////////////////////////////////////////
//1. Calcular el cuadrado de un número.
function cuadrado(numero){  
    return "el cuadrado del numero es " + numero*numero;
    }
    console.log(cuadrado(5));
// Funcion Flecha
const cuadradoflecha = (numero) =>{  
    return "el cuadrado del numero es " + numero*numero;
    }
    console.log(cuadradoflecha(5));
/////////////////////////////////////////////
//2. Escribir un código que convierta de grados celsius a grados farenheit  
function celcius(n1){  
    let farenheit = (n1 * 1.8) + 32;
    return farenheit + "° fahrenheit" ;
}
console.log(celcius(40));
// Funcion Flecha
const celciusflecha = (n1) => {  
    return ((n1 * 1.8) + 32) + "° fahrenheit";
}
console.log(celciusflecha(40));
///////////////////////////////////////////
//3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.
function voltaje(corriente, resistencia){
    let voltaje = corriente * resistencia;
    return "el voltaje es " + voltaje;
}
    console.log(voltaje(6, 6));
    // Funcion Flecha
const voltajeflecha = (corriente, resistencia) => {
    return "el voltaje es " + (corriente * resistencia);
}
    console.log(voltajeflecha(5, 6));
///////////////////////////////////
//4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
function cubo(L1){
    let cubo = L1*L1*L1
    return "El volumen del cubo es "  + cubo;
}
    console.log(cubo(3));
    // Funcion Flecha
const cuboflecha =(L1) => {
    
    return "El volumen del cubo es "  + L1*L1*L1;
}
    console.log(cuboflecha(4));    
///////////////////////////////////////
//5. Calcular el área de un triángulo
function triangulo(base, altura){
    let area = (base * altura)/2;
    return "El area del triangulo es " + area;
}
    console.log(triangulo(3, 4));
     // Funcion Flecha
const trianguloflecha = (base, altura)=>{

return "El area del triangulo es " + (base * altura)/2;
}
console.log(trianguloflecha(3, 3));    
//////////////////////////////////////////////
//6. Calcular el volumen de una esfera
function esfera(radio){
    let volumen = ((4/3)*3.1416*radio*radio*radio)
    return "El volumen de la esfera es " + volumen;
}
    console.log(esfera(5));
 // Funcion Flecha
    const esferaflecha = (radio) => {
         
        return "El volumen de la esfera es " + ((4/3)*3.1416*radio*radio*radio);
    }
        console.log(esferaflecha(4));
///////////////////////////////////////////////
//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()
function cadena(texto){
    let textoMayusculas = texto.toUpperCase();
    return textoMayusculas;
}
    console.log(cadena("Hola daniel como estas?"))
 // Funcion Flecha
const cadenaflecha = (texto) =>{
    let textoMayusculas = texto.toUpperCase();
    return texto.toUpperCase();
}
    console.log(cadenaflecha("daniel como estas?"))
/////////////////////////////////////////////////////////