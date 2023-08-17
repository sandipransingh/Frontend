// let noSel = document.querySelector('#no'); /* left side select option*/ 
// let yesSel = document.querySelector('#yes'); /* right side select option*/ 

// let addBtn = document.querySelector('#add');
// let removeBtn = document.querySelector('#remove');

// // dom target.addEventListner(event,callback)
// addBtn.addEventListener('click',function(e){
//     e.preventDefault();
//     //alert('add btn clicked');
//     let SelOpt = document.querySelectorAll("#no option:checked");
//     console.log('selected options =', SelOpt);

//     let exstOpt = document.querySelectorAll('#yes option');
//     yesSel.replaceChildren(...SelOpt,...exstOpt); /* array -> parameter */ 
// });

// removeBtn.addEventListener('click', function(e){
//     e.preventDefault();
//     //alert('remove btn clicked')
//     let exstOpt = document.querySelectorAll('#no option');
//     noSel.replaceChildren(...exstOpt, ...SelOpt );
// });  

let no=document.querySelector('#no');/* left side*/
let yes=document.querySelector('#yes');

let addBtn=document.querySelector('#add');
let removeBtn=document.querySelector('#remove');

addBtn.addEventListener('click',function(e){
    // alert('hi i am here');
    e.preventDefault();
    let selOpt=document.querySelectorAll('#no option:checked');
    console.log('selected option=',selOpt);

    let exstOpt=document.querySelectorAll('#yes option');
    yes.replaceChildren(...selOpt,...exstOpt);

});
removeBtn.addEventListener('click',function(e){
    // alert(`hi an exiting`);
    e.preventDefault();
    let exstOpt=document.querySelectorAll('#yes option:checked');

    let selOpt=document.querySelectorAll('#no option');
    no.replaceChildren(...exstOpt,...selOpt);
});