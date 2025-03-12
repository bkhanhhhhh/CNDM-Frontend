import { useState } from "react";
import { motion } from "framer-motion";

const VirtualGarden = () => {
  const [growth, setGrowth] = useState(0);

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Your Virtual Garden</h2>
      <p className="text-gray-600">Watch your garden grow as you make progress on your mindfulness journey.</p>
      
      <motion.div 
        className="mt-6"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        🌱 {["🌱", "🌿", "🌳"][growth]} {/* Biểu tượng cây phát triển */}
      </motion.div>

      <button 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow"
        onClick={() => setGrowth((prev) => (prev + 1) % 3)}
      >
        Grow Your Garden
      </button>
    </div>
  );
};

export default VirtualGarden;