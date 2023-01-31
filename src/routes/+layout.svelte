<div>
	<slot />
</div>

<style>
	:global(body) {
		background: #fdfdfd;
		display: grid;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		place-content: center;
		margin: 0;
		min-height: 100vh;
	}
	:global(h1, h2, h3, h4, h5) {
		margin: 0;
	}
	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

	div {
		display: block;
		aspect-ratio: 9 / 16;
		max-width: 100%;
		width: 400px;
		box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
		border-radius: 8px;
		position: relative;
	}
</style>
