import { connect } from 'react-redux';
import PhoneBookList from './PhoneBookList';
import { getFilterQuery } from '../../redux/filterReducer/filterSelectors';
import { getContacts } from '../../redux/contactReducer/contactSelectors';

const mapStateToProps = state => ({
  phoneBookItems: getContacts(state),
  filterQuery: getFilterQuery(state),
});

export default connect(mapStateToProps)(PhoneBookList);
