document.addEventListener("DOMContentLoaded", function() {

    var food = $('th');
    var icy = 'Ice Cream Biscut, 7.99';
    var burger = 'Royale with Cheese, 8.99';
    var pizza = 'Arugula Pie, 11.99';
    var bbq = 'Smoked Swine, 14.99';

    $('#icy').on('click', function() {
        console.log('its on!');
        var $ntr = $('<tr>');
        var $tdn = $('<td data-field="name">Ice Cream Biscuit</td>');
        var $tdp = $('<td data-field="price">7.99</td>');
        food.append($tdn, $tdp);
        // food.append($tdp);
        // food.append($tdn);
    })
    $('td').on('click', '.card-action', function(event) {
        var $target = $(event.target);
        $target.remove();
        console.log(`nope', ${$target.text()}!`);
    });

})
