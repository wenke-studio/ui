<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Avatar } from '$lib/components/avatar';
	import IconSrc from './assets/a-b-2.svg';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Main/Avatar',
		component: Avatar,
		tags: ['autodocs'],
		argTypes: {
			src: { type: 'string' },
			alt: { type: 'string' }
		},
		args: {}
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ alt: 'asdf', src: IconSrc }} />
