const findOne = (list, { key, value }) => {                                                     // función que recibe array de objetos y un objeto
    
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

console.log('findOne success');                                                                   // imprime en consola
findOne(users, { key: 'name', value: 'Carlos' })                                                  //llamada de la función finOne en la cual recibe el array y el objeto con los valores a evaluar
.then( element => console.log(element))                                                           //.then recibe el elemento e imprime por consola element el cual esta enlazado a el valor de onSuccess
.catch( error => console.error(error))                                                            // 

console.log('findOne error');                                                                     // imprime en consola
findOne(users, { key: 'name', value: 'Fermin' })                                                  // llamada de la función finOne en la cual recibe el array y el objeto con los valores a evaluar
.then( element => console.log(element))                                                           //
.catch( error => console.log(error))                                                               //.catch recibe un error lo que hace que imprima por consola el valor de onError 


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