import cards from "./cardlist.json";

export function getCards() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cards);
    }, 3000);
  });
}

export function removeCard(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newCards = cards.filter(function (item) {
        const isThisCard = item.id !== id;

        return isThisCard;
      });

      resolve(newCards);
    }, 2000);
  });
}

const api = {
  getCards,
  removeCard,
};

export default api;
