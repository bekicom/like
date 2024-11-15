// DropdownSelect.js
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './DropdownSelect.module.css';

const DropdownSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <p className={styles.label}>{label}</p>
      <div className={styles.selectWrapper}>
        <button
          type="button"
          className={styles.selectButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={value ? styles.selectedValue : styles.placeholder}>
            {value || "Выберите"}
          </span>
          <ChevronDown 
            className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
            size={20}
          />
        </button>
        
        {isOpen && (
          <div className={styles.optionsContainer}>
            {options.map((option) => (
              <button
                key={option}
                className={styles.option}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;