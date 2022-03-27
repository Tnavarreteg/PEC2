function findOne(list, { key, value }){                                                     // función que recibe array de objetos y un objeto
    
  return new Promise((onSuccess,onError)  => {                                               // retorna la creación de una promesa la cual devolverá el valor de onSuccess si el valor se encuentra, de lo contrario devolverá onError
   const element = list.find(element => element[key] === value);                             // se almacena en la constante element el valor que se busca en el array
  

   setTimeout(() => {                                                                        // funcion recibe el valor element y lapso de tiempo para ser ejecutada 
    element ? onSuccess('user: ' + element[key]) : onError('ERROR: Element Not Found');      // si la promesa se cumple devolverá el valor de onSuccess de no ser así devolverá el valor de onError 
   }, 2000);

})};

const users = [                                                                                  // array con objetos
   {
     name: 'Carlos',
     rol: 'Teacher'
   },
   {
     name: 'Ana',

     rol: 'Boss'
   }
 ];


console.log('findOne success');                                                  // imprime en consola
 async function msg1(){                                                          // función creada
   try{
    const msg1 = await findOne(users, { key: 'name', value: 'Carlos'});          //    
    console.log(msg1);                                                           // imprime en consola la constante msg1 que almacena el resultado de la busqueda 
   } catch(error){
     console.log(error);                                                         //imprime en consola mensaje de error en este caso no se cumple
   }  
 }
msg1(); 

console.log('findOne error');                                                    // imprime en consola
async function msg2(){
  try{
   const msg2 = await findOne(users, { key: 'name', value: 'Fermin'});          
   console.log(msg2);                                                            // imprime en consola el valor de msg2 que es el elemento encontrado en este caso no se cumple
  } catch(error){
    console.log(error);                                                          // imprime en consola mensaje de error
  }  
}
msg2();



/*
 findOne success
 findOne error
  //wait 2 seconds
 user: Carlos
 ERROR: Element Not Found
 */
 
 /*modifica el código anterior para eliminar los callbacks y, en su lugar, hacer uso de 
 promesas (hay que crearlas en la función findOne) y consumirlas en el código 
 principal (con las palabras reservadas then y catch). Documenta en el código, línea 
 a línea, que cambios has realizado.*/