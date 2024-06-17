// App.tsx
import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
    const [coins, setCoins] = useState(0);
    const [spins, setSpins] = useState(5);

    // Example useEffect to demonstrate using Telegram API
    useEffect(() => {
        if (window.Telegram) {
            Telegram.WebApp.ready();
        }
    }, []);

    const handleTap = async () => {
        setCoins(coins + 1); // Simulate earning coins
        if (window.Telegram) {
            Telegram.WebApp.sendData(JSON.stringify({ coins }));
        }
    };

    return (
        <div className="app">
            <h1>Mondians Tap</h1>
            <div className="coin-display">Coins: {coins}</div>
            <button onClick={handleTap} className="tap-button">Tap</button>
            <div className="spin-display">Spins: {spins}</div>
            {/* More UI components */}
        </div>
    );
}

export default App;
