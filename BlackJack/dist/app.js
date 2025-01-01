"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deck_1 = __importDefault(require("./deck"));
const utils_1 = require("./utils");
function playerTurn(playerHand, deck) {
    let handValue = (0, utils_1.getHandValue)(playerHand);
    while (true) {
        const action = (0, utils_1.getDecision)();
        if (action != 'hit')
            return handValue;
        playerHand.push(deck.deal(1)[0]);
        handValue = (0, utils_1.getHandValue)(playerHand);
        console.log(`Your hand: ${(0, utils_1.getStrHand)(playerHand)} (Total: ${handValue})`);
        if (handValue > 21)
            return handValue;
    }
}
function dealerTurn(dealerHand, deck) {
    let handValue = (0, utils_1.getHandValue)(dealerHand);
    while (true) {
        console.log(`Dealer's hand: ${(0, utils_1.getStrHand)(dealerHand)} (Total: ${handValue})`);
        if (handValue > 17)
            return handValue;
        dealerHand.push(deck.deal(1)[0]);
        handValue = (0, utils_1.getHandValue)(dealerHand);
    }
}
let dealerHand = [];
let playerHand = [];
const deck = new deck_1.default();
let balance = 100;
while (balance > 0) {
    console.log(`\nPlayer funds $${balance}`);
    const bet = (0, utils_1.getBet)(balance);
    balance -= bet;
    // Deal the cards
    deck.reset();
    playerHand = deck.deal(2);
    dealerHand = deck.deal(2);
    const playerValue = (0, utils_1.getHandValue)(playerHand);
    const dealerValue = (0, utils_1.getHandValue)(dealerHand);
    console.log(`Your hand: ${(0, utils_1.getStrHand)(playerHand)} (Total: ${playerValue})`);
    console.log(`Dealer's hand: ${(0, utils_1.getStrHand)(dealerHand, true)}`);
    if (playerValue === 21) {
        balance += bet * 2.5;
        console.log(`Blackjack! You won $${bet * 2.5}`);
        continue;
    }
    else if (dealerValue === 21) {
        console.log(`Dealer's hand: ${(0, utils_1.getStrHand)(dealerHand)}, (Total: 21)`);
        console.log("Dealer has Blackjack, you lost...");
        continue;
    }
    const finalPlayerValue = playerTurn(playerHand, deck);
    if (finalPlayerValue > 21) {
        console.log("You bust and lost...");
        continue;
    }
    const finalDealerValue = dealerTurn(dealerHand, deck);
    if (finalDealerValue > 21 || finalPlayerValue > finalDealerValue) {
        balance += bet * 2;
        console.log(`You won $${bet * 2}`);
    }
    else if (finalDealerValue === finalPlayerValue) {
        balance += bet;
        console.log("Push (tie).");
    }
    else {
        console.log("You lost to the dealer.");
    }
}
console.log("You ran out of money!");
