import React from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { randomPersonRequest, addPersonRequest, removeFirstPersonRequest } from '../actions/RandomPerson';
import { getRandomPerson } from '../selectors/RandomUser';

const RandomPerson = ({ generatePerson, addPerson, removePerson, randomUser }) => {
    const changePerson = () => {
        generatePerson();
        addPerson();
    };

    const removeFirst = () => {
        removePerson();
    }

    return (
        <div>
            {randomUser ? randomUser.map((person, index) => {
                const {
                    gender,
                    name,
                    dob,
                    picture
                } = person;

                return (
                    <div key={index}>
                        <img alt="Random Person" src={picture.large} />
                        <div>Name: {fp.capitalize(name.first)} {fp.capitalize(name.last)}</div>
                        <div>Gender: {fp.capitalize(gender)}</div>
                        <div>Age: {dob.age}</div>
                    </div>
                )
            }) : null}
            <button className="people-button" onClick={changePerson}>
                Generate a new random person
      </button>
            <button className="people-button" onClick={removeFirst}>Prepend list after 3 seconds</button>
        </div>
    );
};

const mapStateToProps = state => ({
    randomUser: getRandomPerson(state)
});

const mapDispatchToProps = dispatch => ({
    generatePerson: () => dispatch(randomPersonRequest()),
    addPerson: () => dispatch(addPersonRequest()),
    removePerson: () => dispatch(removeFirstPersonRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomPerson);