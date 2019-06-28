import React from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';

const PeopleList = ({ people }) => {
   
  return (
    <div className="people-list">
      <div className="people-list-title">Names:</div>
    {people.map((person, index) => {
      const { results } = person;
        return (
          <div key={index}>
            <div>{index + 1}. {fp.capitalize(results[0].name.first)} {fp.capitalize(results[0].name.last)}</div>
          </div>
        )
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  people: state.randomPerson.people
});

export default connect(mapStateToProps, null)(PeopleList);