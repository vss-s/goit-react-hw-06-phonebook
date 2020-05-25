import React from 'react';
import Section from '../components/Section/Section';
import PhoneBookFields from '../components/PhoneBookFields/PhoneBookFieldsContainer';
import PhoneBookList from '../components/PhoneBookList/PhoneBookListContainer';
import PhoneBookSearchField from '../components/PhoneBookSearchField/PhoneBookSearchFieldContainer';
import PhoneBookLogo from '../components/PhoneBookLogo/PhoneBookLogo';

const App = ({ phoneBookItems }) => (
  <main>
    <PhoneBookLogo title="PhoneBook" />
    <Section isActive>
      <PhoneBookFields />
    </Section>
    <Section title={'Contacts'} isActive={phoneBookItems.length > 0}>
      <PhoneBookSearchField isActive={phoneBookItems.length > 1} />
      <PhoneBookList />
    </Section>
  </main>
);

export default App;
