import { Mesh } from '../../../../vendor/three/build/three.module.js'

export const createMeshes = (geometries, materials) => {
	const cabin = new Mesh(geometries.cabin, materials.body)
	cabin.position.set(1.5, 1.4, 0)

	const chimney = new Mesh(geometries.chimney, materials.details)
	chimney.position.set(-2, 1.9, 0)

	const nose = new Mesh(geometries.nose, materials.body)
	nose.position.set(-1, 1, 0)
	nose.rotation.z = Math.PI / 2

	const smallWheelRear = new Mesh(geometries.wheel, materials.details)
	smallWheelRear.position.y = 0.5
	smallWheelRear.rotation.x = Math.PI / 2

	const smallWheelCenter = smallWheelRear.clone()
	smallWheelCenter.position.x = -1

	const smallWheelFront = smallWheelRear.clone()
    smallWheelFront.position.x = -2
    const bigWheel = smallWheelRear.clone();
  bigWheel.position.set(1.5, 0.9, 0);
  bigWheel.scale.set(2, 1.25, 2);

	return [cabin, chimney, nose, smallWheelRear, smallWheelFront, smallWheelCenter, bigWheel]
}
