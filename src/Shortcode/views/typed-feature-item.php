<?php
$class  = $this->atts['class'] ? ' ' . esc_attr( $this->atts['class'] ) : '';

if ( $this->atts['use_hyperlink'] ) :
	$link   = $this->atts['url'] ? esc_attr( $this->atts['url'] ) : ''; ?>
<a href="<?php echo $link; ?>" class="typed-feature-item<?php echo $class; ?>">
<?php else: ?>
<div class="typed-feature-item<?php echo $class; ?>">
<?php endif; ?>
	<span class="message" data-typed-feature-message="<?php esc_html_e( $this->atts['message'] ); ?>"></span><span class="blinker">_</span>
<?php if ( $this->atts['use_hyperlink'] ) : ?>
	</a>
<?php else: ?>
	</div>
<?php endif; ?>