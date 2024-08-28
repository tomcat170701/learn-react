import colorNames from "colornames";




const Input = ({colorValue, setColorValue, sethexValue, isDark, setisDark}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label>Add color name</label>
        <input 
        autoFocus type="text" 
        placeholder="Add color name" 
        required value={colorValue} 
        onChange={(e)=>{setColorValue(e.target.value);
                        sethexValue(colorNames(e.target.value));
        }} />
        <button type='button' onClick={()=>setisDark(!isDark)}>Toggle Text Color</button>
    </form>
  )
}

export default Input