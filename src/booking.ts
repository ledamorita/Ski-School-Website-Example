declare module 'jquery-datepicker' {
  export = $;
}

$(function () {
  $('#date').datepicker();
  $('#time').timepicker();
});

function appointment(event: Event) {
  event.preventDefault();

  const date: string | number | string[] = $('#date').val()!;
  const time: string | number | string[] = $('#time').val()!;

  if (date !== '' && time !== '') {
    alert(`You have successfully booked a lesson for ${date} ${time}.`);
  } else {
    alert('Please selcet your time slot!');
  }
}
