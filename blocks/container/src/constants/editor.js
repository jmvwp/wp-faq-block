import { applyFilters } from '@wordpress/hooks';
import { BLOCK_HOOK_PREFIX } from "./index";

export const TITLE_TAG = applyFilters(`${BLOCK_HOOK_PREFIX}.title.tag`, 'h3');

export const HAS_TITLE_DEFAULT = applyFilters(`${BLOCK_HOOK_PREFIX}.has_title.default`, true);
export const HAS_DESCRIPTION_DEFAULT = applyFilters(`${BLOCK_HOOK_PREFIX}.has_description.default`, false);
export const ALWAYS_OPEN_DEFAULT = applyFilters(`${BLOCK_HOOK_PREFIX}.always_open.default`, false);

export const ALLOWED_BLOCKS = ['mvwp/faq-item-block'];

export const TEMPLATE = applyFilters(`${BLOCK_HOOK_PREFIX}.template`, [['mvwp/faq-item-block', {}]]);
