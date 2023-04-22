import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';
import GithubLogo from '../../../../assets/icons/github-brands.svg';
import BuildingSolid from '../../../../assets/icons/building-solid.svg';
import UserGroup from '../../../../assets/icons/user-group-solid.svg';
import ArrowUp from '../../../../assets/icons/arrow-up-right-from-square-solid.svg';
import { ProfileContainer, 
    ProfileAvatar, 
    ProfileContainerInformation, 
    ProfileHeader,
    ProfileInfo } from './styles';

interface User {
    avatar_url: string;
    name: string;
    login: string;
    url: string;
    followers: number
}

export function Profile() {
    const [profile, setProfile] = useState<User>();
    const username = 'hyakutak';

    async function fetchProfile() {
        const response = await api.get<User>(`users/${username}`);
        setProfile(response.data);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <ProfileContainer>
            <ProfileAvatar>
                <img src={ profile?.avatar_url } />
            </ProfileAvatar>
            <ProfileContainerInformation>
                <ProfileHeader>
                    <h2>{ profile?.name }</h2>
                    <a href={ profile?.url }>
                        Github
                        <img src={ArrowUp} />
                    </a>
                </ProfileHeader>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean 
                    malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>
                <ProfileInfo>
                    <p>
                        <img src={GithubLogo} />
                        { profile?.login }
                    </p>
                    <p>
                        <img src={BuildingSolid} />
                        Rocketseat
                    </p>
                    <p>
                        <img src={UserGroup} />
                        { profile?.followers } seguidores
                    </p>
                </ProfileInfo>
            </ProfileContainerInformation>
        </ProfileContainer>
    );
}