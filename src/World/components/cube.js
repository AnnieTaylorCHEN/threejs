import {
	BoxBufferGeometry,
	MathUtils,
	Mesh,
	MeshStandardMaterial,
} from '../../../vendor/three/build/three.module.js'

export const createCube = () => {
	// create a geometry
	const geometry = new BoxBufferGeometry(2, 2, 2)

	// create a default (white) Basic material
	const material = new MeshStandardMaterial({ color: 'olivedrab' })

	// create a Mesh containing the geometry and material
	const cube = new Mesh(geometry, material)

	const radiansPerSecond = MathUtils.degToRad(3.6)

	cube.position.set(-0.5, -0.1, 1)
	// cube.scale.set(1.25, 0.25, 0.5)

	cube.tick = (delta) => {
		cube.rotation.x += delta * radiansPerSecond
		cube.rotation.y += delta * radiansPerSecond
		cube.rotation.z += delta * radiansPerSecond
	}

	return cube
}
