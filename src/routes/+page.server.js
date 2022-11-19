import { APIKEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

let profile = {};

export const load = () => {
    return {
        profile: profile
    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const nickname = data.get("nickname");
        const fetchProfile = async () => {
            const response = await fetch(
                `https://open.faceit.com/data/v4/players?nickname=${nickname}&game=csgo`, {
                headers: new Headers({
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + APIKEY
                })
            });

            if (!response.ok){
                return {};
            } 

            return await response.json();
        }

        profile = fetchProfile();
    }
}