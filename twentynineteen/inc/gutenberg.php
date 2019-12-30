<?php

function gutenberg_blocks()
{
    wp_register_script( 'gutenberg-js', get_template_directory_uri() . '/build/index.js', array( 'wp-blocks', 'wp-editor', 'wp-components' ));

    register_block_type( 'brijesh/custom-cta', array(
        'editor_script' => 'gutenberg-js'
    ) );
}
add_action( 'init', 'gutenberg_blocks' );