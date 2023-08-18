import {mascotasApi} from './mascotasApi'


class Pets {
  
  createUser(userData) {
    
      mascotasApi.createUser(userData)
      .then(response => {
      this.createdUser = response.body;
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(this.createdUser.id);
            
      });
  }
  getUser(username){

    mascotasApi.getUserByUsername(username)
    .then(response => {
      expect(response.status).to.equal(200);
      
    });
  }
  retrieveSoldPetNames() {

    mascotasApi.getSoldPets()
    .then(response => {
      const soldPets = response.body;
      this.soldPetNames = soldPets.map(pet => ({ id: pet.id, name: pet.name }));
      cy.log('Nombres de mascotas vendidas:', this.soldPetNames);
    });
  }

  createPetAnalyzer(petData) {
    return {
      findDuplicateNames() {
        const nameCountMap = {};
        petData.forEach(pet => {
          const name = pet.name;
          if (nameCountMap[name]) {
            nameCountMap[name]++;
          } else {
            nameCountMap[name] = 1;
          }
        });
        return nameCountMap;
      }
    };
  }

/* identifyDuplicatePetNames() {  
  
  pets.retrieveSoldPetNames().then(response => {
    const responseJson = response.body;
    const petAnalyzer = createPetAnalyzer(responseJson);
    const duplicateNames = petAnalyzer.findDuplicateNames();
    console.log('Nombres de mascotas iguales:', duplicateNames);
  });
}; */

getSoldPets2() {
  return cy.api('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
  // .then(response=>{
  //   const soldPets = response.body;
  //   
}
contarmascotas() {
  cy.api('http://petstore.swagger.io/v2/pet/findByStatus?status=sold').then(response => {
    const petData = response.body;
    cy.log(petData);
    let nameCountMap = {};
    petData.forEach(pet => {
      const name = pet.name;
      if (nameCountMap[name]) {
        nameCountMap[name]++;
      } else {
        nameCountMap[name] = 1;
      }
    });


    cy.log('Mapa de nombres y conteos:', nameCountMap);
    expect(petData.length).to.be.greaterThan(0);
    expect(Object.keys(nameCountMap).length).to.be.greaterThan(0);
    const somePetName = 'NombreMascotaEjemplo';
    //expect(nameCountMap[somePetName]).to.equal(2); // Cambia 2 por el conteo que esperas

  });
}

};


export const pets = new Pets();