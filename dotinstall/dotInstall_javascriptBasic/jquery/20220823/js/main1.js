// $('#target').text('Hello');
// $('ul.menu').addClass('active');
// $('ul > li').eq(2).remove();

'use strict';

$(() => {
  $('button').click(() => {
    // $('li').eq(2).addClass('red-text');

    $('li:nth-child(odd), li:last-child')
    .addClass('red-text');
  });
});