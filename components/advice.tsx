import Image from "next/image";
import { useEffect, useState } from "react";

const Advice = () => {
    const [adviceText, setAdviceText] = useState<string>("");
    const [adviceId, setAdviceId] = useState<number>(0);
    const [clicked, setClicked] = useState<boolean>(false);


    //Executed when state of 'clicked' changes
    useEffect(() => {
        //fetch and assign data to respective variables
        const getAdvice = async () => {
            const res = await fetch('https://api.adviceslip.com/advice');
            const json = await res.json();

            if (res.ok) {
                setAdviceText(json.slip.advice);
                setAdviceId(json.slip.id);
            } else {
                setAdviceText("Server Error");
                setAdviceId(0);
            }
        };

        getAdvice();


    }, [clicked]);

    return (
        <div className="bg-dark-grayish-blue rounded-lg max-w-lg p-9">
            <h1 className="text-center text-neon-green"> Advice #{adviceId} </h1>
            <p className="text-light-cyan font-manrope text-size-28 text-center max-w-md p-6">
                "{adviceText}"
            </p>

            <Image className="justify-center" src="/pattern-divider-desktop.svg" width={448} height={400} alt={""} />


            <div className="relative mt-8" onClick={() => { clicked?setClicked(false): setClicked(true)}}>
                <div className="absolute flex items-center justify-center top-4 left-8 right-8">
                    <div className="flex items-center justify-center bg-neon-green w-16 h-16 rounded-full hover:shadow-around hover:shadow-neon-green">
                        <Image className="justify-center" src="/icon-dice.svg" width={24} height={24} alt={""} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advice;
