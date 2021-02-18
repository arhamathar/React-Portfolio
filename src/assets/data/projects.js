import Notes from '../images/notes.jpg';
import Weather from '../images/weather.jpg';
import Cocktail from '../images/cocktail.jpg';
import Photogram from '../images/photogram.jpg';

const projects = [
    {
        name: 'Weather App',
        image: Weather,
        deployed_url: 'https://arham-weather.netlify.app/',
        github_url: 'https://github.com/arhamathar/PWA-Weather',
        category: ['react.js']
    },
    {
        name: 'Notes Keeper',
        image: Notes,
        deployed_url: 'https://arham-notes-keeper.netlify.app/',
        github_url: 'https://github.com/arhamathar/Notes-keeper',
        category: ['react.js']
    },
    {
        name: 'Cocktail',
        image: Cocktail,
        deployed_url: 'https://the-cocktail.netlify.app/',
        github_url: 'https://github.com/arhamathar/cocktail-react-app',
        category: ['react.js']
    },
    {
        name: 'Photogram',
        image: Photogram,
        deployed_url: 'https://github.com/arhamathar/Photogram-backend',
        github_url: 'https://github.com/arhamathar/Photogram-backend',
        category: ['mongoDb', 'react.js', 'nodejs']
    },
]

export default projects;