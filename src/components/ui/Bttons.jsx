import dataButtons from '../../data/dataButtons';

const Button = () => {
    return (
        <div className='btn-container p-2'>
            {dataButtons.map((data) => (
                <button className='btn-control' key={data.id} type='button' title={data.iconAlt}>
                    <img src={data.iconSrc} alt={data.iconAlt} />
                </button>
            ))}
        </div>
    )
};

export default Button;