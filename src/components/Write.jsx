import React, { useState } from 'react'
import Select from "react-select";
import styled from 'styled-components';

const SelectBox = styled.div`
    border: 3px solid rgb(221, 221, 221);
    height: 200px;
    overflow: hidden;
    /* position: relative; */
    margin-top: 50px;
`

const SelectLine = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    position: fixed; 
`

const customStyles1 = {
    control: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 28px',
        width: '300px',
        height: '40px'
    }),
    option: (provided) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        padding: 20,
        width: '300px',
        height: '40px'

    }),
};
const customStyles2 = {
    control: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        padding: '0px 28px',
        width: '300px',
        height: '40px',

    }),
    option: (provided) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        padding: 20,
        width: '300px',
        height: '40px',

    }),
};

const firstOptions = [
    { value: "react", label: "React" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "reactnative", label: "React Native" },
];

const secondOptions = [
    { value: "react", label: "React" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "reactnative", label: "React Native" },
];



const Write = () => {
    const [selectedOnline, setSelectedOnline] = useState(firstOptions[0]);
    const [selectedOffline, setSelectedOffline] = useState(secondOptions[0]);

    return (
        <div>
            <SelectBox>
                <h1>Select Online</h1>
                <SelectLine>
                    <div>
                        <Select
                            options={firstOptions}
                            onChange={setSelectedOnline}
                            value={selectedOnline}
                            styles={customStyles1}
                            isSearchable={false}
                            placeholder="Select online"
                        />
                    </div>
                    <div>
                        <Select
                            options={secondOptions}
                            onChange={setSelectedOffline}
                            value={selectedOffline}
                            styles={customStyles2}
                            isSearchable={false}
                            placeholder="Select offline"
                        />
                    </div>
                </SelectLine>
            </SelectBox>
        </div >
    )
}

export default Write;
