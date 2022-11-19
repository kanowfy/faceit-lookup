<script>
	export let profile;
</script>

{#if profile.games.csgo}
	<div class="flex justify-center">
		<div class="max-w-lg rounded overflow-hidden shadow-lg shadow-gray-700">
			<img class="w-60" src={profile.avatar} alt={profile.nickname} />
			<div class="px-4 py-5">
				<a href={profile.faceit_url.replace('{lang}', 'en')} rel="noreferrer" target="_blank" 
					><h2 class="hover:text-teal-400 text-center text-xl font-bold py-4">{profile.nickname}</h2></a
				>
				<h3 class="flex justify-between px-10">
					<p>Country:</p>
					<img class="w-7 h-5 pt-1" src="https://countryflagsapi.com/png/{profile.country}" alt={profile.country} title={profile.country.toUpperCase()}>
				</h3>
				<h3 class="flex justify-between px-10">
					<p>Skill Level:</p>
					<strong>{profile.games.csgo.skill_level}</strong>
				</h3>
				<h3 class="flex justify-between px-10">
					<p>CSGO Elo:</p>
					<strong>{profile.games.csgo.faceit_elo}</strong>
				</h3>
			</div>
		</div>
	</div>
{:else}
	<div class="flex justify-center">
		<h1 class="text-4xl text-red-500 text-center font-bold my-40">Profile Not Found</h1>
	</div>
{/if}
