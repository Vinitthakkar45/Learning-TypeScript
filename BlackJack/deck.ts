import Card from "./card";
import { ICard, IDealable, Suit } from "./types";
import { shuffleArray } from "./utils";

class Deck implements IDealable {
    private deck: Card[] = [];

    constructor(){
        this.reset()
    }

    reset() {
        const cards= this.makeDeck();
        this.deck= shuffleArray(cards)
    }

    deal(num: number): Card[] {
        const dealtCards: Card[]=[]
        for(let i=0;i<num;i++){
            const card= this.deck.pop();
            dealtCards.push(card!)
        }
        return dealtCards
    }

    private makeDeck(){
        const cards: Card[] =[]
        const suits=[Suit.Clubs,Suit.Diamonds,Suit.Hearts,Suit.Spades]
        for(let suit=0;suit<4;suit++){
            for(let value=1;value<14;value++){
                const card=new Card(value,suits[suit])
                cards.push(card)
            }
        }
        return cards
    }
}

export default Deck