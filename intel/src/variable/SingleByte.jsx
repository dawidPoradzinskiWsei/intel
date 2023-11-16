import PropTypes from 'prop-types';
const SingleByte = (props) =>
{
    return (
        <div className="bg-zinc-400 w-[60%] h-24 rounded-lg p-2 text-center flex flex-col items-center justify-center">
            <h2 className=" text-xl">{props.id}</h2>
            <p className='text-xl'>{parseInt(props.binary,2)}</p>
            <p className='text-xl'>{props.binary}</p>
        </div>
    );
}

SingleByte.propTypes = {
    id: PropTypes.string.isRequired,
    binary: PropTypes.string.isRequired,
}

export default SingleByte;