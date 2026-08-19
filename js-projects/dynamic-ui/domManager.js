import dropdownMenu from './dropdown.js'
import imageCarousel from './carousel.js'

const domManager = (() => {
	const appContainer = document.getElementById('app')

	const menuCreator = ([...options], menuId, triggerId) => {
		const menuContainer = document.createElement('div')
		menuContainer.classList.add('menu-container')

		const menuBtn = document.createElement('button')
		menuBtn.classList.add('dropdown-btn')
		menuBtn.id = triggerId
		menuBtn.textContent = 'click me'

		const menu = document.createElement('menu')
		menu.classList.add('hidden')
		menu.id = menuId

		const menuItems = [...options]
		menuItems.forEach(item => {
			const li = document.createElement('li')
			li.innerHTML = `<a href='${item}'>${item}</a>`
			menu.appendChild(li)
		})

		menuContainer.appendChild(menuBtn)
		menuContainer.appendChild(menu)
		appContainer.appendChild(menuContainer)

		return
	}

	const render = () => {
		const menu = document.getElementById('dropdown-menu')
		const btn = document.getElementById('dropdown-menu-trigger')

		const options = ['Edit', 'Delete', 'Share']
		menuCreator(options, 'options-menu', 'options-menu-trigger')
		const optionsMenu = document.getElementById('options-menu')
		const optionsMenuTrigger = document.getElementById('options-menu-trigger')

		dropdownMenu(btn, menu)
		dropdownMenu(optionsMenuTrigger, optionsMenu)
		imageCarousel
	}

	return { render }
})()

export default domManager
