const isDarkMode = () => {
	var theme = localStorage.getItem('isDarkMode');
	
	if(!theme)
		storageTheme(false);
	else
		return theme === 'true';
	return false;
}

function storageTheme(mode){
	localStorage.setItem("isDarkMode", String(mode));
}

function changeHeader(){
	const header = document.querySelector('.topMenu');

	var darkModeButton = document.createElement('a');

	if(isDarkMode())
		setDarkMode();
	else
		rmDarkMode();
	
	darkModeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M4 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3.5 1.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-6 2.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm5 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/></svg>`;

	darkModeButton.id="changeMode";
	darkModeButton.className = "top-menu__item top-menu__item--right";
	darkModeButton.onclick = () => {
		changeMode();
	}

	if(header != null)
		header.appendChild(darkModeButton);
}

function changeMode(){
	if(isDarkMode())
		rmDarkMode();
	else
		setDarkMode();
}

function setDarkMode(){
	storageTheme(true);
	var style = document.createElement('link');
	style.rel = 'stylesheet';
	style.type = 'text/css';
	style.href = chrome.extension.getURL('darkmode.css');
	style.setAttribute("id","dark-mode-css");
	(document.head||document.documentElement).appendChild(style);
}

function rmDarkMode(){
	storageTheme(false);
	const style = document.querySelector('#dark-mode-css');
	if(style)
		style.remove();
}

changeHeader();
