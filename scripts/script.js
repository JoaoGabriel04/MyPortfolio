const toggleSwitch = document.getElementById('toggleSwitch');
const toggleSwitchMobile = document.getElementById('toggleSwitch-mobile');
const sidebar = document.getElementById('sidebar-mobile');
const overlay = document.getElementById('overlay');
const menuLinks = sidebar.querySelectorAll('a');
const menuButton = document.getElementById('menuButton');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('light-mode', toggleSwitch.checked);
    body.classList.toggle('dark-mode', !toggleSwitch.checked);
    console.log(toggleSwitch.checked ? 'Ligado' : 'Desligado');
});
toggleSwitchMobile.addEventListener('change', () => {
    body.classList.toggle('light-mode', toggleSwitchMobile.checked);
    body.classList.toggle('dark-mode', !toggleSwitchMobile.checked);
    console.log(toggleSwitchMobile.checked ? 'Ligado' : 'Desligado');
});

menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});
