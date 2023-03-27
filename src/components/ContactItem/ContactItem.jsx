import PropTypes from 'prop-types';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name} :</p>
      <p>{number}</p>
      <button onClick={onDeleteContact}>Delete</button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
