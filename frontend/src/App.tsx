// App.tsx
import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
    const [coins, setCoins] = useState(0);
    const [spins, setSpins] = useState(5);

    // Effect to manage Telegram Web App integration
    useEffect(() => {
        if (window.Telegram) {
            window.Telegram.WebApp.ready();
        }
    }, []);

    const handleTap = () => {
        const newCoinCount = coins + 1;
        setCoins(newCoinCount);
        if (window.Telegram) {
            window.Telegram.WebApp.sendData(JSON.stringify({ coins: newCoinCount }));
        }
    };

    return (
        <div className="app">
            <h1>Mondians Tap</h1>
            <div className="coin-display">Coins: {coins}</div>
            <button onClick={handleTap} className="tap-button">Tap</button>
            <div className="spin-display">Spins: {spins}</div>
        </div>
    );
}

export default App;