function HorseLoader() {
	var manager = new THREE.LoadingManager();
	manager.onProgress = function(xhr) {
		if (xhr.lengthComputable) {
			var percentComplete = xhr.loaded/xhr.total*100;
			console.log(Math.round(percentComplete, 2) + '% downloaded');
		}
	};
	manager.onError = function(xhr) {
		console.error(xhr);
	};
	return manager;
}

function onEventGetMouseCoordinates(event) {
	event.preventDefault();
	
	mouse.x = (event.clientX / window.innerWidth)*2 - 1;
	mouse.y = -(event.clientY / window.innerHeight)*2 + 1;
}

