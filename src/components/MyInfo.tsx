import React from 'react';

interface PageInfo {
    name?: string;
    age?: number;
    email?: string;
    occupation?: string;
    location?: string;
    phone?: string;
    skills?: string;
    interests?: string;
    education?: string;
    experience?: number;
    projects?: {
        link: string;
        name: string
    }[];
    awards?: string[];
}


const formatProjectList = ({projects} : PageInfo) => (projects ? projects.map((project, index) => (
    <span key={index}>
        <a href={
            project.link
        }>
            {
            project.name
        }</a>
        {
        index < projects.length - 1 && ', '
    } </span>
)) : null);

const formatAwardList = ({awards} : PageInfo) => awards ? awards.join(', ') : '';

function MyInfo({pageInfo} : {
    pageInfo : PageInfo
}) {
    return (
        <div>
            <h1>Personal Profile</h1>
            <p>Name: {
                pageInfo.name
            }</p>
            <p>Age: {
                pageInfo.age
            }</p>
            <p>Email:
                <a href={
                    pageInfo.email || ''
                }>
                    {
                    pageInfo.email
                }</a>
            </p>
            <p>Occupation: {
                pageInfo.occupation
            }</p>
            <p>Location: {
                pageInfo.location
            }</p>
            <p>Phone: {
                pageInfo.phone
            }</p>
            <p>Skills: {
                pageInfo.skills
            }</p>
            <p>Interests: {
                pageInfo.interests
            }</p>
            <p>Education: {
                pageInfo.education
            }</p>
            <p>Experience: {
                pageInfo.experience
            }
                years</p>
            <p>Relevant Projects: {
                formatProjectList(pageInfo)
            }</p>
            <p>Awards: {
                formatAwardList(pageInfo)
            }</p>
        </div>
    );
}

export default MyInfo;
