import { AmbientLight , DirectionalLight, HemisphereLight } from '../../../vendor/three/build/three.module.js'

export const createLights = () => {
    const ambientLight = new AmbientLight('white', 0.5)
    const hemisphereLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategrey', // dim ground color
        10, // intensity
      )
    const mainLight = new DirectionalLight( 'white', 4)
    mainLight.position.set(10, 10, 10)
    return { ambientLight, mainLight, hemisphereLight }
}
