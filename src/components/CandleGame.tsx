import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CandleGame = () => {
  const [candles, setCandles] = useState(Array(55).fill(true));
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (!candles.includes(true) && isRunning) {
      setIsRunning(false);
      setGameComplete(true);
    }
  }, [candles, isRunning]);

  const handleCandleClick = (index: number) => {
    if (!isRunning) setIsRunning(true);
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);
  };

  return (
    <div className="p-8 bg-red-50 rounded-lg">
      <h2 className="text-2xl font-bold text-red-800 mb-4">Blow Out All 55 Candles!</h2>
      <div className="text-xl text-red-600 mb-4">
        Time: {timer.toFixed(1)} seconds
      </div>
      <div className="grid grid-cols-11 gap-2">
        {candles.map((isLit, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer ${isLit ? 'text-yellow-400' : 'text-gray-400'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleCandleClick(index)}
          >
            <div className="relative">
              <div className="w-4 h-12 bg-red-400 mx-auto rounded-sm" />
              {isLit && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [-2, 2] }}
                  transition={{ repeat: Infinity, duration: 0.5, yoyo: true }}
                >
                  🔥
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {gameComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-xl text-red-600 font-bold"
        >
          Congratulations! You blew out all candles in {timer.toFixed(1)} seconds!
        </motion.div>
      )}
    </div>
  );
};

export default CandleGame;