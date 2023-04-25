import { useEffect, useState, useContext } from 'react';
import { PostsContext } from '../../../../contexts/PostsContext';
import { api } from '../../../../lib/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faArrowUpRightFromSquare, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileContainer, 
    ProfileAvatar, 
    ProfileContainerInformation, 
    ProfileHeader,
    ProfileInfo } from './styles';

interface User {
    avatar_url: string;
    name: string;
    login: string;
    html_url: string;
    followers: number;
    company: string;
    bio: string;
}

export function Profile() {
    const [profile, setProfile] = useState<User>();
    const { username } = useContext(PostsContext);

    async function fetchProfile() {
        try {
            const response = await api.get<User>(`users/${username}`);
            const {avatar_url, login, html_url, name, bio, company, followers} = response.data;
            setProfile( {
                avatar_url,
                name,
                login,
                html_url,
                followers,
                company,
                bio
            });
        } catch (error) {
            console.error("ops! Não foi possível buscar o usuário" + error);
        }
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
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} color='#3294F8' size='xs'/>
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
                        <FontAwesomeIcon icon={faGithub} color='#3A536B' size='lg'/>
                        { profile?.login }
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faBuilding} color='#3A536B' size='lg'/>
                        { profile?.company ? profile?.company : 'Rocketseat' }
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faUserGroup} color='#3A536B' size='lg'/>
                        { profile?.followers == 0 ? 'Your is lone' : `${profile?.followers} seguidores` }
                    </p>
                </ProfileInfo>
            </ProfileContainerInformation>
        </ProfileContainer>
    );
}