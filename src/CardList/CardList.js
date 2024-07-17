import React from 'react';
import { Link } from 'react-router-dom';

const CardList = () => {

    const cards = [
        { id: 1, title: 'Карточка 1', description: 'Описание карточки 1' },
        { id: 2, title: 'Карточка 2', description: 'Описание карточки 2' },
        { id: 3, title: 'Карточка 3', description: 'Описание карточки 3' },
    ];

    return (
        <div>
            <h1>Список карточек</h1>
            {cards.map(card => (
                <div key={card.id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <Link to={`/cards/${card.id}`}>Подробнее</Link>
                </div>
            ))}
        </div>
    );
}

export default CardList;