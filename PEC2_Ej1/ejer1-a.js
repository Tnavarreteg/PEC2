const findOne = (list, { key, value }, { onSuccess, onError }) => { // función ES6  recibe tres parámetro un array y dos objetos
    setTimeout(() => {                                              //funcion que recibe dos parametros el primero una función(CALLBACK) y el segundo un lapso de tiempo para que se ejecute
      const element = list.find(element => element[key] === value);  // funcion array.prototype.find encuentra el primer elemento del array que cumpla la condición en este caso el elemento que se encuentra en key que se estrictamente igual a value
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });  // si se encuentra el elemento ejecuta la funcion  onSuccess, si no ejecuta la funcion onError la cual contiene el mensaje de error.
    }, 2000);                                                                       //segundos de ejecución
  };
  
  const onSuccess = ({ name }) => console.log(`user: ${name}`);  // función que recibe en parámetro nombre y devuelve un texto "user: valor_entrada_nombre"
  const onError = ({ msg }) => console.log(msg);                 // función que recibe un parámetro y lo devuelve en pantalla

  const users = [                                                   //Este array esta compuesto por 2 objetos
    {
      name: 'Carlos',
      rol: 'Teacher'
    },
    {
      name: 'Ana',
      rol: 'Boss'
    }
  ];
  
  console.log('findOne success');                                            // imprime en consola 
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });  // prueba una. Uso de la función como entrada el array users, el objeto con lo que se desea buscar(el nombre Carlos) y el otro objeto con los valores que se le asignaron de la función
  
  console.log('findOne error');                                               // imprime en consola 
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });   // prueba dos. Se busca en la lista de usuarios el nombre Fermin e imprime un consola el valor de la funcion OnError ya que no lo encuentra.
  
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  