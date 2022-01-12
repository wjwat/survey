
$(document).ready(function() {
  $("form#basic-details").on('submit', function(e) {
    e.preventDefault();


    let isFriend = true;
		let isNameStupid = true;
		let isColorStupid = true;

    let name = $('#friend-name').val().toUpperCase();
    let dob = $('#born').val();
    let telNum = $('#phone-num').val();
    let favColor = $("#color").val();
		let beverage = $("#beverage").val();

		var checked = []
		$("input:checkbox:checked").each(function ()
		{
				checked.push($(this).val());
		});
		console.log(checked)

		if (name === 'WILLIAM' || name === 'DANIEL') {
			isNameStupid = false;
		}

		if (parseInt(dob.substring(0,4)) >= 1990) {
      isFriend = false;
    }

    if (telNum.substring(0,5) !== "(602)") {
      isFriend = false;
    }

		if (favColor === '#ffffff' || favColor === '#000000') {
			isColorStupid = false;
		}

		if (beverage === "4") {
			console.log('hydro homie')
		} else {
			console.log('enjoy your kidney stones')
		}
  });
});