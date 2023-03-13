import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface functionProps {
    setValue: (value: number) => void;
}

function Doubler({ setValue }: functionProps): JSX.Element {
    return <Button onClick={() => setValue(2)}>Double</Button>;
}

function Halver({ setValue }: functionProps): JSX.Element {
    return <Button onClick={() => setValue(0.5)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const setValue = (value: number): void => setDhValue(value * dhValue);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setValue={setValue} />
            <Halver setValue={setValue}></Halver>
        </div>
    );
}
