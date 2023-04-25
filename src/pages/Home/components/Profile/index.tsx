import { useEffect, useState, useContext } from 'react';
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
import { PostsContext } from '../../../../contexts/PostsContext';

interface User {
    avatar_url: string;
    name: string;
    login: string;
    html_url: string;
    followers: number;
    company: string;
    bio: string;
    url: string;
    repos_url: string
}

export function Profile() {
    const [profile, setProfile] = useState<User>();
    const { username } = useContext(PostsContext);

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
                    <a href={ profile?.html_url } target='_blank'>
                        Github
                        <img src={ArrowUp} />
                    </a>
                </ProfileHeader>
                <span>
                    {
                        profile?.bio ? profile.bio 
                        : 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit.'
                    }
                </span>
                <ProfileInfo>
                    <p>
                        <img src={GithubLogo} />
                        { profile?.login }
                    </p>
                    <p>
                        <img src={BuildingSolid} />
                        { profile?.company ? profile?.company : 'Rocketseat' }
                    </p>
                    <p>
                        <img src={UserGroup} />
                        { profile?.followers == 0 ? 'Your is lone' : `${profile?.followers} seguidores` }
                    </p>
                </ProfileInfo>
            </ProfileContainerInformation>
        </ProfileContainer>
    );
}