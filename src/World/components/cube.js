import {
	BoxBufferGeometry,
	Mesh,
	MeshStandardMaterial,
} from '../../../vendor/three/build/three.module.js'

export const createCube = () => {
	// create a geometry
	const geometry = new BoxBufferGeometry(2, 2, 2)

	// create a default (white) Basic material
	const material = new MeshStandardMaterial({color: 'olivedrab'})

	// create a Mesh containing the geometry and material
	const cube = new Mesh(geometry, material)
	cube.rotation.set(-0.3, -0.1, 0.8)

	return cube
}
