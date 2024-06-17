// App.tsx
import React, { useState } from 'react';
import './styles.css';

function App() {
    const [coins, setCoins] = useState(0);
    const [spins, setSpins] = useState(5); // Assuming the user starts with 5 spins
    const [leaderboard, setLeaderboard] = useState([
        { username: "Alice", coins: 150 },
        { username: "Bob", coins: 120 },
        { username: "Charlie", coins: 90 }
    ]); // Mock leaderboard data

    const handleTap = async () => {
        setCoins(coins + 1); // Simulate earning coins
    };

    const redeemSpins = () => {
        if (spins > 0) {
            setSpins(spins - 1);
            setCoins(coins + 10); // Assume each spin redeems for 10 coins
        } else {
            alert('No more spins left!');
        }
    };

    return (
        <div className="app">
            <h1>Mondians Tap</h1>
            <div className="coin-display">Coins: {coins}</div>
            <button onClick={handleTap} className="tap-button">Tap</button>
            <div className="spin-display">Spins: {spins}</div>
            <button onClick={redeemSpins} className="spin-button">Redeem Spin</button>
            <h2>Leaderboard</h2>
            <ul className="leaderboard">
                {leaderboard.map((player, index) => (
                    <li key={index}>{player.username}: {player.coins} Coins</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
