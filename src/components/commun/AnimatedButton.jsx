import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }} // État initial
      whileHover={{ scale: 1.1 }} // État au survol
      whileTap={{ scale: 0.9 }} // État lors du clic
      transition={{ type: 'spring', stiffness: 300 }} // Transition
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Cliquez-moi
    </motion.button>
  );
};

export default AnimatedButton;