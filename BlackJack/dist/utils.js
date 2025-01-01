"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecision = getDecision;
exports.getHandValue = getHandValue;
exports.shuffleArray = shuffleArray;
exports.getBet = getBet;
exports.getStrHand = getStrHand;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getDecision() {
    while (true) {
        const decision = prompt("Your action: (hit/stand): ").toLowerCase();
        if (decision === "stand" || decision === "hit")
            return decision;
    }
}
function getHandValue(cards) {
    let value = 0;
    let aces = 0;
    for (const card of cards) {
        if (card.value === 1) {
            aces++;
            continue;
        }
        value += Math.min(card.value, 10);
    }
    if (aces === 0)
        return value;
    if (value >= 11)
        return value + aces;
    return value + 11 + (aces - 1);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getBet(balance) {
    let bet;
    do {
        const input = prompt("Enter your bet:");
        bet = parseInt(input);
    } while (isNaN(bet) || bet < 0 || bet > balance);
    return bet;
}
function getStrHand(hand, hideSecondCard = false) {
    let strHand = "";
    let i = 0;
    for (; i < hand.length - 1; i++) {
        strHand += hand[i].getName() + hand[i].suit + ",";
    }
    if (hideSecondCard) {
        strHand += "[hidden]";
    }
    else {
        strHand += hand[i].getName() + hand[i].suit;
    }
    return strHand;
}
