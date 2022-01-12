
$(document).ready(function() {
  $("form#basic-details").on('submit', function(e) {
    event.preventDefault();


    let isFriend = true;
		let isColorStupid = true;
    let name = $('#friend-name').val();
    let dob = $('#born').val();
    let telNum = $('#phone-num').val();
    let favColor = $("#color").val();
		const beverage = $("#beverage").val();

    if (telNum.substring(0,5) !== "(602)") {
      isFriend = false;
    }

		if (parseInt(dob.substring(0,4)) >= 1990) {
      isFriend = false;
    }

		if (favColor === '#ffffff' || favColor === '#000000') {
			isColorStupid = false;
		}
  });
});