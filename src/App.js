import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import './App.css';
import {Trans, useTranslation} from 'react-i18next';
import { Button,Divider } from 'semantic-ui-react';
import { Flag } from 'semantic-ui-react'
function App() {
  
  const {t,i18n} = useTranslation()
  const changeLanguage = (language)=>{
    i18n.changeLanguage(language);
  };

  const options = [
    { key: 'm', text: <Trans i18nKey="male"></Trans> , value: 'male' },
    { key: 'f', text: <Trans i18nKey="female"></Trans>, value: 'female' },
    { key: 'o', text: <Trans i18nKey="other"></Trans>, value: 'other' },
  ]
  const [state, setState] = useState({});
  
  return (
    <div className="App">

<h3><Trans i18nKey="description"></Trans></h3>

    <Button basic color='blue' onClick={()=> changeLanguage("en")}><Flag name='gb eng' />English</Button>
    <Button basic color='violet' onClick={()=> changeLanguage("si")}><Flag name='lk' />සිංහල</Button>
    <Divider />

    <Form size='big' key='big'>
        <Form.Group widths='equal' >
          <Form.Input fluid label={t('firstName')} placeholder={t('firstName')} />
          <Form.Input fluid label={t('lastName')} placeholder={t('lastName')} />
          <Form.Input label={t('address')} placeholder={t('address')} />
          <Form.Input label={t('phone')} placeholder={t('phone')} />
          <Form.Select
            fluid
            label={t('gender')}
            options={options}
            placeholder={t('gender')}
          />
        </Form.Group>
        <Form.Group inline>
          <label>{t('size')}</label>
          <Form.Radio
            label={t('small')}
            value='sm'
            checked={state === 'sm'}
            onChange={() => setState('sm')}
          />
          <Form.Radio
            label={t('medium')}
            value='md'
            checked={state === 'md'}
            onChange={() => setState('md')}
          />
          <Form.Radio
            label={t('large')}
            value='lg'
            checked={state === 'lg'}
            onChange={() => setState('lg')}
          />
        </Form.Group>
        <Form.TextArea label={t('about')} placeholder={t('tellUsMore')}/>
        <Form.Checkbox label={t('termAndConditions')}/>
        <Form.Button basic color='blue'>{t('submit')}</Form.Button>
        
      </Form>

    </div>
  );
}

export default App;
