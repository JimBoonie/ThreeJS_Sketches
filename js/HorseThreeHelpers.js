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
    /*  Stores mouse coordinates in a global 'mouse' variable. Variable mouse must exist.
        The origin is roughly the center of the screen.
    
        Example usage:
        var mouse;
        document.addEventListener('mousemove', onEventGetMouseCoordinates, false);
    */
    event.preventDefault();
    
    mouse.x = (event.clientX / window.innerWidth)*2 - 1;
    mouse.y = -(event.clientY / window.innerHeight)*2 + 1;
}

function navigateToLinkOnIntersectedObject() {
    if (current_intersected && current_intersected.hyperlink) {
        window.location.href = current_intersected.hyperlink;
    }
}

function mouseIntersectBehavior() {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
        if (current_intersected != intersects[0].object) {
            if (current_intersected && current_intersected.onIntersect) {
                current_intersected.onIntersect();
            }
            current_intersected = intersects[0].object;
            if (current_intersected && current_intersected.onLeaveIntersect) {
                current_intersected.onLeaveIntersect();
            }
        }
    } else {
        if (current_intersected && current_intersected.onIntersect) {
            current_intersected.onIntersect();
        }
        current_intersected = null;
    }
}
