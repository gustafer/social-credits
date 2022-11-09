
import { Input, Space, Text } from '@mantine/core';
import { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { isChinaLoverState, isTaiwanLoverState } from '../atoms/atoms';


function President() {
    const [name, setName] = useState<string>('You')


    const isChinaLover = useRecoilValue(isChinaLoverState);
    const isTaiwanLover = useRecoilValue(isTaiwanLoverState);

    const showInput = useMemo(() => isChinaLover || isTaiwanLover, [isChinaLover, isTaiwanLover]);

    return (
        <>
            <Space h="xl" />
            <Space h="xl" />
            <Space h="xl" />
            {showInput ?
                <Input defaultValue={name === 'You' ? '' : name}
                    type="text"
                    maxLength={40} placeholder='your name here'
                    onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)} />
                :
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
