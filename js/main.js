(() => {
    const   favButtons = document.querySelectorAll('.fav-buttons'),
            hereBtn = document.querySelector('here-button',),
            thingsDiv = document.querySelector('.things',),
            welcomePage = document.querySelector('.welcome-page');
    let things = {};

// Fetch data
    function getData() {
        // retrieve our data object
        fetch("./data.json") // gets the data
            .then(res => res.json()) // convert the data to a plain object
            .then(data => {
                console.log(data);
                things = data;
                
            })
            .catch(error => console.error(error));
    };

    function showData(event)    {

        console.log('clicked');
        let currentPanel = document.querySelector('.thing')
        // remove hidden class
        if (currentPanel)   {
            currentPanel.classList.remove('hidden');

            let containers = current.Panel.children;

            // add image
            containers[0].querySelector("img").src = `images/${things[this.dataset.key].image}`;

            // text
            containers[1].textContent = things[this.dataset.key].theThing;
            containers[2].textContent = things[this.dataset.key].description;
            containers[3].textContent = things[this.dataset.key].whatFav;
            containers[4].textContent = things[this.dataset.key].fav;
            
        }
        else {
            current.Panel.classList.add('hidden');
        };
    };

}
)