import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DeveloperPopup.css";

const DeveloperPopup = ({ onSuccess }) => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === "om") {
      setError("");
      onSuccess();
    } else {
      setError("❌ Sorry user, wrong answer!");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="popup-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="popup-box"
          initial={{ y: -200, scale: 0.5 }}
          animate={{ y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
          }}
        >
          <h2 className="popup-title">🔐 Who is the developer?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Enter developer name..."
              className="popup-input"
            />
            <button type="submit" className="popup-button">
              Submit
            </button>
            <p className="ans">Dont Know🤔? [Answer is: OM]</p>
          </form>
          {error && <p className="popup-error">{error}</p>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeveloperPopup;
