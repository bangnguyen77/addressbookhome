<<<<<<< HEAD
//business logic
=======
// business logic
>>>>>>> ad57aabfe3589fbfb29f662c4965571cc900e8bc
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
<<<<<<< HEAD

=======
>>>>>>> ad57aabfe3589fbfb29f662c4965571cc900e8bc
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

<<<<<<< HEAD
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
=======

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

>>>>>>> ad57aabfe3589fbfb29f662c4965571cc900e8bc
  });
});
