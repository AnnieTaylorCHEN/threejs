import { OrbitControls } from '../../../vendor/three/examples/jsm/controls/OrbitControls.js'

export const createControls = (camera, canvas) => {
	const controls = new OrbitControls(camera, canvas)

	controls.minDistance = 1
	controls.maxDistance = 10
	controls.enableDamping = true
	controls.autoRotate = false
	controls.autoRotateSpeed = 10
	controls.tick = () => controls.update()
	return controls
}
