import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Present from './components/Present';
import CandleGame from './components/CandleGame';
import { Cake, Heart } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function App() {
  const { width, height } = useWindowSize();
  const [showHeroConfetti, setShowHeroConfetti] = useState(true);
  const [showGalleryConfetti, setShowGalleryConfetti] = useState(false);

  // Auto-hide hero confetti after 5 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeroConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-200">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh]"
        onViewportEnter={() => setShowHeroConfetti(true)}
      >
        {showHeroConfetti && (
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={200}
          />
        )}
        <div className="h-full w-full relative overflow-hidden">
          <img 
            src="https://i.ibb.co/RTgcNbdF/IMG-20250131-WA0006.jpg"
            alt="Mohammed Dada Mia"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-100 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-4">Happy 55th Birthday</h1>
            <h2 className="text-4xl">Mohamed Dada Mia</h2>
          </motion.div>
        </div>
      </motion.div>

      {/* Present Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Present />
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        className="py-20 px-4"
        onMouseEnter={() => setShowGalleryConfetti(true)}
        onMouseLeave={() => setShowGalleryConfetti(false)}
      >
        <div className="max-w-6xl mx-auto relative">
          {showGalleryConfetti && (
            <Confetti
              width={width}
              height={400}
              recycle={true}
              numberOfPieces={100}
              gravity={0.2}
            />
          )}
          <h2 className="text-4xl font-bold text-red-800 mb-12 text-center">
            <Cake className="inline-block mr-2" />
            55 Never Looked So Good
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://i.ibb.co/ZpJVQVZq/IMG-20250131-102545.jpg",
              "https://i.ibb.co/TqbT154S/IMG-20250131-102657.jpg",
              "https://i.ibb.co/zVT016Wm/IMG-20250131-102341.jpg"
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg overflow-hidden shadow-lg relative"
              >
                <img src={img} alt="Birthday Memory" className="w-full h-96 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-100 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candle Game Section */}
      <section className="py-20 px-4 bg-red-100">
        <div className="max-w-6xl mx-auto">
          <CandleGame />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="https://i.ibb.co/7x3SGNDY/IMG-20250131-WA0004.jpg"
            alt="Footer"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-red-100 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent">
          <div className="max-w-lg p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-bold flex items-center">
                <Heart className="mr-2" /> Birthday Wishes
              </h3>
              <p className="text-lg">
                May your 55th year be filled with joy, laughter, and countless blessings. 
                Your wisdom and kindness continue to inspire us all. Here's to many more 
                years of happiness and celebration!
              </p>
              <p className="text-lg font-semibold">
                With love,<br />
                Leila, Gabi, Idris, Umr, Gabby, Hasan, Naim, Mia, Ash
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
