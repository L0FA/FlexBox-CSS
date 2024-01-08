const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
  
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");
  
    const isBurger = src === "bars-solid.svg";
    const iconName = isBurger ? "xmark-solid.svg" : "bars-solid.svg";
  
    burgerMenu.setAttribute("src", iconName);
  
    if (!isBurger) {
      navigation.classList.add("navigation--mobile--fadeout");
      setTimeout(() => {
        navigation.classList.toggle("navigation--mobile");
      }, 300);
    } else {
      navigation.classList.remove("navigation--mobile--fadeout");
      navigation.classList.toggle("navigation--mobile");
    }
  };

  let miMensaje = "JS Configurado. Bienvenido, Usuario."
  
  alert(miMensaje)

  function saludar(){
    alert("Hola, te estoy saludando desde mi web, no es eso una locura? por cierto, detectamos 50 virus en tu computadora, mas especificamente en tu carpeta de Documentos... Quizas quieras revisar.")
}

const botonSaludar = document.getElementById("botonSaludo")

botonSaludar.addEventListener("click", saludar);