import Navbar from './components/Navbar'
import MainContent from './components/MyInfo'
import Footer from './components/Footer'
import TodoList from './components/ToDoList';


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
        {
            link: 'https://example.com/project1',
            name: 'Project 1'
        }, {
            link: 'https://example.com/project2',
            name: 'Project 2'
        },
    ],
    awards: ['Best Developer of the Year', 'Award for Outstanding Contribution']
};

function App() {
    return (
        <div>
            <Navbar/>
            <MainContent pageInfo={examplePageInfo}/>
            <TodoList/>
            <Footer/>
        </div>
    )
}
export default App
