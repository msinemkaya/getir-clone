import cardsData from 'api/cards.json'
import Card from './Card';
import { useEffect, useState } from 'react';

export default function Cards({  }){

  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards(cardsData)
  }, [])

  return(
    <div className='flex flex-col md:flex-row gap-2 items-center justify-center text-center mb-6'>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}