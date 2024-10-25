
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
    // <input 
    //   className="greybutton"
    //   type="checkbox"
    //   onChange={toggleTheme}
    // > 𖤓 / ☾ .⭒</input>
    <button />
    
   );
}
 
export default DarkMode;