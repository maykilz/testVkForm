let formsubmit = document.querySelector('.formsubmit');

formsubmit.onsubmit = (evt)=> {
    evt.preventDefault();  
    let formData = new FormData(formsubmit); 
    let JsonForm = {};
    formData.forEach((element, key) => {
        JsonForm[key]  = element;
    });
    console.log(JsonForm);
}