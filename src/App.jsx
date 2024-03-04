import React from 'react';
import LanguageSelect from './LanguageSelect';
import QuestionAnswer from './QuestionAnswers';
import './styles/App.css';
import SendQuestion from './SendQuestion';

function App () {
  return(
    <section>   
      <LanguageSelect/>
      <QuestionAnswer/>
      <SendQuestion/>
    </section>
   
  );
}

export default App;