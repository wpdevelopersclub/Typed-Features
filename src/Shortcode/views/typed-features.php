<?php
$content = do_shortcode( $this->content );
$content = strip_tags( $content, '<a><span>' );
$content = trim( $content );
?>

<div class="typed-features<?php echo $this->atts['class'] ? ' ' . esc_attr( $this->atts['class'] ) : ''; ?>"><?php echo $content; ?></div>