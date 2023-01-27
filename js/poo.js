class Servicio {
 constructor(servicio, precio, cantidadDePersonas, dias){
    this.servicio=servicio;
    this.precio=precio;
    this.cantidadDePersonas=cantidadDePersonas;
    this.dias=dias;
 }
}
//guardar en local storage//
 function guardarLs(arr){
    localStorage.setItem("presupuesto",JSON.stringify(arr));
    almacenamiento.push(arr);
 }
 let almacenamiento=[];

//crear resumen de cada servicio en cards//
 let detalle = document.querySelector(".detalle");
 
 function crearHtml(arr){
    let html="";
    arr.forEach((el) =>{
        const {servicio, precio, cantidadDePersonas, dias}=el;
        html=`<div class="bg-light card w-25 text-center detalleClass">
        <div class="list-group border-dark flex-column bg-dark text-white">Servicio: <br>${servicio}</div>
        <p>Personas: ${cantidadDePersonas}</p>
        <p>Dias: ${dias}</p>
        <p>$${precio}</p>
        </div>`;
        detalle.innerHTML+=html;
    });
 }

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
        diasLimp!=0 ?  limpieza.precio=limpieza.precio*diasLimp : limpieza.precio=0;
        objetos.push(limpieza)

    const desayuno = new Servicio("Desayuno", 350, cantidadDePersonas, diasDesayuno)
        diasDesayuno!=0 ? (desayuno.precio=desayuno.precio*diasDesayuno*cantidadDePersonas) : desayuno.precio=0;
        objetos.push(desayuno)

    const almuerzo = new Servicio("Almuerzo", 500, cantidadDePersonas, diasAlmuerzo)
        diasAlmuerzo!=0 ? almuerzo.precio=almuerzo.precio*diasAlmuerzo*cantidadDePersonas : almuerzo.precio=0;
        objetos.push(almuerzo)

    const cena = new Servicio("Cena", 500, cantidadDePersonas, diasCena)
        diasCena!=0 ? cena.precio=cena.precio*diasCena*cantidadDePersonas : cena.precio=0;
        objetos.push(cena)
    //.reduce recibe un acumulador y un elemento. el acumulador se setea en 0 al final.
    const totalFinal=objetos.reduce((acc,el)=>{
         return acc+el.precio;
    },0)
    //renderizar html, para actualizar las cards sin que se creen otras nuevas,
    let html="";
    detalle.innerHTML=html
    //////////
    document.getElementById('total').innerHTML=(usuario+" El total de los Servicios solicitados es de: $"+totalFinal);

    guardarLs(objetos)
   
    crearHtml(objetos)
    
})
reset.addEventListener('click',()=>{
    localStorage.removeItem("presupuesto")
    document.getElementById('total').innerHTML=("Total: ");
    let html="";
    detalle.innerHTML=html

    //alert
    Swal.fire({
        title: 'Su simulación será reestablecida, Gracias!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })

//lista de precios, info extraida de data.json//
const tabla=document.getElementById('div');

function crearLista(arr){
    let lista="";
    arr.forEach((el) =>{
        const {servicio, precio}=el;
        lista=`<div class="bg-light card text-center w-100 liPrecios">
        <li class="list-group border-dark flex-column bg-dark text-white ">Servicio: <br>${servicio}</li>
        <p>$${precio}</p>
        </div>`;
        div.innerHTML+=lista;
    });
 }


fetch('./data/data.json')
 .then((response)=> response.json())
 .then((data)=>{
   crearLista(data)
  })