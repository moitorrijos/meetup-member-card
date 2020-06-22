<?php
/**
 * Plugin Name: Meetup Team Member Block
 * Plugin URI: https://github.com/moitorrijos.com/meetup-member-card/
 * Description: Bloque Tipo Tarjeta para el nuevo editor de WordPress.
 * Author: moitorrijos, ahmadawais
 * Author URI: https://moitorrijos.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
