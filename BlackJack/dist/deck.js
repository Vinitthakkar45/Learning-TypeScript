"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const types_1 = require("./types");
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
        this.reset();
    }
    reset() {
        const cards = this.makeDeck();
        this.deck = (0, utils_1.shuffleArray)(cards);
    }
    deal(num) {
        const dealtCards = [];
        for (let i = 0; i < num; i++) {
            const card = this.deck.pop();
            dealtCards.push(card);
        }
        return dealtCards;
    }
    makeDeck() {
        const cards = [];
        const suits = [types_1.Suit.Clubs, types_1.Suit.Diamonds, types_1.Suit.Hearts, types_1.Suit.Spades];
        for (let suit = 0; suit < 4; suit++) {
            for (let value = 1; value < 14; value++) {
                const card = new card_1.default(value, suits[suit]);
                cards.push(card);
            }
        }
        return cards;
    }
}
exports.default = Deck;
