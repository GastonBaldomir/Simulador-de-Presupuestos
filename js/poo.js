class Servicio {
 constructor(servicio, precio, cantidadDePersonas, dias){
    this.servicio=servicio;
    this.precio=precio;
    this.cantidadDePersonas=cantidadDePersonas;
    this.dias=dias;
 
 }
}
personas.onclick= ()=> {
   alert("El precio por persona es de $1000 por dia")
}
// function alerta(){
//     alert("funciona");
// }
// personas.onmouseover = ()=>alerta();

calcular.addEventListener('click', ()=> {
    let usuario = document.getElementById('nombre').value;
    let cantidadDePersonas= document.getElementById('personas').value;
    let dias= document.getElementById('dias').value;
    let diasLimp= document.getElementById('diasLimp').value;
    let diasDesayuno= document.getElementById('diasDesayuno').value;
    let diasAlmuerzo= document.getElementById('diasAlmuerzo').value;
    let diasCena= document.getElementById('diasCena').value;


    const objetos=[]
        
    const personas = new Servicio("Hospedaje", 1000,cantidadDePersonas,dias);
        personas.precio= (personas.precio*cantidadDePersonas*dias);//acá podria llamar una funcion multiplicar
        objetos.push(personas)

    const limpieza = new Servicio("Limpieza", 500,0,diasLimp);
        if(diasLimp!=1){
            limpieza.precio=limpieza.precio*diasLimp;
        }
            
        objetos.push(limpieza)
            
    const desayuno = new Servicio("Desayuno", 350, cantidadDePersonas, diasDesayuno)
        if(diasDesayuno!=0){
            desayuno.precio=desayuno.precio*diasDesayuno*cantidadDePersonas;
        }else desayuno.precio=0;
            
        objetos.push(desayuno)

    const almuerzo = new Servicio("Almuerzo", 500, cantidadDePersonas, diasAlmuerzo)
        if(diasAlmuerzo!=0){
            almuerzo.precio=almuerzo.precio*diasAlmuerzo*cantidadDePersonas;
        }else almuerzo.precio=0;
        objetos.push(almuerzo)

    const cena = new Servicio("Cena", 500, cantidadDePersonas, diasCena)
        if(diasCena!=0){
            cena.precio=cena.precio*diasCena*cantidadDePersonas;
        }else cena.precio=0;
        objetos.push(cena)

        const totalFinal=objetos.reduce((acc,el)=>{
                return acc+el.precio;
            },0)
            document.getElementById('total').innerHTML=(usuario+" El total de los Servicios solicitados es de: $"+totalFinal)
            console.log(objetos)
            console.log(totalFinal)
            
})          


