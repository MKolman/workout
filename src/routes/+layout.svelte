<!-- Material Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" />
<!-- Roboto -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
<!-- SMUI Styles -->
<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />

<div class="wrapper"><slot /></div>

<style>
	.wrapper {
		max-width: 800px;
		display: flex;
		height: 100%;
		flex-direction: column;
	}
</style>
