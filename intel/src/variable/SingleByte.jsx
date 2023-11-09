import PropTypes from 'prop-types';
const SingleByte = (props) =>
{
    return (
        <div className="bg-zinc-400 w-[60%] h-24 rounded-lg p-2 text-center">
            <h2 className=" text-xl">{props.firstLetter}{props.secondLetter}</h2>
        </div>
    );
}

SingleByte.propTypes = {
    firstLetter: PropTypes.string.isRequired,
    secondLetter: PropTypes.string.isRequired,
}

export default SingleByte;