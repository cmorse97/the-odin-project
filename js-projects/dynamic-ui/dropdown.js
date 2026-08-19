export default function dropdownMenu(triggerEl, menuEl) {
	// Get menu element by id
	const menu = document.getElementById(menuEl.id)
	// Get trigger element by class
	const trigger = document.getElementById(triggerEl.id)
	// Listen for a 'click' event of the trigger to toggle the 'hidden' class on the menu.
	trigger.addEventListener('click', () => {
		console.log('Clicked from the dropdown function')
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden')
		} else {
			menu.classList.add('hidden')
		}
	})
}
