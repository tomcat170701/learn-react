const Square = ({colorValue, hexValue, isDark}) => {
  return (
    <section className="square" style={{backgroundColor: colorValue, color:isDark?"#000":"#FFF"}}>
    <p>{colorValue?colorValue:"Empty Value"}</p>
    <p>{hexValue?hexValue:null}</p>
    </section>
  )
}


Square.defaultProps = {
    colorValue: "empty color value"
}
export default Square