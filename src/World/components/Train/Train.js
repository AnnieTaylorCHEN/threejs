import { Group } from '../../../../vendor/three/build/three.module.js'

import { createGeometries } from './geometries.js'
import { createMaterials } from './materials.js'
import { createMeshes } from './meshes.js'

export class Train extends Group {
	constructor() {
		super()
		const geometries = createGeometries()
		const materials = createMaterials()
        const meshes = createMeshes(geometries, materials)
        this.add(...meshes)
	}
}
