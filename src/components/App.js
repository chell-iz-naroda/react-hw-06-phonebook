import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { PhonebookList } from './PhonebookList/PhonebookList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';

export const App = () => {

  return (
    <>
      <Layout>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        <PhonebookList />
      </Layout>
    </>
  );

}