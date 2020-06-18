import { World } from './World/World.js'

const main = () => {
	const world = new World()
	const container = document.querySelector('#scene-container')
	container.append(world.canvas)

	world.setSize(
		container.clientWidth,
		container.clientHeight,
		window.devicePixelRatio
	)

	window.addEventListener('resize', () => {
		world.setSize(
			container.clientWidth,
			container.clientHeight,
			window.devicePixelRatio
		)
		world.render()
	})

	world.render()

	
}

main()
