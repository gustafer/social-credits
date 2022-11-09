import { useEffect, useMemo, useState } from 'react'
import { Text, Button, Grid } from '@mantine/core';
import { useRecoilState } from 'recoil';
import President from '../components/President';
import { isChinaLoverState, isTaiwanLoverState } from '../atoms/atoms';
import '/src/styles/App.scss'

function App() {
  const [credits, setCredits] = useState<number>(1);


  const [isChinaLover, setIsChinaLover] = useRecoilState(isChinaLoverState);
  const [isTaiwanLover, setIsTaiwanLover] = useRecoilState(isTaiwanLoverState);
  const [isTaiwanEnjoyer, setIsTaiwanEnjoyer] = useState<boolean>(false);
  const [isChinaEnjoyer, setIsChinaEnjoyer] = useState<boolean>(false);
  const showButtons = useMemo(() => !isChinaLover && !isTaiwanLover, [isChinaLover, isTaiwanLover]);

  useEffect(() => {
    //Positivo
    if (credits >= 1) {
    if (credits >= 999)
      setIsChinaLover(true);

      //Enjoyer
      if (credits >= 499)
      setIsChinaEnjoyer(true);
      else
        setIsChinaEnjoyer(false);
    };

    //Negativo
    if (credits < 0) {
      if (credits <= -999)
        setIsTaiwanLover(true);

      //Enjoyer
      if (credits <= -499)
        setIsTaiwanEnjoyer(true);
      else
        setIsTaiwanEnjoyer(false);

    }

  }, [credits]);

  const addCredits = () => setCredits(credits + (isChinaEnjoyer ? 200 : 100));

  const decreaseCredits = () => setCredits(credits - (isTaiwanEnjoyer ? 200 : 100));
  

  const clearCredits = () => {
    setCredits(1);
    setIsTaiwanLover(false);
    setIsTaiwanEnjoyer(false);
    setIsChinaLover(false);
    setIsChinaEnjoyer(false);
  }

  return (
    <>
      <div className="App">
        {showButtons ? <>
          <Text>quick test :</Text>

          <h1>
            {isChinaEnjoyer ? "Which country is the best one, china or usa?" : "Did something important happened in june 4th, 1989?"}</h1>

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
                  <Button onClick={decreaseCredits}>
                    
                  {!isChinaEnjoyer ? "yes" : "usa" || !isTaiwanEnjoyer ? "usa" : "no"}
                  
                  </Button>
                </Grid.Col>
                <Grid.Col span={12}>
                  <Button onClick={addCredits}>
                    
                  {!isChinaEnjoyer ? "nothing" : "china" }
                  </Button>
                </Grid.Col>
              </Grid>
            </div>
            <h1>{credits}</h1>
            <Text>social credits.</Text>
          </> : <></>}
          <President />
        </div>
      </div></>
  )
}
export default App;
