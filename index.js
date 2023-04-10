
const ul =document.getElementById('list');

const amount =document.getElementById('amount');

const description =document.getElementById('description');

const category =document.getElementById('category');

const form =document.getElementById('my-form');

const error =document.getElementById('error');

form.addEventListener('submit',trackerdetails);

function trackerdetails(e){

    if(amount.value==='' || description.value==='' || category.value===''){
        
        e.preventDefault();
        error.classList.add('error');

        error.innerHTML ="Please fill the fields";

        setTimeout(()=>error.remove(),4000);

    }
    else{
    e.preventDefault();
   
    const li =document.createElement('li');
    
    const edit =document.createElement('button');

    const del = document.createElement('button');
//  Edit button
    // edit.classList.add('btn');
    edit.innerHTML='EDIT';
    
    edit.style.margin='0px 6px';
    edit.style.padding='0px 6px';
//  Delete button
    del.innerHTML ='DELETE';
    del.style.margin='0px 6px';
    del.style.padding='0px 6px';

    

    li.appendChild(document.createTextNode(`${amount.value} : ${description.value} ,
     ${category.options[category.selectedIndex].value}`));

    li.appendChild(edit);

    li.appendChild(del);

    ul.style.listStyle='none';
    ul.appendChild(li);
    

    //Object creation and add to local storage
    const myobj ={
        Expense:amount.value,
        description:description.value,
        category:category.options[category.selectedIndex].value,
    }

    //delete functionality

    del.onclick=()=>{
        localStorage.removeItem(myobj.description);
        ul.removeChild(li);
    }

    //Edit functionality
    edit.onclick=()=>{

        localStorage.removeItem(myobj.description);
        ul.removeChild(li);

        amount.value=myobj.Expense;
        description.value=myobj.description;
        category.options[category.selectedIndex].value=myobj.category;
    }



    localStorage.setItem(description.value,JSON.stringify(myobj));

    amount.value='';
    description.value='';
    category.options='';

}

}


