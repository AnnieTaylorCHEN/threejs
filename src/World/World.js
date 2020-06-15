import { createCamera } from './components/camera.js'
import { createCube } from './components/cube.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'

import { createRenderer } from './systems/renderer.js'

// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene

export class World {
	constructor() {
		camera = createCamera()
		scene = createScene()
		renderer = createRenderer()

		const cube = createCube()
		const light = createLights()

    scene.add(cube, light)
    this.canvas = renderer.domElement
	}

	render() {
		renderer.render(scene, camera)
	}

	setSize(width, height, pixelRatio) {
		// Set the camera's aspect ratio
		camera.aspect = width / height

		// update the camera's frustum
		camera.updateProjectionMatrix()

		// update the size of the renderer AND the canvas
		renderer.setSize(width, height)

		// set the pixel ratio (for mobile devices)
		renderer.setPixelRatio(pixelRatio)
	}
}
