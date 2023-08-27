import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'mvwp-faq-item-block';
export const BLOCK_HOOK_PREFIX = 'mvwp.faq-item-block';

export const TITLE_TAG = applyFilters(`${BLOCK_HOOK_PREFIX}.title.tag`, 'h4');

export const HAS_TOP_SUBTITLE_DEFAULT = applyFilters(`${BLOCK_HOOK_PREFIX}.has_top_subtitle.default`, false);
export const HAS_BOTTOM_SUBTITLE_DEFAULT = applyFilters(`${BLOCK_HOOK_PREFIX}.has_bottom_subtitle.default`, false);

export const ALLOWED_BLOCKS = applyFilters(`${BLOCK_HOOK_PREFIX}.allowed_blocks`, [
	'core/heading',
	'core/paragraph',
	'core/list',
]);
