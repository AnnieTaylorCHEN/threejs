import {
	MathUtils,
	Mesh,
	MeshStandardMaterial,
	SphereBufferGeometry,
	Group,
} from '../../../vendor/three/build/three.module.js'

const createMaterial = () => {
	const textureLoader = new TextureLoader()
	const texture = textureLoader.load('./assets/textures/uv-test-bw.png')
	const material = new MeshStandardMaterial({ map: texture })
	return material
}

export const createMeshGroup = () => {
	const group = new Group()
	const geometry = new SphereBufferGeometry(0.25, 16, 16)
	const material = new MeshStandardMaterial({ color: 'indigo' })
	const protoSphere = new Mesh(geometry, material)
	group.add(protoSphere)
	for (let i = 0; i < 1; i += 0.05) {
		const sphere = protoSphere.clone()
		sphere.position.x = Math.cos(2 * Math.PI * i)
		sphere.position.y = Math.sin(2 * Math.PI * i)
		sphere.scale.multiplyScalar(0.01 + i)
		group.add(sphere)
	}
	group.scale.multiplyScalar(2)
	const radiansPerSecond = MathUtils.degToRad(30)
	group.tick = (delta) => {
		group.rotation.z -= delta * radiansPerSecond
	}

	return group
}