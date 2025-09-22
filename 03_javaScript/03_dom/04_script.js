// challange 1
document.getElementById('removeButton').addEventListener('click',function(){
    let removingElement =document.getElementById('removingList');    
    removingElement.lastElementChild.remove();
})

// challange 2
document.getElementById('feedback').addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
    let feedback = document.getElementById('FeedbackInput').value;
    console.log(feedback);
    console.log(name);
    
    
    let para =document.getElementById('feedbackDisplay');
    para.textContent =`${name}:- "${feedback}"`
    para.style.backgroundColor = 'yellow'
    




})