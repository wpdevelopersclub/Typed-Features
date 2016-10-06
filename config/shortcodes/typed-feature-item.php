<?php

/**
 * Typed Feature Item Shortcode - Runtime Configuration Parameters
 *
 * @package     UpTechLabs\TypedFeatures\Shortcode
 * @since       1.0.0
 * @author      hellofromTonya
 * @link        https://UpTechLabs.io
 * @license     GNU General Public License 2.0+
 */
namespace UpTechLabs\TypedFeatures\Shortcode;

return array(
	'autoload'  => true,
	'config'    => array(
		'shortcode' => 'typed_feature_item',
		'view'      => TYPED_FEATURES_PLUGIN_DIR . 'src/Shortcode/views/typed-feature-item.php',
		'defaults'  => array(
			'class'             => '',
			'use_hyperlink'     => true,
			'url'               => '',
			'message'           => '',
		),
	),
);
