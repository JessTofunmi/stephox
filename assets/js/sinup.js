var btn9 = document.getElementById("sinupbtn")
sinupbtn.onclick = function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "tofunmishosanya@gmail.com",
      Password: "85B70942A1BF28957754CDB4602E6AAA1C62",
      To: 'tofunmishosanya@gmail.com',
      From: "shosanyatofunmi@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
 }

// function sendEmail() {
//     Email.send({
//         Host : "smtp.mailtrap.io",
//         Username : "<Mailtrap username>",
//         Password : "<Mailtrap password>",
//         To : 'recipient@example.com',
//         From : "sender@example.com",
//         Subject : "Test email",
//         Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
//     }).then(
//       message => alert(message)
//     );
//     }


// function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "sender@email_address.com",
//       Password: "Enter your password",
//       To: 'tofunmishosanya@gmail.com',
//       From: "shosanyatofunmi@email_address.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//     })
//       .then(function (message) {
//         alert("mail sent successfully")
//       });
//   }

// sinupbtn.addEventListener("click", function(){ 
// 	var xhr = new XMLHttpRequest(); 
// 	xhr.open("GET", "mail.php"); 
// 	xhr.send("subject: Example body: Foo Bar Test"); 
// }); 




//update this with your js_form selector
var form_id_js = "input-box";

var data_js = {
    "access_token": "{your access token}" // sent after you sign up
};

function js_onSuccess() {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
}

function js_onError(error) {
    // remove this to avoid redirect
    window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
}

var sendButton = document.getElementById("sinupbtn");

function sinupbtn() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    var subject = document.querySelector("tofunmishosanya@gmail.com" + form_id_js + " [name='subject']").value;
    var message = document.querySelector("tofunmishosanya@gmail.com" + form_id_js + " [name='text']").value;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

sendButton.onclick = sinupbtn;

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});

