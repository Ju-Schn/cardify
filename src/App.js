import 'react-toastify/dist/ReactToastify.css';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import CreateCard from './pages/CreateCard';
import Pinned from './pages/Pinned';
import Decks from './pages/Decks';

import useCards from './hooks/useCards';
import useFetch from './hooks/useFetch';
import { loadFromLocal } from './utils/localStorage';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { ToastContainer } from 'react-toastify';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { publicCards, mutatePublicCards, cardsError } = useFetch();
  const { personalCards, setPersonalCards, handleNewCard, allCategories } =
    useCards();

  console.log(publicCards);
  if (cardsError) return <h1>Keine Verbindung zur Datenbank 👻</h1>;
  if (!publicCards && !cardsError) return <p>... loading ...</p>;

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/cards"
          element={
            <Home
              personalCards={personalCards}
              onDeleteConfirm={handleDeleteCard}
              onKeepConfirm={() => setShowModal(false)}
              onTrashClick={handleTrashClick}
              showModal={showModal}
              onPinClick={handlePinClick}
              allCategories={allCategories}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
              onDeleteFromDatabaseConfirm={handleDeleteFromDatabase}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateCard
              personalCards={personalCards}
              onAddNewCard={handleNewCard}
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
              personalCards={personalCards}
              allCategories={allCategories}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
            />
          }
        ></Route>
        <Route
          path="/decks"
          element={
            <Decks
              personalCards={personalCards}
              allCategories={allCategories}
              onDeleteConfirm={handleDeleteCard}
              onKeepConfirm={() => setShowModal(false)}
              showModal={showModal}
              onTrashClick={handleTrashClick}
              onPinClick={handlePinClick}
              onCountRights={handleCountRights}
              onCountWrongs={handleCountWrongs}
            />
          }
        ></Route>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        role="alert"
      />
    </>
  );

  function handleTrashClick(id) {
    setShowModal(true);
    setCurrentId(id);
  }

  function handleDeleteCard() {
    setPersonalCards(personalCards.filter(card => card._id !== currentId));
    setShowModal(false);
  }

  async function handleDeleteFromDatabase() {
    const filteredEntries = publicCards.filter(card => card._id !== currentId);
    mutatePublicCards(filteredEntries, false);
    await fetch('/api/public-cards', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ currentId }),
    });

    mutatePublicCards();
    handleDeleteCard();
  }

  function handlePinClick(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return { ...card, isPinned: !card.isPinned };
        } else return card;
      })
    );
  }

  function handleCountRights(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countRight: card.countRight + 1,
            quotient: (card.countRight + 1) / card.countWrong,
            difficulty: handleDifficulty(
              (card.countRight + 1) / card.countWrong
            ),
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
  }

  function handleCountWrongs(id) {
    setPersonalCards(
      personalCards.map(card => {
        if (card._id === id) {
          return {
            ...card,
            countWrong: card.countWrong + 1,
            quotient: card.countRight / (card.countWrong + 1),
            difficulty: handleDifficulty(
              card.countRight / (card.countWrong + 1)
            ),
            showCounts: !card.showCounts,
          };
        } else return card;
      })
    );
  }

  function handleDifficulty(quotient) {
    if (quotient >= 2) return 'easy';
    else if (quotient <= 0.5) return 'difficult';
    else return 'medium';
  }
}

export default App;
