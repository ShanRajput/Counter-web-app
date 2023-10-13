let title = document.getElementById('title');
let val = 0;
 // variable 0 equal 
let decrement = document.getElementById('decrement');
let reset = document.getElementById('reset');
let increment = document.getElementById('increment');


increment.addEventListener('click', () => { // increment button click.
  title.textContent = val; // val equal 0 ky. then val++ increment hu. 
  val++; // increment 
})

reset.addEventListener('click', () => {
    if (val == "") {         // agr value paly hi zero h to alert show hu jy.
        alert("already Zero")
    } else {
        val = 0;            // val equal ha 0 ky . value set karo 0.
        title.textContent = val; 
    }
})

decrement.addEventListener('click', () => {
  title.textContent = val;  // val equal 0 ky. then val++ increment hu. 
  val--;    // decrement    
})
