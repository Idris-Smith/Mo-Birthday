import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const Present = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleClick = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <div className="relative">
      {showConfetti && <Confetti width={width} height={height} />}
      <motion.div
        className="cursor-pointer bg-red-600 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <div className="text-center">
          <Gift className="w-16 h-16 mx-auto text-white mb-4" />
          <h3 className="text-xl font-bold text-white">A Present from Gabbi and Idris</h3>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-4"
            >
              <p className="text-white text-lg">Your domains:</p>
              <motion.a 
                href="http://birthdaypresent.co.za" 
                className="block text-3xl font-bold text-white hover:text-red-200 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                birthdaypresent.co.za
              </motion.a>
              <motion.a 
                href="http://birthdaypresents.co.za" 
                className="block text-3xl font-bold text-white hover:text-red-200 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                birthdaypresents.co.za
              </motion.a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Present;