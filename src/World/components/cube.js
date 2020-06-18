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
	cube.position.set(-0.5, -0.1, 1)
	cube.scale.set(1.25, 0.25, 0.5)
	cube.rotation.x = MathUtils.degToRad(-60)
	cube.rotation.y = MathUtils.degToRad(-45)
	cube.rotation.z = MathUtils.degToRad(60)

	return cube
}
