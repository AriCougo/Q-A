// QuestionAnswer.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/QuestionAnswer.css';

function QuestionAnswer() {
  const { t } = useTranslation();

  // Initialize state for each question
  const [questionStates, setQuestionStates] = useState(false);

  const questions = ['majorProgram', 'libraryClose', 'financialAid'];
  const answers = ['universityBenefits', 'avarageSizeOfClass', 'availableAids'];

  function handleClick(questionKey) {
    // Toggle the state for the clicked question
    setQuestionStates((prevState) => ({
      ...prevState,
      [questionKey]: !prevState[questionKey],
    }));
  }

  return (
    <div className='section'>
      {questions.map((key) => (
        <div key={key} className='ques-answ-section'>
          <div className='question' onClick={() => handleClick(key)}>
            <span className='question-span'>{t(`question:${key}`)}</span> 
            <span className={questionStates[key] ? 'arrow-icon' : 'arrow-icon-open'}>^</span> 
          </div>
          <div className={questionStates[key] ? 'answer-show' : 'answer'}>
            <span >
              {t(`answer:${answers[questions.indexOf(key)]}`)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAnswer;




