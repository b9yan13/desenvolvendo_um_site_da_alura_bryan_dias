let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

// Função para habilitar o dark mode
const enableDarkMode = () => {
    document.body.classList.add('darkmode')  // Adiciona a classe 'darkmode' ao body
    localStorage.setItem('darkmode', 'active')  // Salva o estado no localStorage
}

// Função para desabilitar o dark mode
const disableDarkMode = () => {
    document.body.classList.remove('darkmode')  // Remove a classe 'darkmode' do body
    localStorage.removeItem('darkmode')  // Remove o item do localStorage
}

// Verifica se o darkmode está ativo ao carregar a página
if (darkmode === "active") {
    enableDarkMode()
}

// Evento de clique para alternar entre os modos
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')  // Lê o valor atual do localStorage
    if (darkmode !== "active") {
        enableDarkMode()  // Habilita o modo escuro se não estiver ativo
    } else {
        disableDarkMode()  // Desabilita o modo escuro se estiver ativo
    }
})

