final_val = 0;


/* Get the value of the clicked button. */
function getValue_one(){
    var clicked_btn = document.getElementById('one');
    final_val = parseInt(clicked_btn.textContent);
}

function getValue_two(){
    var clicked_btn = document.getElementById('two');
    final_val = parseInt(clicked_btn.textContent);
}

function getValue_three(){
    var clicked_btn = document.getElementById('three');
    final_val = parseInt(clicked_btn.textContent);
}

function getValue_four(){
    var clicked_btn = document.getElementById('four');
    final_val = parseInt(clicked_btn.textContent);
}

function getValue_five(){
    var clicked_btn = document.getElementById('five');
    final_val = parseInt(clicked_btn.textContent);
}

function show(){
    document.getElementById('card-1').style.display = 'none';
    document.getElementById('card-2').style.display = 'block';
    document.getElementById('final-value').innerHTML = final_val;
    
}

