import { MeshStandardMaterial, Mesh} from '../../../../vendor/three/build/three.module.js'

export const createMaterials = () => {
    const body = new MeshStandardMaterial({
        color: 'pink',
        flatShading: true,
    })

    const details = new MeshStandardMaterial({
        color: 'darkslategray',
        flatShading: true
    })

    return { body, details }
}