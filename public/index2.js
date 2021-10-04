let list = document.getElementById('list');
let url = 'http://localhost:3000/tasks';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const message = data.map(task => task.message);
        const status = data.map(task => task.status);

        data.forEach(element => {

            let div = document.createElement('div');
            div.classList.add('rows');

            let taskMessage = document.createElement('div');
            let messageData = document.createElement('p');
            messageData.innerHTML = element.message;
            taskMessage.append(messageData);
            

            let taskStatus = document.createElement('div');
            let statusData = document.createElement('span');
            statusData.innerHTML = element.status;
            taskStatus.append(statusData);


            let hr = document.createElement('hr');

            div.append(taskMessage, taskStatus);

            list.append(div, hr);
        });  
    });