import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const OpenModalButton = styled(motion.button)`
  font-size: 32px;
  display: block;
  color: #af571d;
  text-decoration: none;
  margin-right: 30px;
  appearance: none;
  background: none;
  cursor: pointer;
  border: none;
`;
// @ts-ignore
const animatedOpenButton = ({ children, handleClick }) => {
    return (
        <OpenModalButton aria-label="About Incubify" onClick={handleClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {children}
        </OpenModalButton>
    );
};

export default animatedOpenButton;
