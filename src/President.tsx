
import { Input, Space, Text } from '@mantine/core';
import { useState } from 'react';
import { atom, useRecoilValue } from 'recoil';


function President() {
    const [name, setName] = useState<string>('You')
    const isChinaLoverState = atom({
        key: 'isChinaLover', // unique ID (with respect to other atoms/selectors)
        default: false, // default value (aka initial value)
    });


    const isTaiwanLoverState = atom({
        key: 'isTaiwanLover', // unique ID (with respect to other atoms/selectors)
        default: false, // default value (aka initial value)
    });

    const isChinaLover = useRecoilValue(isChinaLoverState);
    const isTaiwanLover = useRecoilValue(isTaiwanLoverState);
    const showInput = isChinaLover || isTaiwanLover;
 
    return (
        <>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            {showInput ?
                <Input defaultValue={name === 'You' ? '' : name} placeholder='your name here' onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)} /> :
                <></>
            }


            <div>
                <Text >
                    <h3>
                        actual presidents :
                    </h3>
                    <strong>china: </strong>{isChinaLover ? name : 'Xi Jinping'}<br />
                    <strong>taiwan: </strong>{isTaiwanLover ? name : 'Tsai Ing Wen'}
                </Text >
            </div>
        </>
    )
}


export default President
