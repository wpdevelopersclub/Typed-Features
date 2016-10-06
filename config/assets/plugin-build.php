<?php
/**
 * Minimized Fulcrum Site build runtime configuration parameters
 *
 * @package     UpTechLabs\FulcrumSite\Asset\Repo;
 * @since       1.0.0
 * @author      hellofromTonya
 * @link        https://UpTechLabs.io
 * @license     GNU General Public License 2.0+
 */

namespace UpTechLabs\TypedFeatures\Asset\Repo;

use UpTechLabs\TypedFeatures\Plugin;

return array(
	'is_script' => true,
	'handle'    => 'typed_feature_js',
	'config'    => array(
		'file'      => TYPED_FEATURES_PLUGIN_URL . 'assets/build/jquery.plugin.min.js',
		'deps'      => array( 'jquery' ),
		'version'   => Plugin::VERSION,
		'in_footer' => true,
		'localize'  => array(
			'params'      => array(
				'messageDelay' => 3000,
				'typingDelay'  => 100,
				'numloops'     => - 1,
			),
			'js_var_name' => 'typed_features_l10',
		),
	),
);
