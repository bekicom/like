import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './registration.module.css';
import Footer from './Footer';
import DropdownSelect from './DropdownSelect';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import PhotoGrid from './PhotoGrid';
import Header from './Header';

const Registration = () => {
  const relationshipStatuses = ['Свободен', 'В отношениях', 'Женат/Замужем'];
  const relationshipGoals = ['Любовь', 'Дружба', 'Общение'];
  const [value, setValue] = useState([20, 37]);
  const [valueHeight, setValueHeight] = useState([170]);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    birthDate: '',
    relationshipStatus: '',
    goal: '',
    age: '',
    height: '',
  });

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const handleHeight = (event, newValue) => {
    setValueHeight(newValue);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Update formData with the new age range
    setFormData(prev => ({ ...prev, ageRange: newValue }));
  };
  const handleGenderSelect = (gender) => {
    setFormData(prev => ({ ...prev, gender }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(''); // Clear error when user starts typing
  };

  const handleNext = () => {
    if (currentStep === 3 && !validateDate(formData.birthDate)) return;
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const validateDate = (dateString) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    
    if (!regex.test(dateString)) {
      setError('Введите дату в формате DD/MM/YYYY');
      return false;
    }

    const [day, month, year] = dateString.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    if (birthDate.getDate() !== day || birthDate.getMonth() !== month - 1 || birthDate.getFullYear() !== year) {
      setError('Введите правильную дату');
      return false;
    }

    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (age < 18 || (age === 18 && monthDiff < 0) || (age === 18 && monthDiff === 0 && dayDiff < 0)) {
      setError('Вам должно быть не менее 18 лет');
      return false;
    }

    setError('');
    return true;
  };

  const renderHeader = () => (
    <Header/>
  );

  const renderFooter = () => <Footer />;

  const renderStep1 = () => (
    <>
      <h1 className={styles.title}>Ваша половинка ждёт Вас!</h1>
      <p className={styles.subtitle}>Регистрация займёт 2 минуты</p>

      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: '100%' }} />
      </div>

      <label className={styles.genderLabel}>Укажите ваш пол</label>
      <button className={classNames(styles.genderButton, { [styles.genderButtonActive]: formData.gender === 'male' })} onClick={() => handleGenderSelect('male')}>♂ МУЖСКОЙ</button>
      <button className={classNames(styles.genderButton, { [styles.genderButtonActive]: formData.gender === 'female' })} onClick={() => handleGenderSelect('female')}>♀ ЖЕНСКИЙ</button>

      <button className={styles.nextButton} disabled={!formData.gender} onClick={handleNext}>ДАЛЕЕ</button>
    </>
  );

  const renderStep2 = () => (
    <>
      <h2 className={styles.title}>Укажите ваше имя</h2>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Введите имя" className={styles.input} />
      <div className={styles.buttonGroup}>
        <button className={styles.backButton} onClick={handleBack}>НАЗАД</button>
        <button className={styles.nextButton} disabled={!formData.name} onClick={handleNext}>ДАЛЕЕ</button>
      </div>
    </>
  );

  const renderStep3 = () => (
    <>
      <h2 className={styles.title}>Укажите вашe дату рождения</h2>
      <input type="text" name="birthDate" value={formData.birthDate} onChange={handleInputChange} placeholder="DD/MM/YYYY" className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.buttonGroup}>
        <button className={styles.backButton} onClick={handleBack}>НАЗАД</button>
        <button className={styles.nextButton} disabled={!formData.birthDate || error} onClick={handleNext}>ДАЛЕЕ</button>
      </div>
    </>
  );

  const renderStep4 = () => (
    <>
      <h2 className={styles.title}>Ваш статус отношений</h2>
      <DropdownSelect label="Ваш статус отношений" options={relationshipStatuses} value={formData.relationshipStatus} onChange={(value) => setFormData(prev => ({ ...prev, relationshipStatus: value }))} />
      <div className={styles.buttonGroup}>
        <button className={styles.backButton} onClick={handleBack}>НАЗАД</button>
        <button className={styles.nextButton} disabled={!formData.relationshipStatus} onClick={handleNext}>ДАЛЕЕ</button>
      </div>
    </>
  );

  const renderStep5 = () => (
    <>
      <h2 className={styles.title}>Ваш статус отношений</h2>
      <DropdownSelect label="Какая цель вашего знакомства" options={relationshipGoals} value={formData.goal} onChange={(value) => setFormData(prev => ({ ...prev, goal: value }))} />
      <div className={styles.buttonGroup}>
        <button className={styles.backButton} onClick={handleBack}>НАЗАД</button>
        <button className={styles.nextButton} disabled={!formData.goal} onClick={handleNext}>ДАЛЕЕ</button>
      </div>
    </>
  );

  const renderStep6 = () => (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.fx}>
          <h2 className={styles.title}>Какого возраста партнёры вам нравятся?</h2>
          <div className={styles.fx2}>
            <h2 className={styles.title}>{value[0]}</h2>
            <h2 className={styles.title}>-</h2>
            <h2 className={styles.title}>{value[1]}</h2>

          </div>

        </div>

        <Box sx={{ width: 300 }}>
          <Slider
            className={styles.slider}
            // getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            color='#AA3FEC'
          />
        </Box>

      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.backButton}
          onClick={handleBack}
        >
          НАЗАД
        </button>
        <button
          className={styles.nextButton}
          onClick={handleNext}
        >
          ДАЛЕЕ
        </button>
      </div>
    </>
  );
  const renderStep7 = () => (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.fx}>
          <h2 className={styles.title}>Рост</h2>
          <div className={styles.fx2}>
            <h2 className={styles.title}>{valueHeight}</h2>
          </div>

        </div>

        <Box sx={{ width: 300 }}>
          <Slider
            className={styles.slider}

            min={10}
            max={220}
            value={valueHeight}
            onChange={handleHeight}
            valueLabelDisplay="auto"
            color='#AA3FEC'
          />
        </Box>

      </div>
      <div className={styles.buttonGroup}>
        <button
          className={styles.backButton}
          onClick={handleBack}
        >
          НАЗАД
        </button>
        <button
          className={styles.nextButton}
          onClick={handleNext}
        >
          ДАЛЕЕ
        </button>
      </div>
    </>
  );


  const renderStep8 = () => (
    <>
    <PhotoGrid/>
    </>
  );


  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      case 7:
        return renderStep7();
      case 8:
        return renderStep8();
      default:
        return null;
    }
  };

  return (
    <div className={styles.registration}>
      {/* {renderHeader()} */}
      <div className={styles.content}>{renderContent()}</div>
      {/* {renderFooter()} */}
    </div>
  );
};

export default Registration;
