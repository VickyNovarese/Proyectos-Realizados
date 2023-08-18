
import { pets} from '../../support/Page/mascotas.js';
import { mascotasApi } from '../../support/Page/mascotasApi.js';



  describe('Prueba Técnica - Tienda de Mascotas con POM', () => {
        
    let userData = { 
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
      pets.createUser(userData);
      pets.getUser(userData.username)

    });
    it('Debería recuperar los nombres de las mascotas vendidas', () => {
      pets.getSoldPets2().then((soldPets)=>{
        const soldPetNames = soldPets.body.map(pet => ({ id: pet.id, name: pet.name }));
        soldPetNames.forEach(pet => {
        cy.log(`Los datos de la mascota son: ID: ${pet.id}, Name: ${pet.name}`);
        });
        cy.log(soldPetNames);
        expect(soldPetNames).not.be.empty;
      })
    })
    it.only('Debería identificar cuantas mascotas se llaman igual.', () => {
      pets.contarmascotas().then(({ petData, nameCountMap }) => {
        expect(petData.length).to.be.greaterThan(0);
        expect(Object.keys(nameCountMap).length).to.be.greaterThan(0);
      });
    });
    });
  
  