import React, { useState } from 'react';
export const SettingContext = React.createContext();

function SettingtProvider(props) {
    const [pageItems, setPageItems] = useState(3);
    const [sorted, setSorted] = useState('Ascending');
    const [completed, setCompleted] = useState(false);

    const settingStata = {
        pageItems,
        setPageItems,
        sorted,
        setSorted,
        completed,
        setCompleted


    }
    return (
        <SettingContext.Provider value={settingStata}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingtProvider
