document.addEventListener('DOMContentLoaded', function (event) {
    const draggables = document.querySelectorAll('.tasks');
    const columns = document.querySelectorAll('.kanban__column')

    draggables.forEach(function (draggable) {
        draggable.addEventListener('dragstart', function () {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', function () {
            draggable.classList.remote('dragging');
        })

    })
    columns.forEach(function (column) {
        column.addEventListener('dragover', function (e) {
            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            column.querySelector('.tasks_list').appendChild(draggable);
        })
    
    })
    
})




