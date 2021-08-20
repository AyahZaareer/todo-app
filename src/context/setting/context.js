import React, { useState } from 'react';
export const SettingContext = React.createContext();

function SettingtProvider(props) {
    const [pageItems, setPageItem] = useState(4);
    const [sorted, setSorted] = useState('Ascending');
    const [completed, setCompleted] = useState(false);

    const settingStata = {
        pageItems,
        setPageItem,
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
