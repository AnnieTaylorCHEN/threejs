import { Color, Scene } from '../../../vendor/three/build/three.module.js'

export const createScene = () => {
	const scene = new Scene()

	scene.background = new Color('lightgoldenrodyellow')

	return scene
}

