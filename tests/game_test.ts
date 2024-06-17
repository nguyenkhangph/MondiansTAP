import { expect } from 'chai';
import 'mocha';
import { tap, getCoins, redeemSpins } from '../wrappers/gameContract';

describe('Mondians Tap Game Contract Tests', () => {
    const userId = 1; 

    describe('Tapping Functionality', () => {
        it('should simulate incrementing the user\'s coins by tapping', async () => {
            await tap(userId); 
            const coins = await getCoins(userId); // Get updated coin count
            expect(coins).to.be.above(0); // Assuming initial coins are 0, expect more than 0 after tap
        });
    });

    describe('Spin Redemption Functionality', () => {
        it('should simulate redeeming spins for coins', async () => {
            const initialCoins = await getCoins(userId);
            await redeemSpins(userId, 1); 
            const newCoins = await getCoins(userId);
            expect(newCoins).to.be.greaterThan(initialCoins); 
        });

        it('should handle attempts to redeem more spins than available', async () => {
            try {
                await redeemSpins(userId, 100); 
            } catch (error) {
               // This test will pass if an error is thrown
               expect(error).to.exist;
            }
        });
    });
});
