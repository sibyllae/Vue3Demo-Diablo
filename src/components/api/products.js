import req from '../utils/request.js'

export function getProducts(params = {}){
    return req({
        method:'GET',
        url:'/DiabloJSON/WeaponJSON',
        params,
    })
}