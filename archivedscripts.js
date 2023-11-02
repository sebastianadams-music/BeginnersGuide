async function demoDelayOnly(){
    document.querySelector('a').addEventListener('click', function (event) {
        // Do something before following the link

        setTimeout(() => event.target.textContent = "First", 1000)
        setTimeout(() => event.target.textContent = "Second", 2000)
        setTimeout(() => event.target.textContent = "Third", 3000)
        setTimeout(() => window.open(url, '_self'), 4000)
        
        // setTimeout(() => event.preventDefault(), 1000)


        // Get url from the target element (<a>) href attribute
        var url = event.target.href;
      
        // Open the url in the current window. Set to "_blank" instead of "_self" to open in a new window.
        // window.open(url, '_self');
      
        // Prevent default action (e.g. following the link)
        event.preventDefault();
      });
    
    
    
}