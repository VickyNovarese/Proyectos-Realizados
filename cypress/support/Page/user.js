//definición de la clase Usuario
class User
{
//Método para realizar una solicitud API para crear un usuario
    createUserApi(userData) {
        return cy.api({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: userData
        });
    }
    //Método para crear un usuario y realizar aserciones
    createUser(userData) {    
        //llama al método crearUsuarioApi para crear un usuario
        this.createUserApi(userData)      
        .then(response => {
        //Guarda la respuesta en la propiedad 'CrearUsuario'
            this.createUser = response.body;
            //Realiza aserciones en la respuesta
            expect(response.status).to.equal(200);
                expect(response.body.id).to.equal(this.createUser.id);
                
                
        });
    }
//Método para realizar una solicitud API para obtener un usuario
    getUserApi(username) {
        return cy.api({
        method: 'GET',
        url: `https://petstore.swagger.io/v2/user/${username}`
        
        });
    }
//Metodo para obteber un usuario y realizar aserciones
    getUser(username){
        this.getUserApi(username)
        .then(response => {
        //Realiza aserciones en la respuesta
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('username');
        expect(response.body).to.have.property('email');
        expect(response.body.username).to.equal(username);
        expect(response.body.id).to.be.a('number');
        //Imprime la respuesta en consola
        cy.log(response);
        

        
        });
    }
    
}
export const user = new User();