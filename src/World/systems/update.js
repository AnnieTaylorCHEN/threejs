import { Clock } from '../../../vendor/three/build/three.module.js'

const clock = new Clock()


export const update = (updatables) => {
    const delta = clock.getDelta()

    for (const object of updatables) {
        object.tick(delta)
    }
}