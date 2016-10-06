/*!
 * JavaScript|jQuery functions
 *
 * @package     Write One Character at a Time
 * @since       1.0.0
 * @author      WPDevelopersClub and hellofromTonya
 * @link        https://wpdevelopersclub.com/
 * @license     GNU General Public License 2.0+
 * @copyright   wpdc.dev
 */

;(function( $, window, document, undefined ){

    'use_strict';

    var pluginName  = 'typedFeatures',
        version     = '1.0.0';

    function Plugin(el, options) {

        this.el = el;
        this.$el = $(el);
        this.settings = $.extend( {}, $.fn[pluginName].defaults, options );
        this._name = pluginName;

        this.$items = [];
        this.numberItems = 0;
        this.currentItem = 0;
        this.numberLoops = 0;

        this.timeouts = {
            typing      : 0,
            nextMessage : 0
        };

        this.$currentItem = null;
        this.$currentItemMessage = null;

        // Time to blast off
        this.init();
    }

    $.extend(Plugin.prototype, {

        init: function () {
            this.$items = this.$el.children('.typed-feature-item');

            if ( typeof this.$items === "undefined" ) {
                return false;
            }

            this.numberItems = this.$items.length;

            _getNextItem.call( this );
        },

        /**
         * Release all memory, unbind events, & remove from the DOM
         *
         * @since  1.0.0
         *
         * @return false
         */
        destroy: function () {
            _removePlugin.call(this, true);
        },

        remove: function() {
            _removePlugin.call(this, false);
        }
    });

    /*
     ============================
     PRIVATE FUNCTIONS
     ============================
     */

    function _getNextItem() {

        if ( this.currentItem < this.numberItems && ( this.settings.numloops == -1 || this.numberLoops < this.settings.numloops ) )

        var item = this.$items[ this.currentItem ];
        if ( typeof item !== "undefined" ) {
            this.$currentItem = $( item );
            if ( typeof this.$currentItem !== "undefined" ) {
                this.$currentItemMessage = this.$currentItem.children('.message');
            }
            _messageHandler.call( this );
        }

        return false;
    }


    function _nextMessage() {

        var _this = this;

        _this.timeouts.nextMessage = setTimeout( function() {
            // Reset the previous message
            _this.$currentItem.removeClass( 'current' );
            _this.$currentItemMessage.empty();

            // Set the next message
            _setCurrentItem.call( _this );

            // Time to do the next message
            _getNextItem.call( _this );

            clearInterval( _this.timeouts.nextMessage );

        }, _this.settings.messageDelay );
    }

    function _messageHandler() {

        var message = this.$currentItemMessage.data( 'typedFeatureMessage');

        if ( typeof message === "undefined" ) {
            return false;
        }

        this.$currentItem.addClass( 'current' );

        _typing.call( this, message.split("") );

        message = null;

        return false;
    }

    function _setCurrentItem() {

        if ( this.currentItem < this.numberItems - 1 ) {
            this.currentItem++;
        } else {
            this.currentItem = 0;

            if ( this.settings.numloops > -1 ) {
                this.numberLoops++;
            }
        }
    }

    function _typing( messageChars ) {

        var currentChar = 0,
            _this = this,
            itemText = _this.$currentItemMessage.text();

        _this.timeouts.typing = setInterval( function() {

            if ( currentChar < messageChars.length ) {
                itemText += messageChars[ currentChar++ ];
                _this.$currentItemMessage.text( itemText );

            // All done. Call next one.
            } else {
                clearInterval( _this.timeouts.typing );
                _nextMessage.call( _this );
            }
        }, _this.settings.typingDelay );
    }

    /**
     * Remove the plugin from the DOM
     *
     * @since  1.0.0
     *
     * @return false
     */
    function _removePlugin() {

        //var _this = this;

    }

    /*
     ----------------------------
     PLUGIN FUNCTION
     ----------------------------
     */

    $.fn[pluginName] = function() {
        var args = Array.prototype.slice.call(arguments, 0),
            allowedMethods = ["destroy", "remove"],
            $element = $(this);

        if ( args.length === 0 || typeof args[0] === 'object' ) {
            return this.each( function() {
                var instance = $.data($element, pluginName);

                if ( typeof instance === "undefined" || instance == null ) {
                    var options = args.length === 0 ? {} : $.extend({}, args[0]);
                    $.data($element, pluginName, new Plugin( $element, options ));
                }
                instance = null;
            });
        }
        else {
            var returns;
            this.each(function() {
                var methodName = args[0];
                if ( typeof methodName === 'string' ) {
                    if ( $.inArray(methodName, allowedMethods) > -1 ) {
                        var instance = $.data($element, pluginName);

                        if ( instance instanceof Plugin && typeof instance !== "undefined" ) {
                            returns = instance[methodName].apply(instance, args.slice(1));

                            if ( methodName == 'destroy' || methodName == 'remove' ) {
                                $.data($element, pluginName, null);
                            }
                        }
                        instance = null;
                    }
                    else {
                        throw 'Unknown method ' + methodName + ' passed to ' + pluginName;
                    }
                }
                else {
                    throw 'Invalid arguments passed to ' + pluginName + ' plugin ' + args;
                }
                methodName = null;
            });

            return (typeof returns === "undefined") ? this : returns;
        }
    };

    $.fn[pluginName].defaults = {
        messageDelay : 3000,
        typingDelay : 200,
        numloops : -1
    };

})(jQuery, window, document);