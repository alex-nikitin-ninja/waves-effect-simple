var wavesEffectSimple = {
    elementClick: function(e) {
        console.log('click worked...');

        function getClickOffsetElement(evt, element) {
            let el = element,
                x = 0,
                y = 0;
            while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                x += el.offsetLeft - el.scrollLeft;
                y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            
            x = evt.clientX - x;
            y = evt.clientY - y;

            return { x: x, y: y };
        }

        let _that = this;
        let positions = getClickOffsetElement(e, _that);
        _that.insertAdjacentHTML('afterbegin', '<div class="waves-ripple"></div>');
        let rippleEl = _that.firstChild;

        rippleEl.style.left = positions.x + 'px';
        rippleEl.style.top = positions.y + 'px';

        setTimeout(function() {
            rippleEl.className += " animated";
        }, 30);

        setTimeout(function() {
            rippleEl.parentNode.removeChild(rippleEl);
        }, 1280);
    },

    appendClick: function(element) {
        let _wavesEffectSimple = this;
        element.removeEventListener('click', _wavesEffectSimple.elementClick, false);
        element.addEventListener('click', _wavesEffectSimple.elementClick);
    },

    appendClicksForClass: function(className) {
        let _wavesEffectSimple = this;
        let elements = document.querySelectorAll(className);
        for (let k = 0; k < elements.length; k++) {
            let element = elements[k];
            _wavesEffectSimple.appendClick(element);
        }
    },

    appendClicks: function() {
        let _wavesEffectSimple = this;
        _wavesEffectSimple.appendClicksForClass('.waves-effect-simple');
        setTimeout(function() {
            _wavesEffectSimple.appendClicks();
        }, 1500);
    },

    init: function() {
        let _wavesEffectSimple = this;
        document.addEventListener('DOMContentLoaded', function(event) {
            _wavesEffectSimple.appendClicks();
        });
    }
};

wavesEffectSimple.init();