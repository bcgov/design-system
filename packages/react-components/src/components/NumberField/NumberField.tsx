import type {NumberFieldProps} from 'react-aria-components';
import {Button, FieldError, Group, Input, Label, NumberField as MyNumberField, Text} from 'react-aria-components';

import "./NumberField.css";
import {useEffect, useState} from "react";

interface MyNumberFieldProps extends NumberFieldProps {
    label?: string;
    description?: string;
}

export default function NumberField(
    {
        label,
        description,
        value,
        onChange,
        isReadOnly,
        ...props }: MyNumberFieldProps
) {
    const [currValue, setCurrValue] = useState(0);
    const [errorMode, setErrorMode] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (value && !Number.isInteger(value)) {
            setErrorMode(true);
            setErrorMsg("value is not a number");
        } else if (!onChange) {
            setErrorMode(true);
            setErrorMsg("function has not been set up properly");
        } else {
            setErrorMode(false);
            setCurrValue(value || 0);
            setErrorMsg("");
        }
    }, [value, onChange]);

    function changeButtonClicked(num: number) {
        if (onChange) {
            onChange(num);
            setCurrValue(num);
        }
    }

    return (
        <MyNumberField
            {...props}
            className={`bcds-react-aria-NumberField`}
            value={currValue}
            isReadOnly={isReadOnly ? true : false}
            onChange={(num) => changeButtonClicked(num)}
        >
            <Label>{label}</Label>
            <Group className={`bcds-react-aria-NumberField-Group ${errorMode ? ' isError' : ''} ${isReadOnly ? ' isReadOnly' : ''}`}>
                {/*minus sign*/}
                <Button slot="decrement" className={`bcds-react-aria-Button ${isReadOnly ? ' isReadOnly' : ''} ${errorMode ? ' isError' : ''}`}>
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="12" height="2" fill="#2B2B2B"/>
                        <g id="Checkbox" clip-path="url(#clip0_9472_18615)">
                            <rect width="1710" height="3938" transform="translate(-478 -2919)" fill="white"/>
                            <g id="Page">
                                <g id="Wrapper">
                                    <rect width="1518" height="240" transform="translate(-382 -125)" fill="#F3F2F1"/>
                                    <g id="DRAG TARGET">
                                        <g id="Row Wrapper">
                                            <g id="ROW">
                                                <g clip-path="url(#clip1_9472_18615)">
                                                    <g id="Content">
                                                        <g id=".Content Row">
                                                            <g id="Cells" clip-path="url(#clip2_9472_18615)">
                                                                <rect width="960" height="240" transform="translate(-142 -125)" fill="#F3F2F1"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Group">
                                        <g id="Frame 3465472">
                                            <g id="Number field">
                                                <g id="Field">
                                                    <g clip-path="url(#clip3_9472_18615)">
                                                        <g id="Number field/Part">
                                                            <mask id="path-5-inside-1_9472_18615" fill="white">
                                                                <path d="M-11 -19H23V21H-11V-19Z"/>
                                                            </mask>
                                                            <path d="M-11 -19H23V21H-11V-19Z" fill="white"/>
                                                            <path d="M22 -19V21H24V-19H22Z" fill="#D8D8D8" mask="url(#path-5-inside-1_9472_18615)"/>
                                                            <g id="20px/Minus">
                                                                <path id="&#239;&#129;&#168;" d="M11.6901 0.9998C11.6901 1.38278 11.3891 1.65634 11.0335 1.65634H0.966597C0.583616 1.65634 0.310059 1.38278 0.310059 1.02716C0.310059 0.644175 0.583616 0.343262 0.966597 0.343262H11.0335C11.3891 0.343262 11.6901 0.644175 11.6901 0.9998Z" fill="#2D2D2D"/>
                                                            </g>
                                                        </g>
                                                    </g>
                                                    <path d="M-7 -18.5H109C110.933 -18.5 112.5 -16.933 112.5 -15V17C112.5 18.933 110.933 20.5 109 20.5H-7C-8.93299 20.5 -10.5 18.933 -10.5 17V-15C-10.5 -16.933 -8.933 -18.5 -7 -18.5Z" stroke="#D8D8D8"/>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_9472_18615">
                                <rect width="1710" height="3938" fill="white" transform="translate(-478 -2919)"/>
                            </clipPath>
                            <clipPath id="clip1_9472_18615">
                                <rect x="-382" y="-125" width="1200" height="240" rx="8" fill="white"/>
                            </clipPath>
                            <clipPath id="clip2_9472_18615">
                                <rect width="960" height="240" fill="white" transform="translate(-142 -125)"/>
                            </clipPath>
                            <clipPath id="clip3_9472_18615">
                                <path d="M-11 -15C-11 -17.2091 -9.20914 -19 -7 -19H109C111.209 -19 113 -17.2091 113 -15V17C113 19.2091 111.209 21 109 21H-7C-9.20914 21 -11 19.2091 -11 17V-15Z" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Button>
                <div className={`bcds-react-aria-NumberField-input-wrapper ${isReadOnly ? ' isReadOnly' : ''}`}>
                    <div className={"bcds-react-aria-NumberField-input-container"}>
                        <Input className={`bcds-react-aria-NumberField-Input ${isReadOnly ? ' isReadOnly' : ''} ${errorMode ? ' isError' : ''}`}/>
                        { errorMode &&
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="20px/Exclamation triangle">
                                <path id="Vector" d="M17.835 15.0312C18.335 15.9062 17.71 17 16.6787 17H3.33499C2.30374 17 1.67874 15.9062 2.14749 15.0312L8.83499 3.65625C9.11624 3.21875 9.55373 3 10.0225 3C10.46 3 10.8975 3.21875 11.1787 3.65625L17.835 15.0312ZM3.64749 15.5H16.3663L9.99123 4.65625L3.64749 15.5ZM10.0225 12.5625C10.5537 12.5625 10.9912 13 10.9912 13.5312C10.9912 14.0625 10.5537 14.5 10.0225 14.5C9.45998 14.5 9.02249 14.0625 9.02249 13.5312C9.02249 13 9.45998 12.5625 10.0225 12.5625ZM9.27249 7.75C9.27249 7.34375 9.58498 7 10.0225 7C10.4287 7 10.7725 7.34375 10.7725 7.75V10.75C10.7725 11.1875 10.4287 11.5 10.0225 11.5C9.58498 11.5 9.27249 11.1875 9.27249 10.75V7.75Z" fill="#CE3E39"/>
                            </g>
                        </svg>
                        }
                    </div>
                </div>
                {/* plus sign */}
                <Button slot="increment" className={`bcds-react-aria-Button ${isReadOnly ? ' isReadOnly' : ''} ${errorMode ? ' isError' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="20px/Plus">
                            <path id="Vector" d="M15.6875 10.0833C15.6875 10.4661 15.3867 10.7395 15.0312 10.7395H10.6562V15.1145C10.6562 15.4973 10.3555 15.7981 10 15.7981C9.61719 15.7981 9.34375 15.4973 9.34375 15.1145V10.7395H4.96875C4.58594 10.7395 4.3125 10.4661 4.3125 10.1106C4.3125 9.72778 4.58594 9.427 4.96875 9.427H9.34375V5.052C9.34375 4.69653 9.61719 4.4231 10 4.4231C10.3555 4.4231 10.6562 4.69653 10.6562 5.052V9.427H15.0312C15.3867 9.427 15.6875 9.72778 15.6875 10.0833Z" fill="#2D2D2D"/>
                        </g>
                    </svg>
                </Button>
            </Group>
            {description && <Text slot="description">{description}</Text>}
            <FieldError>{errorMsg}</FieldError>
        </MyNumberField>
    );
}