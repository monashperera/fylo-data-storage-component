import { useEffect, useState } from "react";
import dataMoc from "../moc/dataMoc";

const StorageInfo = () => {

    const [width, setWidth] = useState('15px');
    const [freeSto, setFreeSto] = useState(0);

    let useData = dataMoc[0].used;
    let maxData = dataMoc[0].max;

    useEffect(() => {
        let output = ((useData / maxData) * 100);
        setWidth((width) => 
            width = output > 3 ? `${output}%` : '15px'
        );
        setFreeSto((data) => data = maxData - useData);
    },[useData, maxData]);
    
    return (
        <>
            {dataMoc.map(data => (
                <div className="card-info-storage" key={data.id}>
                    <div className='pb-3' data-testid='storageUsed'>
                        <p>You’ve used <b>{data.used} {data.unit}</b> of your storage</p>
                    </div>
                    <div className="card-storage-left" data-testid='storageFree'>
                        <p><span>{freeSto}</span><sup>{data.unit} Left</sup></p>
                    </div>
                    <div className='pb-3'>
                        <div className='status-bar-container' data-testid='storageStatusBar'>
                            <div className='status-bar' style={{ width: width }}>
                                <span className='status-bar-dot'></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p data-testid='storageMin'><b>{data.min} {data.unit}</b></p>
                        <p data-testid='storageMax'><b>{data.max} {data.unit}</b></p>
                    </div>
                </div>
            ))}
        </>
    )
};

export default StorageInfo;