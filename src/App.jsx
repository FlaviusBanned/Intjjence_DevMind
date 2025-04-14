import { motion } from 'framer-motion';
import './App.css';
import { useState } from 'react';

const App = () => {
  const chatModels = ['Mistral', 'DeepSeek','ChatGPT 4.0'];
  const [showOptions, setShowOptions] = useState(false);

  const ChooseModel = () => {
    setShowOptions(true);
  };

  return (
    <>
      <div className="App">
        <div className="accent-top-middle"></div>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.7 } },
          }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            Hi !!
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            What chatbot would you like to use?
          </motion.p>

          <motion.button
            onClick={ChooseModel}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            Choose
          </motion.button>
          
          {showOptions && (
            <div id="options-container">
              {chatModels.map((model) => (
                <button key={model} className="model-option">
                  {`${model}`}
                </button>
              ))}
            </div>
          )}
        </motion.section>
      </div>
      <p className="p-rights-bottom">Pirjoleanu Mihai Flavius | All Rights Reserved ®</p>
    </>
  );
};

export default App;
