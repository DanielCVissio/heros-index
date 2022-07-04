import { types } from "../../../src/auth/types/types"



describe('Pruebas en "Types.js"', () => {

    test('debe de regresar estos types',()=>{
        // deben tener las mismas propiedades, y valores
        expect(types).toEqual({
            login:'[Auth] Login',
            logout:'[Auth] Logout',
        })
    });

})