import {createRoot} from 'react-dom/client'
import MyInfo from './components/MyInfo'

const examplePageInfo: PageInfo = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  occupation: 'Software Developer',
  location: 'New York, USA',
  phone: '123-456-7890',
  skills: 'React, TypeScript, JavaScript',
  interests: 'Reading, Hiking, Music',
  education: 'Bachelor of Science in Computer Science',
  experience: 5,
  projects: [
    { link: 'https://example.com/project1', name: 'Project 1' },
    { link: 'https://example.com/project2', name: 'Project 2' },
  ],
  awards: ['Best Developer of the Year', 'Award for Outstanding Contribution'],
};

createRoot(
  document.getElementById('root')
).render (
  <MyInfo pageInfo={examplePageInfo}/>
)
