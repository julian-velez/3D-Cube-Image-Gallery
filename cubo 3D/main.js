//DOM load event
window.addEventListener("DOMContentLoaded",	() => {
	
	const cube = document.querySelector(".cube"),
		  imageButtons = document.querySelector(".image-buttons");
	let cubeImageClass = cube.classList[1];

	//Add click event listener to image buttons container
	imageButtons.addEventListener("click", e => {
		
		//Get node type and class value of clicked element
		const targetNode = e.target.nodeName,
			  targetClass = e.target.className;

		//Check if image input has been clicked and isn't the currently shown image
		if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
			
			console.log(`Show Image: ${targetClass.charAt(11)}`);

			//Replace previous cube image class with new class
			cube.classList.replace(cubeImageClass, targetClass);

			//Update cube image class variable with new class
			cubeImageClass = targetClass;	
			
		}
		
	});
	
});
