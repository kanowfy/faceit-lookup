<script>
	import Profile from '../components/Profile.svelte';
	export let data;
	const { profile } = data;
</script>

<h1 class="text-5xl font-bold text-center p-6">Faceit Profile Lookup</h1>

<form method="POST" class="flex justify-center p-6">
	<input
		class="text-lg shadow border rounded text-gray-700 leading-tight px-4 py-1 inline-block"
		type="text"
		name="nickname"
		placeholder="Faceit nickname"
	/>
	<button
		class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 mx-2 rounded"
		type="submit">Search</button
	>
</form>

{#if Object.keys(profile).length != 0}
<Profile profile={profile} />
{/if}
