
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  };

  const toggleTheme = e => {
    if (e.target.checked) setDarkMode();
    else setLightMode()
  };
  
  return ( 
    
    <button 
       className="greybutton"
       type="checkbox"
       onCllick={toggleTheme}
     > 𖤓 / ☾ .⭒</button>
    
    
   );
}
 
export default DarkMode;