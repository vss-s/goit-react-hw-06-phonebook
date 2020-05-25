import { connect } from 'react-redux';
import contactSlice from '../../redux/contactReducer/contactSlice';
import PhoneBookListItem from './PhoneBookListItem';
import { getOnDeleteContact } from '../../redux/contactReducer/contactSelectors';

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(getOnDeleteContact(contactSlice, id)),
});

export default connect(null, mapDispatchToProps)(PhoneBookListItem);
