import { DirectionalLight } from '../../../vendor/three/build/three.module.js'

export const createLights = () => {
    const light = new DirectionalLight( 'white', 7)
    light.position.set(10, 10, 10)
    return light
}
