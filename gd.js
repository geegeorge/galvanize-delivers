document.addEventListener("DOMContentLoaded", function() {
    var food = $('tfoot').children();
    var tbody = $('tbody');
    var tamt = 0;
    var xnum = $('tfoot td:contains(tamt)');


    $('#bbq').on('click', function() {
        var $tr = $('<tr class="item">');
      tbody.append($tr);

      var $tdn = $('<td data-field="name">Smoked Swine</td>');
      var $tdp = $('<td data-field="price">14.99</td><br>');
      var amt = 15.74;

      $tr.append($tdn);
      $tr.append($tdp);
      tamt += amt;
      $('#bus').html(tamt);
    })
  $('#pizza').on('click', function() {
        var $tr = $('<tr class="item">');
    tbody.append($tr);
        var amt = 12.59;

        var $tdn = $('<td data-field="name">Arugula Pie</td><br>');
        var $tdp = $('<td data-field="price">11.99</td><br>');

    $tr.append($tdn);
    $tr.append($tdp);
    tamt += amt;
    $('#bus').html(tamt);
  })
  $('#burger').on('click', function() {

        var $tr = $('<tr class="item">');

    tbody.append($tr);
        var amt = 9.44;
        var $tdn = $('<td data-field="name">Royale Burger</td><br>');
        var $tdp = $('<td data-field="price">8.99</td><brs>');
    $tr.append($tdn);
    $tr.append($tdp);
    tamt += amt;
    $('#bus').html(tamt);
  });
  $('#icy').on('click', function() {

      var $tr = $('<tr class="item">');
      var amt = 8.39;
    tbody.append($tr);

        var $tdn = $('<td data-field="name">Ice Cream Biscuit</td><br>');
        var $tdp = $('<td data-field="price">7.99</td><br>');
    $tr.append($tdn);
    $tr.append($tdp);
    tamt += amt;
    $('#bus').html(tamt);
  });

  $('tbody').on('click', '.item', function(event) {
        var $target = $(event.target);
    if ($target.parent().hasClass('item')) {

      let amt = $(event.target).parent('td:last-child').context.innerText;

      amt = Number(amt * 1.05);
      tamt -= amt;

      $target.parent().remove();
    }
  });
});
