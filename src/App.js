import { useState } from 'react';

//components
import Square from './Square';
import Input from './Input';



function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, sethexValue] = useState('')
  const [isDark, setisDark] = useState(true)


  return (
    <div className='App'>
    <Square colorValue={colorValue} hexValue={hexValue} isDark={isDark}/>
    <Input colorValue={colorValue} setColorValue={setColorValue} sethexValue={sethexValue} isDark={isDark} setisDark={setisDark} />
    </div>
  );
}

export default App;
