import portfolioData from './portfolio.json';

export type Portfolio = typeof portfolioData;

export function getPortfolio(): Portfolio {
  return portfolioData;
}

export const portfolio = getPortfolio();

// Helper functions for accessing portfolio data
export const getMeta = () => portfolio.meta;
export const getPersonal = () => portfolio.personal;
export const getTheme = () => portfolio.theme;
export const getSocial = () => portfolio.social;
export const getNavigation = () => portfolio.navigation;
export const getHero = () => portfolio.hero;
export const getAbout = () => portfolio.about;
export const getSkills = () => portfolio.skills;
export const getProjects = () => portfolio.projects;
export const getBlog = () => portfolio.blog;
export const getContact = () => portfolio.contact;
export const getFooter = () => portfolio.footer;
export const getExperience = () => portfolio.experience;
export const getTerminal = () => portfolio.terminal;

// Export the full portfolio data
export default portfolio;
