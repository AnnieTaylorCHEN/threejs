import { createCamera } from './components/camera.js'
import { createMeshGroup } from './components/meshGroup.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'

import { createControls } from './systems/controls.js'
import { createRenderer } from './systems/renderer.js'
import { update } from './systems/update.js'


// These variables are module-scoped: we cannot access them
// from outside the module
let camera
let renderer
let scene

const updatables = []

export class World {
	constructor() {
		camera = createCamera()
		scene = createScene()
		renderer = createRenderer()

		const controls = createControls(camera, renderer.domElement)

		const meshGroup = createMeshGroup()
		const { ambientLight, mainLight, hemisphereLight} = createLights()
		// updatables.push(cube)
		updatables.push(controls, meshGroup)

		scene.add(mainLight, hemisphereLight, meshGroup)
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

	start() {
		renderer.setAnimationLoop(() => {
			update(updatables)
			this.render()
		})
	}
}
