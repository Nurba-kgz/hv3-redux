import React from 'react';
import { useParams } from 'react-router-dom';

const CardDetailsPage = () => {
    const { id } = useParams();

    // Пример данных карточки (можно использовать реальные данные или заглушки)
    const card = { id: Number(id), title: `Карточка ${id}`, description: `Описание карточки ${id}` };

    return (
        <div>
            <h1>Полная информация о карточке {card.title}</h1>
            <p>{card.description}</p>
        </div>
    );
}

export default CardDetailsPage;