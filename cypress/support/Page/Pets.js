// Definición de la clase Mascotas
class Pets {
 // Método para obtener las mascotas vendidas a través de una solicitud API
  getSoldPets() {
// Realiza una solicitud API para obtener las mascotas vendidas
    return cy.api('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
}
// Método para contar las mascotas vendidas y sus nombres
petCount() {
// Realiza una solicitud API para obtener las mascotas vendidas
  return cy.request('http://petstore.swagger.io/v2/pet/findByStatus?status=sold').then(response => {
  // Obtiene los datos de mascotas vendidas de la respuesta  
  const petData = response.body;
    let nameCount = {};
  // Itera a través de las mascotas vendidas para contar sus nombres
    petData.forEach(pet => {
      const petName = pet.name;
      if (nameCount[petName]) {
        nameCount[petName]++;
      } else {
        nameCount[petName] = 1;
      }
    });
    // Imprime nombres y sus conteos
    cy.log('Mapeo de nombres y conteos:', nameCount);
    // Devuelve un objeto que contiene los datos de mascotas y conteos
    return cy.wrap({ petData, nameCount });
  });
}
};
// Exporta una instancia de la clase Mascotas para su uso en otros archivos o pruebas
export const pets = new Pets();