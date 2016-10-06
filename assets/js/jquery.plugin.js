/*!
 * JavaScript|jQuery functions
 *
 * @package     Typed_Features
 * @since       1.0.0
 * @author      WPDevelopersClub and hellofromTonya
 * @link        https://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   2015 WP Developers Club
 */

;(function( $, window, document, undefined ){

    'use_strict';

    var plugin = {};

    plugin.init = function() {
        _typedFeature();
    }

    /**
     PRIVATE FUNCTIONS
     */

    function _typedFeature() {
        var $el = $( '.typed-features' );
        if ( typeof $el !== "undefined" ) {
            $el.each( function( index, el ) {
                $(this).typedFeatures();
            });
        }
    }

    $(document).ready(function () {

        plugin.params = typeof typed_features_l10 === 'undefined' ? '' : typed_features_l10;
        plugin.init();

    });

})(jQuery, window, document);