<script lang="ts">
</script>

<div class="hero">
	<div class="content">
		<h1>Online Gambling</h1>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt itaque, molestias voluptatem
			obcaecati temporibus dignissimos praesentium repellendus corporis sit aliquid laborum magnam
			incidunt laudantium est nulla eaque molestiae doloribus? Quibusdam!
		</p>
		<a href="#about" class="btn">About</a>
	</div>
</div>

<style lang="scss">
	.hero {
		font-size: var(--fs-400);
		background-image: url('/hero.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		background-color: hsla(0, 0%, 0%, 0.2);
		background-blend-mode: multiply;
		height: 100svh;
		display: grid;
		align-items: center;
		margin: 0 calc(var(--content-padding) * -1);
		padding: 0 var(--content-padding);

		.content {
			max-width: 75ch;

			> * {
				margin-block-start: 1rem;
			}
		}
	}
</style>
