import React, { useState } from 'react';
import Header from './Header';
import Card from './Card';

import './CardMatch.scss';

const duplicateCard = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].reduce((preValue, current) => {
        return preValue.concat([current, current])
    }, []);
};

const CardMatch = () => {

    const [isFlipped, setIsFlipped] = useState(Array(16).fill(false));
    const [shuffledCard, setShuffledCard] = useState(duplicateCard().sort(() => Math.random() - 0.5));
    const [clickCount, setClickCount] = useState(1);
    const [prevSelectedCard, setPrevSelectedCard] = useState(-1);
    const [prevCardId, setPrevCardId] = useState(-1);


    const handleClick = event => {
        event.preventDefault();
        const cardId = event.target.id;
        const newFlipps = isFlipped.slice();

        setPrevSelectedCard(shuffledCard[cardId]);
        setPrevCardId(cardId);

        if (newFlipps[cardId] === false) {
            newFlipps[cardId] = !newFlipps[cardId];
            setIsFlipped(newFlipps);
            setClickCount(clickCount + 1);

            if (clickCount === 2) {
                setClickCount(1);
                const newCard = shuffledCard[cardId];
                isCardMatch(prevSelectedCard, newCard, prevCardId, cardId);
            }
        }
    };

    const isCardMatch = (card1, card2, card1Id, card2Id) => {
        if (card1 === card2) {
            const hideCard = shuffledCard.slice();
            hideCard[card1Id] = -1;
            hideCard[card2Id] = -1;
            setTimeout(() => {
                setShuffledCard(hideCard)
            }, 1000);
        } else {
            const flipBack = isFlipped.slice();
            flipBack[card1Id] = false;
            flipBack[card2Id] = false;
            setTimeout(() => {
                setIsFlipped(flipBack)
            }, 1000);
        }
    };

    const restartGame = () => {
        setIsFlipped(Array(16).fill(false));
        setShuffledCard(duplicateCard().sort(() => Math.random() - 0.5));
        setClickCount(1);
        setPrevSelectedCard(-1);
        setPrevCardId(-1);
    };

    const isGameOver = () => {
        return isFlipped.every((element) => element !== false);
    };

    return (
        <div className="card-match-container">
            <Header restartGame={restartGame} />
            {isGameOver() ? 'Game Over!' :
                <div className="grid-container">
                    {
                        shuffledCard.map((cardNumber, index) =>
                            <Card
                                key={index}
                                id={index}
                                cardNumber={cardNumber}
                                isFlipped={isFlipped[index]}
                                handleClick={handleClick}
                            />
                        )
                    }
                </div>
            }
        </div>
    );
}

export default CardMatch;