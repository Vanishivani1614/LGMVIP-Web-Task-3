let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    
    //console.log(generatedurl);
   


   //storing the data in objects getting from form
    const data={
        studentname: document.getElementById("studentname").value,
        collegename: document.getElementById("collegename").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        websitelink: document.getElementById("websitelink").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);

    //Card Template
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
     
      <div class="StudentNameContainer">${data.studentname}</div>
      <div class="CollegeNameContainer">${data.collegename}</div>
      <a href="mailto:shivanisingh10012@ieee.org">${data.email}</a><br>
      <div class="genderContainer">${data.gender}</div>
      <a href="www.shivanisingh.com">${data.websitelink}</a>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    //adding the card one after the other
    output.appendChild(newlist);
   
    //clearing the input fields after submission
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})

