/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		darkMode: {
			stylePreview: true
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;

