document.addEventListener('DOMContentLoaded', function() {

    let clickButton = document.querySelector('#clickbutton');
    let instrnText = document.querySelector('#instrntext');
    let progressBar = document.querySelector('#progressbar');

    function simulateNetworkRequest(event) {

        clickButton.style.backgroundColor='grey';

        //Template Async/Await -  
        // step A   - declare an async function
        async function fetchData(url) {
            // step A.1.1 - use await to wait for the fetch promise to resolve
            let response = await new Promise((resolve, reject) => {
                /*
                setTimeout(() => {
                    resolve("Data received successfully")
                    instrnText.textContent = `Data received successfully`;
                }, 4000);
                */
                let i = 0;
                let intervalId = setInterval(() => {
                    if (i >= 200) { // 4000 ms/ 40 = 100
                        clearInterval(intervalId);
                        resolve("Data received successfully");
                        instrnText.textContent = `Data received successfully`;
                    } else {
                        i++;
                        progressBar.value = i; // Update the progress bar
                    }
                }, 20); // Adjust as needed
            });

            // step A.2 - return the data
            return response;
        }
        // step B   - call the async function and handle the result
        fetchData('1') 
            // step B.1 - log the data
            .then( data => console.log(data) )
            // step B.2 - log any error
            .catch( error => console.log(error) );

    }

    clickButton.addEventListener('click', simulateNetworkRequest);

 

});