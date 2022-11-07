import { useState } from 'react'
import './App.scss'
import { Text, Button, Grid } from '@mantine/core';
import { atom, useRecoilState } from 'recoil';

function App() {
  const [credits, setCredits] = useState<number>(0);
 

  const isChinaLoverState = atom({
    key: 'isChinaLover', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });


  const isTaiwanLoverState = atom({
    key: 'isTaiwanLover', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

  const [isChinaLover, setIsChinaLover] = useRecoilState(isChinaLoverState);
  const [isTaiwanLover, setIsTaiwanLover] = useRecoilState(isTaiwanLoverState);
  const showButtons = !isChinaLover && !isTaiwanLover;

  const addCredits = () => {
    const newCredit = credits + 100;
    setCredits(newCredit);
    if (newCredit > 999)
      setIsChinaLover(true);
  }

  const decreaseCredits = () => {
    const newCredit = credits - 100;
    setCredits(newCredit);
    if (newCredit < -999)
      setIsTaiwanLover(true);
  }
  
  const clearCredits = () => {
    setCredits(0);
    setIsTaiwanLover(false);
    setIsChinaLover(false);
  }

  return (
    <>
      <div className="App">
        {showButtons ? <>
          <Text>quick test :</Text>

          <h1>Does taiwan make part of china?</h1>
        </> : <></>
        }
        <div>
          {isChinaLover ?
            <div>
              <h1>You are now the President of China!</h1> <h3>Xi Jinping has successfully been demoted.</h3>
              <Button onClick={clearCredits}>I dont want</Button>
            </div>
            : <></>
          }
          {isTaiwanLover ?
            <div>
              <h1>You are now the President of Taiwan!</h1> <h3>Tsai Ing Wen has successfully been demoted.</h3>
              <Button onClick={clearCredits}>I dont want</Button>
            </div>
            : <></>
          }
          {showButtons ? <>
            <div className="buttons">
              <Grid columns={24} justify="center">
                <Grid.Col span={12}>
                  <Button onClick={addCredits}>
                    Yes
                  </Button>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Button onClick={decreaseCredits}>
                    No
                  </Button>
                </Grid.Col>
              </Grid>
            </div>
            <h1>{credits}</h1>
            <Text>social credits.</Text>
          </> : <></>}
        </div>
      </div></>
  )
}
export default App;
