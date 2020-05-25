import { connect } from 'react-redux';
import filterSlice from '../../redux/filterReducer/filterSlice';
import PhoneBookSearchField from './PhoneBookSearchField';
import {
  getFilterQuery,
  getFilterOnChangeQuery,
} from '../../redux/filterReducer/filterSelectors';

const mapStateToProps = state => ({
  filterQuery: getFilterQuery(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeQuery: query => dispatch(getFilterOnChangeQuery(filterSlice, query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhoneBookSearchField);
