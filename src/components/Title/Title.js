import './Title.scss';

const Title = (props) => {
    return (
        <div  className='title'>
            <h1>
                Bitcoin price
            </h1>

            <h2>
                {`Updated: ${props.time}`}
            </h2>
        </div>
    )
}

export default Title;