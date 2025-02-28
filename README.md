# Blackjack Game (Ace Always 11)

## Overview

This is a simple JavaScript-based blackjack game where the Ace is always valued at 11 points. The game deals two cards each to the player and the dealer, and then allows the player to either "Hit" (draw another card) or "Stand" (end their turn). The dealer draws cards until reaching a score of at least 17, and the winner is determined based on standard blackjack rules.

## Game Rules

- **Deck Composition:**  
  A standard 52-card deck is used. Each card is represented by a two-character string (e.g., `ah` for Ace of Hearts, `10d` for Ten of Diamonds).

- **Card Values:**  
  - **Ace:** Always counts as 11 points.  
  - **Face Cards (J, Q, K):** Count as 10 points.  
  - **Number Cards:** Count as their numerical value.

- **Gameplay:**  
  - **Dealing:** Two cards are initially dealt to both the player and the dealer in an alternating order (player-dealer-player-dealer).  
  - **Player's Turn:**  
    The player may choose to "Hit" (draw an extra card) or "Stand" (end their turn). If the player's score exceeds 21, they bust and lose the round.  
  - **Dealer's Turn:**  
    After the player stands, the dealer reveals their hidden card and draws additional cards until reaching a score of at least 17.
  - **Outcome:**  
    - If the dealer busts (score > 21), the player wins.  
    - If both player and dealer are under or equal to 21, the higher score wins.  
    - A tie results in a draw.

## File Structure

- **`index.html`**  
  Contains the HTML markup for the game interface, including buttons for dealing cards, hitting, standing, and restarting the game. It also includes elements for displaying cards and scores.

- **`game.js`**  
  Contains the game logic, including:
  - **Deck Initialization & Shuffling:**  
    The deck is defined as an array of card strings. A Fisher-Yates shuffle algorithm (`createRandomArray`) randomizes the deck.
  - **Dealing Cards:**  
    The `dealCards()` function deals two cards each to the player and the dealer, and updates the DOM with the appropriate card images.
  - **Score Calculation:**  
    The `calcScroe()` function calculates the score for a given card or hand (with Aces always counting as 11).
  - **Game Actions:**  
    - `hitReturnCardScore()`: Draws a new card and returns its score and identifier.  
    - `dealerHand()`: Manages the dealer’s turn by drawing cards until reaching a score of 17 or higher.  
    - `restartRound()`: Resets the game state for a new round.
  - **Event Listeners:**  
    Event listeners are attached to the "Deal Cards", "Hit", "Stand", and "Restart Game" buttons to control game flow.

- **`/Cards/`**  
  Directory that should contain card images. Each image is named after its corresponding card code (e.g., `ah.png`, `10d.png`, `kc.png`), plus a default back image (`back01.png`).

## How to Run

1. **Prepare the Files:**  
   Ensure that you have the following in your project directory:
   - `index.html`
   - `script.js`
   - `style.js`
   - `/Cards/` folder with the necessary card images.

2. **Open the Game:**  
   Open `index.html` in your web browser.

3. **Play:**  
   - Click **Deal Cards** to start a new round.  
   - Use **Hit** to draw additional cards.  
   - Click **Stand** when you wish to end your turn and let the dealer play.  
   - If needed, click **Restart Game** to reset the game state for a new round.

## Future Enhancements

- **Dynamic Ace Scoring:**  
  Modify the logic to allow Ace to count as either 1 or 11, depending on the hand total.
- **Additional Blackjack Features:**  
  Implement features such as splitting pairs or doubling down.
- **Enhanced UI/UX:**  
  Improve styling and animations to create a more engaging player experience.

## License

This project is open source and available for modification and redistribution.
