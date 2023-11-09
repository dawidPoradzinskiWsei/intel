import PropTypes from 'prop-types';
const SingleByte = (props) =>
{
    return (
        <div className="bg-zinc-400 w-[60%] h-24 rounded-lg p-2 text-center flex flex-col items-center justify-center">
            <h2 className=" text-xl">{props.firstLetter}{props.secondLetter}</h2>
            <p className='text-xl'>{props.data}</p>
        </div>
    );
}

SingleByte.propTypes = {
    firstLetter: PropTypes.string.isRequired,
    secondLetter: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
}

export default SingleByte;