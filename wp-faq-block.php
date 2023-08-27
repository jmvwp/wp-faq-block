<?php
/**
 * Plugin Name: FAQ Block
 * Description: Custom Gutenberg block that allows users to add frequently asked questions in an accordion-style format.
 * Requires at least: 5.8
 * Requires PHP: 8.0
 * Version: 1.0
 * Author: Maksym Viter
 * Author URI: https://github.com/jmvwp
 * License: GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

function mvwp_faq_item_block_init() {
	register_block_type( __DIR__ . '/blocks/container' );
}

add_action( 'init', 'mvwp_faq_item_block_init' );

function mvwp_faq_container_block_init() {
	register_block_type( __DIR__ . '/blocks/item' );
}

add_action( 'init', 'mvwp_faq_container_block_init' );
