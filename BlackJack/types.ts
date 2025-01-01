export enum Suit {
    Diamonds = "♦",
    Hearts = "♥",
    Spades = "♠",
    Clubs = "♣"
}

export interface ICard {
    value: number;
    suit: Suit
    getName(): string
}

export interface IDealable {
    deal(num: number): ICard[],
    reset(): void;
}