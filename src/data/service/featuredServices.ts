import { serviceData, ServiceData } from "./service";

const orderedIds = [19, 20, 15, 13, 17, 11];

export const featuredServices: ServiceData = {
  ...serviceData,
  cards: orderedIds
    .map((id) => {
      const card = serviceData.cards.find((c) => c.id === id);
      if (!card) {
        throw new Error(`Service with id ${id} not found`);
      }
      return card;
    })
};