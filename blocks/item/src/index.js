import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('mvwp/faq-item-block', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	parent: ['mvwp/faq-container-block'],
});
