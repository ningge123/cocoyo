import $ from 'jquery'
window._ = import('lodash')
window.Popper = import('popper.js').default

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = $

    import('bootstrap')
    // import('jquery-sparkline')
    // import('chart.js')
    // import('chocolat')
    // import('summernote')
    // import('owl.carousel')
    // import('jquery.nicescroll')
    // import('moment')
    // import('./assets/js/stisla')
    // import('./assets/js/scripts')

    // check if the implementation is available
    if (typeof Promise.prototype['finally'] !== 'function') {
        // implementation
        // eslint-disable-next-line no-extend-native
        Promise.prototype['finally'] = function (callback) {
            const constructor = this.constructor

            return this.then(
                function (value) {
                    return constructor.resolve(callback()).then(function () {
                        return value
                    })
                },
                function (reason) {
                    return constructor.resolve(callback()).then(function () {
                        throw reason
                    })
                }
            )
        }
    }
} catch (e) {
    throw e
}