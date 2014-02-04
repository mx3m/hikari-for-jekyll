//TODO: implement an equivalent to $(document.ready)
//window.onload will do the job for now.
window.onload = function() {

    var $menuIcon = document.getElementsByClassName("menu-icon")[0],
        $offCanva = document.getElementById('off-canvas');

    $menuIcon.addEventListener('click', function() {
        toggleClass($menuIcon, 'close');
        toggleClass($offCanva, 'toggled');
    }, false);

    function toggleClass(element, className) {
        if (!element || !className) {
            return;
        }

        var classString = element.className,
            nameIndex = classString.indexOf(className);

        if (nameIndex == -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
        }
        element.className = classString;
    }

    // Open Twitter/share in a Pop-Up
    var $popup = document.getElementsByClassName("popup")[0];
    if (!$popup) {
        return;
    }
    $popup.addEventListener('click', function(e) {
        e.preventDefault()
        var width  = 575,
            height = 400,
            left   = (document.documentElement.clientWidth  - width)  / 2,
            top    = (document.documentElement.clientHeight - height) / 2,
            url    = this.href,
            opts   = 'status=1' +
                     ',width='  + width  +
                     ',height=' + height +
                     ',top='    + top    +
                     ',left='   + left;

        window.open(url, 'twitter', opts);

        return false;
    });
}