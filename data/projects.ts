export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'mobile' | 'CLI';
  technologies: string[];
  github?: string;
  liveUrl?: string;
}

export const projectData: Project[] = [
  {
    id: 1,
    title: 'Music Streaming App with Dezzer',
    description: 'Complete visual identity redesign for a travel agency, including logo, website, and marketing materials.',
    image: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
    category: 'mobile',
    technologies: ['Native Android', 'Dezzer Api', 'Picasso', 'Glide', 'Material UI', 'Json Converter'],
    github: 'https://github.com/SHEKHAR011/Music-Streaming-App.git',
  },
  {
    id: 2,
    title: 'Smart Traffic Light Simulation',
    description: 'A dynamic and realistic simulation of a 4-way Indian intersection using Python and Pygame! This project demonstrates a traffic light system with roundabout logic, phase cycling, and vehicles that obey signals.',
    image: 'https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg',
    category: 'CLI',
    technologies: ['Python', 'Pygame'],
    github: 'https://github.com/SHEKHAR011/Traffic-light-system.git',
  },
  {
    id: 3,
    title: 'Discord Bot with Gemini Integration',
    description: 'A versatile Discord bot powered by Python and the Gemini API, offering conversational AI features for smart automation and engaging real-time interactions.',
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    category: 'mobile',
    technologies: ['Discord', 'Python', 'Gemini Api', 'CLI', 'dotenv'],
    github: 'https://github.com/SHEKHAR011/Discord-Bot.git',
  },
  {
    id: 4,
    title: 'Adventure Game',
    description: 'If Elif Else Adventure Game in Python',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
    category: 'CLI',
    technologies: ['Python'],
    github: 'https://github.com/SHEKHAR011/Adventure-Game.git',
  }
];