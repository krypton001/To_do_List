var clear = document.querySelector(".clear");


// clear list

clear.addEventListener('click', function() {
    var child = list.lastElementChild;
    while (child) {
        list.removeChild(child);
        child = list.lastElementChild;
    }
})

// list function

document.querySelector('#push').onclick =
function() {
    if (document.querySelector('.add-item input')
    .value.length === 0) {
        alert ("Please enter a list");
    } else {
        document.querySelector('#list').
        innerHTML += `
        <div class="list">
        <span id="listname">
        ${document.querySelector('.add-item input').value}
        </span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
        </div>`;

        var current_list = document.
        querySelectorAll('.delete');
        for (var i = 0; i < current_list.length; i++) {
            current_list[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        var current_list = document.
        querySelectorAll('.list');
        for (var i = 0; i < current_list.length; i++) {
            current_list[i].onclick = function () {
                this.classList.toggle('complete');
            }
        }
        document.querySelector('.add-item input')
        .value = "";
    }
}