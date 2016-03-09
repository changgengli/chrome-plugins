function print_iframe() {
    window.frames[0].window.frames[0].document.body.style.cssDisplay='inline';
    window.frames[0].window.frames[0].print();
}
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; 
    }
    var handled = false;
    if (event.keyIdentifier !== undefined) {
        if(event.keyIdentifier == "F6") {
            print_iframe();
            handled = true;
        } 
    } 
    if (handled) {
        event.preventDefault();
    }
}, true);

