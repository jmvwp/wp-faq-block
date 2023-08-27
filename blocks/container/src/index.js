import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('mvwp/faq-container-block', {
	apiVersion: 2,
	supports: {
		align: ['wide', 'full'],
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			title: __('Frequently Asked Questions', 'mvwp-blocks'),
			hasDescription: true,
			description: __('This is a description.', 'mvwp-blocks'),
		},
		innerBlocks: [
			{
				name: 'mvwp/faq-item-block',
				attributes: {
					title: __('Question 1', 'mvwp-blocks'),
					defaultOpen: true,
				},
				innerBlocks: [
					{
						name: 'core/paragraph',
						attributes: {
							content: __('This is the answer on the first question.', 'mvwp-blocks'),
						},
					},
				],
			},
			{
				name: 'mvwp/faq-item-block',
				attributes: {
					title: __('Question 2', 'mvwp-blocks'),
					hasTopSubtitle: true,
					topSubtitle: __('Question category', 'mvwp-blocks'),
					hasBottomSubtitle: true,
					bottomSubtitle: __('- Answer author', 'mvwp-blocks'),
				},
			},
		],
	},
});
