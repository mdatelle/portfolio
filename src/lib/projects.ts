import stashitImage from '../../public/project-stashboard.png';
import verticalLinkImage from '../../public/project-vertical-link.png';
import chromeExtensionImage from '../../public/project-chrome-extension.png';

export const projects = [
    {
        image: stashitImage,
        title: 'Stashit',
        description:
            'A privacy focused cloud storage SaaS application I launched with separate versions running in North America and the EU.',
        link: 'https://www.stashit.app/'
    },
    {
        image: verticalLinkImage,
        title: 'Vertical Link',
        description:
            'A website used by claim adjusters to submit disaster relief related claims. Built with React and hosted on Netlify.',
        link: 'https://www.verticallinkservices.com/'
    },
    {
        image: chromeExtensionImage,
        title: 'Stashit Chrome Extension',
        description:
            'A companion Chrome extension for Stashit used for snipping web content and storing in the users Stashit account.',
        link: 'https://chromewebstore.google.com/detail/stashit-web-clipper/bjekilghhpghcoaeengabegcnlpnlfml'
    }
];
