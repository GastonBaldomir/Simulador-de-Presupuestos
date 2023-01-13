class Servicio {
 constructor(servicio, precio, cantidadDePersonas, dias){
    this.servicio=servicio;
    this.precio=precio;
    this.cantidadDePersonas=cantidadDePersonas;
    this.dias=dias;

 }
}
 function guardarLs(arr){
    localStorage.setItem("presupuesto",JSON.stringify(arr));
    almacenamiento.push(arr);
 }
 let almacenamiento=[];

 let container = document.querySelector(".container");
 function crearHtml(arr){
    let html;
    arr.forEach((el) =>{
        html=`<ul class="card w-25  text-center">
        <li>Servicio: ${el.servicio}</h3>
        <li>Personas: ${el.cantidadDePersonas}</h3>
        <li>Dias: ${el.dias}</h3>
        <li>$${el.precio}</h3>
        </ul>`;
        container.innerHTML+=html;
    });
 }
// personas.onclick= ()=> {
//    alert("El precio por persona es de $1000 por dia")
// }
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


    let objetos=[]

    const personas = new Servicio("Hospedaje", 1000,cantidadDePersonas,dias);
        personas.precio= (personas.precio*cantidadDePersonas*dias);
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

    document.getElementById('total').innerHTML=(usuario+" El total de los Servicios solicitados es de: $"+totalFinal);

    guardarLs(objetos)
    //localStorage.removeItem("presupuesto") -- podria poner aca tambien el remove, pero no aparece guardado.

    // FUNCION CREAR HTML--
     //crearHtml(...almacenamiento)  CUANDO CREO LA LISTA EL PROGRAMA FUNCIONA SOLO UNA VEZ NO ME DEJA VOLVER A CALCULAR
     // ACA TAMBIIEN PUEDO USAR EL ARRAY "OBJETOS" PERO CREÉ ALMACENAMIENTO PARA USAR EL LOCAL STORAGE
})
reset.addEventListener('click',()=>{
    localStorage.removeItem("presupuesto")
    document.getElementById('total').innerHTML=("Total: ");
    // document.querySelector(".container");
    // let html=document.removeItem(container.innerHTML)
    // container.innerHTML+=html
})
console.log(almacenamiento)
console.log()