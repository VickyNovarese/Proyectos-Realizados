

//Importa las clases relacionadas con el Page Object module(POM)
import { pets} from '../../support/Page/Pets.js';
import { user } from  '../../support/Page/user.js'

  describe('Prueba Técnica - Tienda de Mascotas con POM', () => {
   //Define un conjunto de datos para un usuario     
    let usuarioDatos = { 
      "id": 1,    
      "username": "BelenRosa",
      "firstName": "Maria Belén",
      "lastName": "Rosales",
      "email": "RosalesBelen@gmail.com",
      "password": "bele2345",
      "phone": "+346179856257",
      "userStatus": 0
      }
    it('Debería crear y recuperar los datos del usuario', () => {
      //llama a la función del objeto usuario crearUsuario para crear un usuario
      user.createUser(usuarioDatos);
      //llama a una funcion del objeto usuario para obtener y verificar los datos del usuario 
      user.getUser(usuarioDatos.username)

    });
    it('Debería recuperar los nombres de las mascotas vendidas', () => {
      // Llama a una función del objeto 'mascotas' para obtener las mascotas vendidas
      pets.getSoldPets().then((petSold)=>{
        // Mapea los datos de las mascotas vendidas para extraer el ID y el nombre de cada una
        const quantitySold = petSold.body.map(pet => ({ id: pet.id, name: pet.name }));
       // Imprime los datos de las mascotas 
        quantitySold.forEach(pet => {
        cy.log(`Los datos de la mascota son: ID: ${pet.id}, Name: ${pet.name}`);
        });
        //Imprime la lista completa 
        cy.log(quantitySold);
        //Verifica que la lista de mancotas vendidas no esté vacía.
        expect(quantitySold).not.be.empty;
      })
    })
    it('Debería identificar cuantas mascotas se llaman igual.', () => {
      // Llama a una función del objeto 'mascotas' para contar las mascotas
      pets.petCount().then(({ petData, nameCount }) => {
      //Verifica que se haya obtenido información sobre al menos una mascota
        expect(petData.length).to.be.greaterThan(0);
       // Verifica que se haya obtenido información sobre al menos un nombre de mascota
        expect(Object.keys(nameCount).length).to.be.greaterThan(0);
      });
    });
    });
  
  