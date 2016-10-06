<?php
/**
 * Typed Features Runtime Configuration Parameters.
 *
 * @package     UpTechLabs\TypedFeatures
 * @since       1.0.0
 * @author      hellofromTonya
 * @link        https://UpTechLabs.io
 * @license     GNU General Public License 2.0+
 */

namespace UpTechLabs\TypedFeatures;

return array(

	'plugin_activation_keys' => array(),
	
	'register_concretes' => array(),

	'service_providers' => array(

		/****************************
		 * Assets
		 ****************************/
		'script.typed_features'   => array(
			'provider' => 'provider.asset',
			'config'   => TYPED_FEATURES_PLUGIN_DIR . 'config/assets/plugin-build.php',
		),

		/****************************
		 * Shortcodes
		 ****************************/
		'shortcode.typed_feature_item'  => array(
			'provider' => 'provider.shortcode',
			'config'   => TYPED_FEATURES_PLUGIN_DIR . 'config/shortcodes/typed-feature-item.php',
		),
		'shortcode.typed_features'  => array(
			'provider' => 'provider.shortcode',
			'config'   => TYPED_FEATURES_PLUGIN_DIR . 'config/shortcodes/typed-features.php',
		),
	),
);
