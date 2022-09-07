<script lang="ts">
	import quotes from '$lib/quote.json';
	const quote = quotes[Math.floor(Math.random() * quotes.length)];

	console.log(quote);
</script>

<h1 class="text-center text-6xl font-bold">{quote.text}</h1>
<p>{quote.author}</p>
