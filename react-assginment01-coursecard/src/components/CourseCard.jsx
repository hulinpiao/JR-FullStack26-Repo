import React, { Component } from 'react';
import './CourseCard.css';

class CourseCard extends Component {
  render() {
    const { title, price, language, duration, location, isNew, image } = this.props;

    return (
      <div className="course-card">
        {isNew && <span className="badge">New</span>}
        {image && <img src={image} alt={`${title} course`} className="course-image" />}
        <h2 className="course-title">{title}</h2>
        <p className="course-info">Price: {price}</p>
        <p className="course-info">Language: {language}</p>
        <p className="course-info">Duration: {duration}</p>
        <p className="course-info">Location: {location}</p>
      </div>
    );
  }
}

export default CourseCard;
