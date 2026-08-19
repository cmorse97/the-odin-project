const imageCarousel = (() => {
	const itemClassName = 'carousel__photo'
	const items = document.getElementsByClassName(itemClassName)
	let totalItems = items.length
	let slide = 0
	let moving = true

	// Set classess
	function setInitialClasses() {
		// Target prev, curr, and next items
		// Hardcoded to have 3 items currently
		items[totalItems - 1].classList.add('prev')
		items[0].classList.add('active')
		items[1].classList.add('next')
	}

	// Set event listeners
	function setEventListeners() {
		const next = document.getElementsByClassName('carousel__button--next')[0]
		const prev = document.getElementsByClassName('carousel__button--prev')[0]

		next.addEventListener('click', moveNext)
		prev.addEventListener('click', movePrev)
	}

	// Next nav handler
	function moveNext() {
		// Check if moving
		if (!moving) {
			// If last slide, reset to 0, else +1
			if (slide === totalItems - 1) {
				slide = 0
			} else {
				slide++
			}

			// Move carousel to updated slide
			moveCarouselTo(slide)
		}
	}

	// Prev nav handler
	function movePrev() {
		// Check if moving
		if (!moving) {
			// If first slide, set as last slide, else -1
			if (slide === 0) {
				slide = totalItems - 1
			} else {
				slide--
			}

			// Move carousel to updated slide
			moveCarouselTo(slide)
		}
	}

	function disableInteraction() {
		// Set 'moving' to true for same duration as transiton. (0.5s = 500ms)
		moving = true

		setTimeout(() => {
			moving = false
		}, 500)
	}

	function moveCarouselTo(slide) {
		// Check if carousel is moving
		if (!moving) {
			// Temp disable interaction
			disableInteraction()

			let newPrev = slide - 1
			let newNext = slide + 1
			let oldPrev = slide - 2
			let oldNext = slide + 2

			// Test if carousel has more than 3 items
			if (totalItems - 1 > 3) {
				// Checks and updates if new slides are out of bounds
				if (newPrev <= 0) {
					oldPrev = totalItems - 1
				} else if (newNext >= totalItems - 1) {
					oldNext = 0
				}

				// Checks and updates if slide is at start/end
				if (slide === 0) {
					newPrev = totalItems - 1
					oldPrev = totalItems - 2
					oldNext = slide + 1
				} else if (slide === totalItems - 1) {
					newPrev = slide - 1
					newNext = 0
					oldNext = 1
				}

				// Reset old next/prev to default classes
				items[oldPrev].className = itemClassName
				items[oldNext].className = itemClassName

				// Add new classes
				items[newPrev].className = itemClassName + ' prev'
				items[slide].className = itemClassName + ' active'
				items[newNext].className = itemClassName + ' next'
			}
		}

		function initCarousel() {
			setInitialClasses()
			setEventListeners()

			moving = false
		}

		initCarousel()
	}
})()

export default imageCarousel
