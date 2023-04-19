import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';

export function Profile() {
    const [profile, setProfile] = useState({});
    const username = 'hyakutak';

    async function fetchProfile() {
        const response = await api.get(`users/${username}`);
        setProfile(response.data);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <span>oiiii</span>
    );
}