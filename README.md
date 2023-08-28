# WP FAQ Block

![Plugin Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![WordPress Version](https://img.shields.io/badge/WordPress-5.8%2B-blue.svg)
![License](https://img.shields.io/badge/license-GPL--2.0%2B-blue.svg)

A Gutenberg block for creating FAQ accordions in WordPress.

## Features

- Create and manage FAQ items in an accordion format.
- Customize the question and answer for each FAQ.
- Setup optional block description and optional subtitles for FAQ items
- Simple and user-friendly interface.

## Installation

1. Download the plugin as a ZIP file from the [GitHub repository Releases](https://github.com/jmvwp/wp-faq-block/releases/tag/v1.0.0).
2. In your WordPress admin, go to **Plugins** → **Add New** → **Upload Plugin**.
3. Upload the ZIP file and activate the "WP FAQ Block" plugin.

## Usage

1. In the WordPress Gutenberg editor, add a new block.
2. Look for the "FAQ block" block under the Design Blocks category.
3. Configure the FAQ items by entering questions and answers.
4. Customize the appearance using the block settings.

## Screenshots

![Screenshot 1](https://github.com/jmvwp/wp-faq-block/assets/140622500/967b8a08-7c02-42df-bb05-1382ec22314f)
*Admin Gutenberg editor block view.*

## Frequently Asked Questions

#### How do I customize the appearance of the WP FAQ block?

You can customize the appearance of the WP FAQ block using CSS or using hooks specified in **Development** section. The block provides class names that you can target in your theme's stylesheet.


## Development

The "WP FAQ Block" Gutenberg block consists of Container and inner items blocks, provides the following JavaScript hooks that you can use to customize its behavior:

### FAQ Container Hooks

#### `mvwp.faq-container-block.title.tag`

Filters the container title tag.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-container-block.title.tag', function (tagName) {
    return 'h4'; //default is h3
});
```

#### `mvwp.faq-container-block.has_title.default`
#### `mvwp.faq-container-block.has_description.default`

Set the default container title/description subtitle visibility toggle state.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-container-block.has_title.default', function (hasTitle) {
    return false; //default is true
});

wp.hooks.addFilter('mvwp.faq-container-block.has_description.default', function (hasDescription) {
    return true; //default is false
});
```

#### `mvwp.faq-container-block.always_open.default`

Set the default all container items expanded/collapsed toggle state.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-container-block.always_open.default', function (isAlwaysOpen) {
    return true; //default is false
});
```

#### `mvwp.faq-container-block.template`

Set the basic template for container inner blocks

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-container-block.always_open.default', function (isAlwaysOpen) {
    return [
	    ['mvwp/faq-item-block', {}],
	    ['mvwp/faq-item-block', {}]
    ];
    /*default is
    [
	    ['mvwp/faq-item-block', {}]
    ]
    */
});
```


### FAQ Item Hooks

#### `mvwp.faq-item-block.title.tag`

Filters the item title tag.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-item-block.title.tag', function (tagName) {
    return 'h5'; //default is h4
});
```

#### `mvwp.faq-item-block.has_top_subtitle.default`
#### `mvwp.faq-item-block.has_bottom_subtitle.default`

Set the default top/bottom subtitle visibility toggle state.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-item-block.has_top_subtitle.default', function (hasSubtitle) {
    return true; //default is false
});
```

#### `mvwp.faq-item-block.allowed_blocks`

Set the list of allowed inner blocks.

Example usage:

```javascript
wp.hooks.addFilter('mvwp.faq-item-block.allowed_blocks', function (allowedBlocks) {
    return ['core/heading','core/image'];
    /*default is
    [
     'core/heading',
     'core/paragraph',
     'core/list',
    ]
    */
});
```

## License

This plugin is licensed under the GNU General Public License v2.0 or later.
