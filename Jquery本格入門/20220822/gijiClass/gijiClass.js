$(() => {
    $('button').click(() => {
      // $('p').text('おはよう！');
      // $('p').addClass('red-text');
  
      $('p:nth-last-child(2)').addClass('addColor');
    });
  });