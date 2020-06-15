import { DirectionalLight } from '../../../vendor/three/build/three.module.js'

export const createLights = () => {
    const light = new DirectionalLight( 'white', 9)
    light.position.set(10, 10, 10)
    return light
}
