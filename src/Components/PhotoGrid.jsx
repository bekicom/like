import React, { useState, useRef } from 'react';
import { Plus } from 'lucide-react';
import styles from './photoGrid.module.css';
import PhotoAlert from "./PhotoAlert";

const PhotoGrid = () => {
  const gridItems = Array(12).fill(null);
  const [selectedImages, setSelectedImages] = useState(Array(12).fill(null));
  const [showAlert, setShowAlert] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const fileInputRefs = Array(12).fill(null).map(() => useRef());

  const handleFileSelect = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Check file size (e.g., 5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File size should not exceed 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages[index] = e.target.result;
        setSelectedImages(newSelectedImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    fileInputRefs[index].current.click();
  };

  const removeImage = (index, e) => {
    e.stopPropagation(); // Prevent card click when removing image
    const newSelectedImages = [...selectedImages];
    newSelectedImages[index] = null;
    setSelectedImages(newSelectedImages);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {gridItems.map((_, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => handleCardClick(index)} // Added click handler to the entire card
            >
              <input
                type="file"
                ref={fileInputRefs[index]}
                onChange={handleFileSelect(index)}
                accept="image/*"
                className={styles.hiddenInput}
                style={{ display: 'none' }}
              />
              {selectedImages[index] ? (
                <div className={styles.imageContainer}>
                  <img 
                    src={selectedImages[index]} 
                    alt={`Upload ${index + 1}`} 
                    className={styles.uploadedImage}
                  />
                  <button 
                    className={styles.removeButton}
                    onClick={(e) => removeImage(index, e)}
                  >
                    ×
                  </button>
                </div>
              ) : (
                <div className={styles.plusContainer}>
                  <Plus className={styles.plusIcon} />
                </div>
              )}
            </div>
          ))}
        </div>
        <button 
          className={styles.button} 
          onClick={() => setShowAlert(true)}
        >
          НЕ ДОБАВЛЯТЬ
        </button>
        
        {showAlert && (
          <div className={styles.alert}>
            <p>Premium Alert Message</p>
            <PhotoAlert onClose={() => setShowAlert(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGrid;