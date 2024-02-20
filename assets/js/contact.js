// const click = document.getElementById("submit");
// const getreq = document.getElementById("my-form");
// function submit(){
//    my-form.addEventListener('click',function(event){
//     event.preventdefault();
//     const inputno = document.getElementById('message').value
//     document.write("submitted sucessfully");
//    })
   
// }

function message (){
    document.getElementById("message-div").style.display = "block";
    return "Submitted successfully!";
}
const submitButton =document.getElementById("submit");
const myForm =document.getElementById("my-form");
const input = document.getElementById("inputtext")
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.write(message()); // Display a message
});


