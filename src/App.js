import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';
import { useLocalStorage } from 'usehooks-ts';

function App() {
  const [cards, setCards] = useLocalStorage('cards', []);
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            cards={cards}
            onDeleteConfirm={handleDeleteCard}
            onKeepConfirm={() => setShowModal(false)}
            onTrashClick={handleTrashClick}
            showModal={showModal}
            onPinClick={handlePinClick}
          />
        }
      />
      <Route
        path="/create-card"
        element={
          <CreateCard
            cards={cards}
            onSubmit={handleNewCard}
            onAddCard={handleNewCard}
            onGoOn={handleGoOn}
          />
        }
      ></Route>
      <Route
        path="/pinned"
        element={
          <Pinned
            onDeleteConfirm={handleDeleteCard}
            onKeepConfirm={() => setShowModal(false)}
            onTrashClick={handleTrashClick}
            showModal={showModal}
            onPinClick={handlePinClick}
            cards={cards}
          />
        }
      ></Route>
    </Routes>
  );

  function handleNewCard(questionText, answerText) {
    const newCard = {
      question: questionText,
      answer: answerText,
      _id: nanoid(),
      isPinned: false,
    };
    setCards([newCard, ...cards]);
  }

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  function handleDeleteCard() {
    setCards(cards.filter(card => card._id !== currentId));
    setShowModal(false);
  }

  function handlePinClick(id) {
    setCards(
      cards.map(card => {
        if (card._id === id) {
          return { ...card, isPinned: !card.isPinned };
        } else return card;
      })
    );
  }

  function handleGoOn() {}
}

export default App;
