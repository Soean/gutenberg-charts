<?php
/**
 * Plugin Name: Gutenberg Charts
 * Plugin URI: https://github.com/Soean/gutenberg-charts
 * Description: Charts.js impementation for Gutenberg.
 * Version: 0.1.0
 * Author: Sören Wrede
 *
 * @package gutenberg-charts
 */
defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_charts_block_editor_assets' );
function gutenberg_charts_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-charts',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);
	wp_enqueue_script(
        'test',
        plugins_url( 'test.js', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'test.js' )
    );
	wp_enqueue_style(
		'gutenberg-charts-editor',
		plugins_url( 'editor.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_charts_enqueue_block_assets' );
function gutenberg_charts_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-charts',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}