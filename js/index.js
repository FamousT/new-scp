const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Full Name: </h1>${name.value}
    <br>
    <h1>Phone: </h1>${phone.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    <h1>Subject: </h1>${subject.value}
    <br>
    <h1>Message: </h1>${message.value}
    <br>
    `;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "scprecords@scp-law.com",
      Password : "6035ECF4D86208E8FE3459D6424BF27BF4E3",
      To : 'scprecords@scp-law.com',
      From : "scprecords@scp-law.com",
      Subject : "A new submission from website",
      Body : "Name: " +  document.getElementById("name").value
      + "<br/><br/>  Phone: " + document.getElementById("phone").value
      + "<br/><br/>  Email: " + document.getElementById("email").value
      + "<br/><br/>  Subject: " + document.getElementById("subject").value
      + "<br/><br/>  Message: " + document.getElementById("message").value

  }).then(
    message => alert("Message sent successfully")
  );

});

