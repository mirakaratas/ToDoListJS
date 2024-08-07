
   

document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');


    itemList.addEventListener('click', (event) => {
        const listItem = event.target;

  
        if (listItem.tagName === 'LI') {
            listItem.classList.toggle('checked');
        }
    });


    itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const listItem = event.target.parentElement;
            listItem.remove();
        }
    });

   
    window.newElement = function() {
        const taskInput = document.getElementById('task');
        const taskValue = taskInput.value.trim();

        if (taskValue === '') {
            showToast();
            return;
        }

        const newItem = document.createElement('li');
        newItem.innerHTML = `${taskValue} <span class="remove-btn">X</span>`;

     
        itemList.appendChild(newItem);

    
        taskInput.value = '';
    };

   
    function showToast() {
        const errorToast = document.getElementById('errorToast');
        if (errorToast) {
            errorToast.classList.remove('hide');
            setTimeout(() => {
                errorToast.classList.add('hide');
            }, 4000); 
            $(document).ready(function() {
                $('#errorToast').toast('show');
              });
              
        }
    }
});

