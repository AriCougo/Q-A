import React from 'react';
import './styles/SendQuestion.css';
import { useTranslation } from 'react-i18next';

function SendQuestion () {
  const { t } = useTranslation('title');

  return(
    <form onSubmit={(e)=>e.preventDefault()}>
      <div className='question-container'>
        <h1>{t('questionTitle')}</h1>
        <p>{t('leaveQuestion', {ns: 'secondTitle'})}</p>
        <div className="question-input">
          <input type="text"  placeholder={t('placeholder', {ns: 'inputPlaceholder'})}/>
        </div>
      </div>
    </form>
   
  );
}

export default SendQuestion;