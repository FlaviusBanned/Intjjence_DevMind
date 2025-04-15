import React from 'react';
import styles from './index.module.css';
import MistralLogo from '../../assets/mistral-logo.png';
const Mistral = () => {
  return (
    <>
      <header className={styles.mistralHeader}>
        <img src={MistralLogo} alt="Mistral Logo" className={styles.logoImage} />
      </header>
      <div className={styles.mistralChatContainer}>
        <h2>Talk with Mistral</h2>
        <div className={styles.mistralChatWindow}></div>
        <div className={styles.mistralChatInput}>
          <input type="text" placeholder="Type smth dbs ..." />
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default Mistral;
