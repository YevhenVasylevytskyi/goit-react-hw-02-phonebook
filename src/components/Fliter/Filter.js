import PropTypes from 'prop-types';

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <div>
        <input
          type="text"
          name="filter"
          onChange={onChangeFilter}
          value={filter}
        ></input>
      </div>
    </label>
  );
};

Filter.protoType = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
