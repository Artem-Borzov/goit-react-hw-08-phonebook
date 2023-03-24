import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactsList } from '../../components/ContactsList/ContactsList';
import { Filter } from '../../components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const { data, error, isFetching } = useFetchContactsQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );
  return (
    <div>
      <ContactForm data={data} />
      <h2>Contacts</h2>
      <Filter />

      {data && <ContactsList data={data} />}
      {isFetching && !error && <Loader />}
    </div>
  );
};

export default Contacts;
