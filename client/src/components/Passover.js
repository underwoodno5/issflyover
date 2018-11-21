import React from 'react';

export default function Passover({ passover: { duration, risetime } }) {
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
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }
  var timeVisible = Math.floor(duration / 60);

  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4 id='risetime'>Date and time: {timeConverter(risetime)}</h4>
          <h4>Visible for {timeVisible} minutes</h4>
        </div>
        <div className='col-md-3' />
      </div>
    </div>
  );
}
