import React from 'react';

export default function Passover({ passover: { duration, risetime } }) {
  function addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = addZero(a.getHours());
    var min = addZero(a.getMinutes());
    var time = date + ' ' + month + ' ' + year + ' at ' + hour + ':' + min;
    return time;
  }
  var timeVisible = Math.floor(duration / 60);

  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-'>
          <h4 id='risetime'>Date and time: {timeConverter(risetime)}</h4>
          <h4>Visible for {timeVisible} minutes</h4>
        </div>
        <div className='col-md-3' />
      </div>
    </div>
  );
}
