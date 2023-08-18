
class MascotasApi {
  
    createUser(userData) {
      return cy.api({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: userData
      });
    }
  
    getUserByUsername(username) {
      return cy.api({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/user/${username}`
        
      });
    }
  
    getSoldPets() {
      return cy.api('https://petstore.swagger.io/v2/pet/findByStatus?status=sold');
    }

  }
  
  export const mascotasApi = new MascotasApi();