import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/App.css';

function LanguageSelect(){

  const { i18n } = useTranslation();

  const languages = [
    {
      code: 'pt',
      name: 'português',
      countryCode: 'pt',
      
    },
    {
      code: 'en',
      name: 'english',
      countryCode: 'gb',
    },
    {
      code: 'kr',
      name: '한국어',
      countryCode: 'kr',
    }
  ];

  return (
  
    <FormControl fullWidth className='formControl'>
      <InputLabel className='inputLabel' id="demo-simple-select-label">language</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={i18n.resolvedLanguage}
        onChange={e => {
          i18n.changeLanguage(e.target.value);
        }}
        
      >
        {languages.map(({code, name, countryCode})=>{
          return(
            <MenuItem 
              key={countryCode}
              value={code}
            >{name}</MenuItem>
          );
        })}   
      </Select>
    </FormControl>
  );
}

export default LanguageSelect;