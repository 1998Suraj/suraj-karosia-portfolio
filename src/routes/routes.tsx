// routes.tsx
import React from 'react';
import { RouteProps } from 'react-router-dom';
import AboutSection from '../components/AboutSection/AboutSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import ContactForm from '../components/ContactForm/ContactForm';

type CustomRouteProps = {
    path: string;
    component: React.FC<any>;
    exact?: boolean; // Make 'exact' prop optional
}

const routes: CustomRouteProps[] = [
    {
        path: '/about',
        component: AboutSection,
        exact: true // Specify 'exact' prop value
    },
    {
        path: '/experience',
        component: ExperienceSection,
        exact: true
    },
    {
        path: '/projects',
        component: ProjectsSection,
        exact: true
    },
    {
        path: '/skills',
        component: SkillsSection,
        exact: true
    },
    {
        path: '/contact',
        component: ContactForm,
        exact: true
    }
];

export default routes;
