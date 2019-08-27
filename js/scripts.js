//business logic
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];

}

function Address(street, city, state){
    this.streetAddress = street;
    this.cityAddress = city;
    this.stateAddress = state;
}

Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}
Address.prototype.fullAddress = function () {
    return this.streetAddress + ", " + this.cityAddress + ", " + this.stateAddress;
}
function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

//user inteface logic

$(document).ready(function () {

    $('#add').on('click', function () {
        $("#new-addresses").append('<div class="new-address">' +
            '<div class="form-group">' +
            '<label for="new-street">Street</label>' +
            '<input type="text" class="form-control new-street">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-city">City</label>' +
            '<input type="text" class="form-control new-city">' +
            '</div>' +
            '<div class="form-group">' +
            '<label for="new-state">State</label>' +
            '<input type="text" class="form-control new-state">' +
            '</div>' +
            '</div>');
    });

    $('form#new-contact').submit(function (event) {
        event.preventDefault();

        let firstNameInput = $('input#new-first-name').val();
        let lastNameInput = $('input#new-last-name').val();
        let newContact = new Contact(firstNameInput, lastNameInput);


        $('.new-address').each(function (){
            let streetInput = $(this).find('input.new-street').val();
            let cityInput = $(this).find('input.new-city').val();
            let stateInput = $(this).find('input.new-state').val();


            let newAddress = new Address(streetInput, cityInput, stateInput);
            newContact.addresses.push(newAddress)
        })
 

     
        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function () {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
            $(".addresses").append("<li>" + address.fullAddress() + "</li>");
        });
        
    });

    resetFields();

});
});
