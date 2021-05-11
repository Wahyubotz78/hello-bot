<template>
  <div id="app">
    <!--========== HEADER ==========-->
    <header class="header">
      <div class="header__container">
        <a href="/" class="header__logo">Hello Bot</a>
        <div class="header__toggle">
          <i class='bx bx-menu' id="header-toggle"></i>
        </div>
      </div>
    </header>

        <!--========== SIDENAV ==========-->
    <div class="nav" id="navbar">
      <nav class="nav__container">
        <div>
          <a href="#" class="nav__link nav__logo">
            <i class='bx bxs-bot nav__icon' ></i>
            <span class="nav__logo-name">Hello Bot</span>
          </a>
          <div class="nav__list">
            <div class="nav__items">
              <a href="/" class="nav__link">
                <i class='bx bx-home nav__icon' ></i>
                <span class="nav__name">Home</span>
              </a>
              <a href="/about-me" class="nav__link">
                <i class='bx bx-heart-square nav__icon'></i>
                <span class="nav__name">About Me</span>
              </a>
            </div>

            <div class="nav__items">
              <h3 class="nav__subtitle">Feature</h3>
              <a href="/telegram-bot" class="nav__link">
                <i class='bx bxl-telegram nav__icon'></i>
                <span class="nav__name">Telegram Bot</span>
              </a>
              <a href="/messenger-bot" class="nav__link">
                <i class='bx bxl-messenger nav__icon' ></i>
                <span class="nav__name">Messenger Bot</span>
              </a>
              <a href="/discord-bot" class="nav__link">
                <i class='bx bxl-discord nav__icon' ></i>
                <span class="nav__name">Discord Bot</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    /*==================== SHOW NAVBAR ====================*/
    const showMenu = (headerToggle, navbarId) =>{
        const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId)
        
        // Validate that variables exist
        if(headerToggle && navbarId){
            toggleBtn.addEventListener('click', ()=>{
                // We add the show-menu class to the div tag with the nav__menu class
                nav.classList.toggle('show-menu')
                // change icon
                toggleBtn.classList.toggle('bx-x')
            })
        }
    }
    showMenu('header-toggle','navbar')

    /*==================== LINK ACTIVE ====================*/
    const linkColor = document.querySelectorAll('.nav__link')

    function colorLink(){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink))
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
