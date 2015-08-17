$(document).ready(function() {
	var essayDataCheck = false;
	$('textarea').blur(function() {
		if ($(this).val().length>0) {
			$(this).height(400);
		}
		else{
			$(this).height(200);
		};
	}).keyup(function() {
		if ($(this).val().length>0) {
			essayDataCheck=true;
		}
		else{
			essayDataCheck=false;
		};
	});

	function showResults(data){
		$('#view').css('cursor', 'wait');
		if (data==true) {
			$('#view span').text('uploading and cross-refrencing...');
			setTimeout(function(){
				jQuery('#view span').text('processing...');
				setTimeout(function(){
					jQuery('#view span').text('preparing results...');
					setTimeout(function(){
						jQuery('#view span').text('or nah.');
						jQuery('#view').css('cursor', 'auto');
					},2500)
				},5500)
			},1000)
		}
		else{
			$('#view span').text('uploading to servers...');
			setTimeout(function(){
				jQuery('#view span').text('processing...');
				setTimeout(function(){
					jQuery('#view span').text('recieving...');
					setTimeout(function(){
						jQuery('#view span').text('');
						alert('Prepare yourself for the greatest essay of all time, the world\s Magnum Opus')
						jQuery('#view img').slideDown(400);
						jQuery('#view').css('cursor', 'auto');
						setTimeout(function(){
							jQuery('#view span').text('hey baby...');
							setTimeout(function(){
								jQuery('#view span').text('wanna play? ;)')
							},1000)
						},500)
					},2500)
				},7300)
			},1000)
		};
	}

	$('#2').click(function() {
		$('#view img').slideUp(200);
		if (essayDataCheck==true) {
			showResults(true);
		}
		else{
			alert('Hey pal, please put some fucking text in the fucking textbox fucking please pal.')
		};
	});
	$('#1').click(function() {
		$('#view img').slideUp(200);
		if (essayDataCheck==true) {
			showResults(false);
		}
		else{
			alert('Hey pal, please put some fucking text in the fucking textbox fucking please pal.')
		};
	});




});