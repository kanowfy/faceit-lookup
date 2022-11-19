<script>
	import '../app.css';
</script>

<div class="font-sans p-5 mx-auto text-slate-100 min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
	<nav class="flex justify-center w-full text-slate-400 font-semibold">
		<a class="mx-2 hover:text-teal-400" href="/" data-sveltekit-prefetch>Home</a>
		<a class="mx-2 hover:text-indigo-400" href="/about">About</a>
	</nav>
	<slot />
</div>
