class Pets {
  createUserapi(userData) {
    return cy.api({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: userData
    });
  }

  createUser(userData) {
    
      this.createUserapi(userData)      
      .then(response => {
      this.createdUser = response.body;
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(this.createdUser.id);
            
      });
  }
  getUserByUsername(username) {
    return cy.api({
      method: 'GET',
      url: `https://petstore.swagger.io/v2/user/${username}`
      
    });
  }
  getUser(username){

    this.getUserByUsername(username)
    .then(response => {
      expect(response.status).to.equal(200);
      
    });
  }
  // retrieveSoldPetNames() {

  //   mascotasApi.getSoldPets()
  //   .then(response => {
  //     const soldPets = response.body;
  //     this.soldPetNames = soldPets.map(pet => ({ id: pet.id, name: pet.name }));
  //     cy.log('Nombres de mascotas vendidas:', this.soldPetNames);
  //   });
  // }

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
        
      }
    };
  }


getSoldPets2() {
  return cy.api('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
  
}
contarmascotas() {
  return cy.request('http://petstore.swagger.io/v2/pet/findByStatus?status=sold').then(response => {
    const petData = response.body;
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
    return cy.wrap({ petData, nameCountMap });
  });
}
};
export const pets = new Pets();