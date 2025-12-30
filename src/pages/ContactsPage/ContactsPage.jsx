import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import ContactList from "../../components/contactList/ContactList";

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default ContactsPage;
