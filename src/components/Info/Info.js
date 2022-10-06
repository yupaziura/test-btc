import './Info.scss';

const Info = (props) => {
    return (
        <div className="info">
            <div className="info_title">{props.title}</div>
            <div className="info_value">{props.value}</div>
        </div>
    )
};

export default Info;