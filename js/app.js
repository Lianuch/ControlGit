let toggleTheme = document.getElementById('toggleTheme')

toggleTheme.onclick= () =>{
    if(document.documentElement.hasAttribute('theme')){
        document.documentElement.removeAttribute('theme');
        toggleTheme.value = "Dark"
    }
    else{
        document.documentElement.setAttribute('theme','dark');
        toggleTheme.value = "Bright"
    }
}