<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<p>
		This website is <a href="https://github.com/Spimy/english_research_paper_portfolio/"
			>Open Sourced</a
		>
	</p>
	<p>Copyright &copy {year} - All Rights Reserved</p>
</footer>

<style lang="scss">
	.footer {
		background: linear-gradient(
			to bottom,
			var(--clr-background-200) 10%,
			var(--clr-neutral-200) 80%
		);
		text-align: center;
		padding: 2rem var(--content-padding);

		a {
			color: var(--clr-accent-100);
		}
	}
</style>
