import React from 'react';
import CourseCard from './components/CourseCard';

function App() {
  const courses = [
    {
      title: 'React for Beginners',
      price: '$99',
      language: 'English',
      duration: '4 Weeks',
      location: 'Online',
      isNew: true,
      image: '/1.jpg'
    },
    {
      title: 'Fullstack Web Dev',
      price: '$150',
      language: 'Chinese',
      duration: '8 Weeks',
      location: 'Hybrid',
      isNew: false,
      image: '/1.jpg'
    },
    {
      title: 'AWS Cloud Basics',
      price: '$70',
      language: 'Korean',
      duration: '3 Weeks',
      location: 'Online',
      isNew: false,
      image: '/1.jpg'
    }
  ];

  return (
    <div className="course-list-container">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
}

export default App;
