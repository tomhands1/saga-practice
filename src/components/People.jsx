import React from 'react';
import RandomPerson from './RandomPerson';
import PeopleList from './PeopleList';

const People = () => {
  return (
    <div className="people-container">
      <RandomPerson />
      <PeopleList />
    </div>
  );
};

export default People;