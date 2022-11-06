import { useState } from 'react'
import './App.scss'
import { render } from 'react-dom';
import { Text, Button, Grid } from '@mantine/core';

function App() {
  let [credits, setCredits,] = useState(0);


  if (credits > 999) {
    let presidentChina = <h1>You are now the President of China!</h1>;
    let xiJinping = <h3>Xi Jinping has successfully been demoted.</h3>
    return (
      <div>
        {presidentChina} {xiJinping}
        <Button onClick={() => setCredits((credits) => credits - 1000)}>I dont want</Button>
      </div>
    )
  }

  if (credits < -999) {
    let presidentTaiwan = <h1>You are now the President of Taiwan!</h1>;
    let tsaiIngWen = <h3>Tsai Ing Wen has successfully been demoted.</h3>
    return (
      <div>
        {presidentTaiwan} {tsaiIngWen}
        <Button onClick={() => setCredits((credits) => credits + 1000)}>I dont want</Button>
      </div>
    )
  }

  return (
    <><Text>quick test :</Text><div className="App">
      <div>
      </div>
      <h1>Does taiwan make part of china?</h1>
      <div>


        <div className="buttons">
          <Grid columns={24} justify="center">
            <Grid.Col span={12}>
              <Button onClick={() => setCredits((credits) => credits + 100)}>
                Yes
              </Button>
            </Grid.Col>
            <Grid.Col span={12}>
              <Button onClick={() => setCredits((credits) => credits - 100)}>
                No
              </Button>
            </Grid.Col>
          </Grid>
        </div>
        <h1>{credits}</h1>

        <Text>social credits.</Text>
      </div>
    </div></>
  )
}
export default App;
