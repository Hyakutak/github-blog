import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Profile } from './components/Profile';
import { MainContainer } from './styles';

export function Home() {
    const [profile, setProfile] = useState({});
    const username = 'hyakutak';

    async function fetchProfile() {
        const response = await api.get(`users/${username}`);

        setProfile(response.data);
    }

    useEffect(() => {
        fetchProfile();
    });

    return (
        <MainContainer>
            <Profile />
        </MainContainer>
    );
}