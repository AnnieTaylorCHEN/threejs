import { WebGLRenderer } from '../../../vendor/three/build/three.module.js'

export const createRenderer = () => {
	const renderer = new WebGLRenderer({ antialias: true })
	renderer.physicallyCorrectLights = true

	return renderer
}
