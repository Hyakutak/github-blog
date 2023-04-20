import { useEffect, useState } from 'react';
import { api } from '../../../../lib/axios';
import GithubLogo from '../../../../assets/icons/github-brands.svg';
import BuildingSolid from '../../../../assets/icons/building-solid.svg';
import UserGroup from '../../../../assets/icons/user-group-solid.svg';
import ArrowUp from '../../../../assets/icons/arrow-up-right-from-square-solid.svg';
import { ProfileContainer, ProfileAvatar, ProfileContainerInformation } from './styles';

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

    console.log(profile)

    return (
        <ProfileContainer>
            <section>
                <ProfileAvatar src={ profile?.avatar_url } />
            </section>
            <ProfileContainerInformation>
                <div>
                    <h2>{ profile?.name }</h2>
                    <a href={ profile?.url }>
                        Github
                        <img src={ArrowUp} />
                    </a>
                </div>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean 
                    malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </span>
                <div>
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
                </div>
            </ProfileContainerInformation>
        </ProfileContainer>
    );
}