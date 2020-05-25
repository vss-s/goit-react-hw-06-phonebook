import { connect } from 'react-redux';
import contactSlice from '../../redux/contactReducer/contactSlice';
import {
  getContacts,
  getOnAddContact,
} from '../../redux/contactReducer/contactSelectors';
import PhoneBookFields from './PhoneBookFields';

const mapStateToProps = state => ({
  phoneBookItems: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onAddContact: obj => dispatch(getOnAddContact(contactSlice, obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookFields);
