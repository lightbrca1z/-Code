// $('#target').text('Hello');
// $('ul.menu').addClass('active');
// $('ul > li').eq(2).remove();

'use strict';

$(() => {
  const $input = $('input');
  $input.focus();

  $('button').click(() => {
    // $('li').eq(2).addClass('red-text');

    $('<li>')
     .text($input.val())
     .appendTo($('ul'));

    
     $input.val('')
      .focus();
  });
});