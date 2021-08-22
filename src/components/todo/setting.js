import React from 'react';
import { SettingContext } from '../../context/setting/context';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth/authContext'
import { If, Else, Then } from 'react-if';
import { Button, Dropdown } from 'react-bootstrap';


function SettingsPage(props) {
    const settings = useContext(SettingContext);
    const context = useContext(AuthContext)
    const ChangeItemsNum = (e) => {
        let value = parseInt(e.target.value);
        if (value) {

            setting.setPageItems(value);
        }

    }

    const _toggleVisibility = (e) => {
        e.preventDefault()
        settings.setShowCompleted(!settings.showCompleted)
    }


    const changeOrder = (ek, e) => {
        e.preventDefault()
        console.log(e.target.value)
        settings.setDifficulty(e.target.value)
    }
    return (
        <div>
            <If condition={context.loggedIn}>
                <Then>
                    <div>
                        <Button onClick={_toggleVisibility} > {(settings.showCompleted) ? 'Hide Completed' : 'Show Completed'}</Button>
                    </div>
                    <div>
                        <Dropdown >
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Order By Difficulty
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={changeOrder} as="button" value='Descending'>Ascending</Dropdown.Item>
                                <Dropdown.Item onSelect={changeOrder} as="button" value='Ascending'>Descending</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                    <div>
                        <label htmlFor="Rap"> Number of Results Per Page</label>
                        <input name='Rap' type="number" min={1} max={10} placeholder="input a number between 1 and 10" onChange={ChangeItemsNum}></input>

                    </div>
                </Then>
                <Else>
                    <></>
                </Else>
            </If>

        </div>




    )
}

export default SettingsPage
