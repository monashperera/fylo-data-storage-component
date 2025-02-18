import Logo from '../assets/images/logo.svg'
import Button from './ui/Bttons';

const InfoControls = () => {
    return (
        <>
            <div className="card-info-details">
                <div className="card-info-logo p-2 pb-3">
                    <img
                        src={Logo}
                        alt="Fylo"
                        aria-label='Logo'
                    />
                </div>
                <div className='card-functions'>
                    <Button />
                </div>
            </div>
        </>
    )
};

export default InfoControls;