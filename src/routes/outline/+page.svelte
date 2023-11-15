<script lang="ts">
	import { authors } from '$lib/authors';
</script>

<section class="outline">
	<h1>Outline</h1>

	<header class="outline__header">
		<div class="outline__authors">
			<h2>Group Members</h2>
			<ol>
				{#each authors as author}
					<li>{author.firstName} {author.lastName} ({author.studentId})</li>
				{/each}
			</ol>
		</div>
		<div class="outline__info">
			<h2>Working Title:</h2>
			<p>International Governments Should Sanction Online Gambling amongst the Youth.</p>

			<br />

			<h2>Keywords:</h2>
			<p>
				<a href="https://dictionary.cambridge.org/dictionary/english/online">Online</a>,
				<a href="https://dictionary.cambridge.org/dictionary/english/gambling">Gambling</a>,
				<a href="https://dictionary.cambridge.org/dictionary/english/youth">Youth</a>,
				<a href="https://dictionary.cambridge.org/dictionary/english/international">
					International
				</a>,
				<a href="https://dictionary.cambridge.org/dictionary/english/government">Government</a>,
				<a href=" https://dictionary.cambridge.org/dictionary/english/legality">Legality</a>
			</p>
		</div>
	</header>

	<article class="outline__body">
		<div class="outline__body__intro">
			<h2>Introduction</h2>
			<div class="outline__body__intro__hook">
				<h3>Hook</h3>
				<p>
					The pandemic of online gambling is destroying the lives of today’s youth at a drastically
					increasing rate (Montial et al., 2021).
				</p>
			</div>
			<div class="outline__body__intro__general">
				<h3>General Information</h3>
				<p>
					&lt;Gambling history&gt;. With the rise of IT and internet capabilities, online gambling
					has become increasingly available for anyone with internet access around the world.
				</p>
			</div>
			<div class="outline__body__intro__specific">
				<h3>Specific Information</h3>
				<ol>
					<li>Lose/win money at the comfort of one’s home – higher stakes, higher interest.</li>
					<li>Discuss range of online gambling</li>
					<li>Add market value statistics and growth rate.</li>
				</ol>
			</div>
			<div class="outline__body__intro__thesis">
				<h3>Thesis Statement</h3>
				<p>This essay contains the following arguments:</p>
				<ol>
					<li>Online gambling brings about addiction and mental illnesses.</li>
					<li>Lack of regulations on deceptive marketing and its effects on youth gambling.</li>
					<li>Online gambling brings about negative financial consequences.</li>
					<li>
						Online gambling should indubitably be sanctioned by international government to regulate
						usage among youth, improve online safety and decrease widespread fraud.
					</li>
				</ol>
			</div>
		</div>
	</article>
</section>

<style lang="scss">
	.outline {
		display: grid;
		gap: 2rem;
		padding: 5rem var(--content-padding) 1rem;

		h1 {
			font-size: var(--fs-600);
		}

		p {
			line-height: 2em;
			font-size: 1.25rem;
		}

		&__header {
			h2 {
				text-transform: uppercase;
			}

			h2,
			p {
				display: inline-block;
			}

			a {
				color: var(--clr-accent-100);
			}
		}
	}
</style>
