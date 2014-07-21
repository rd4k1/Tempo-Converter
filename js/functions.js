$(document).ready(function(){
	var bpm = $('#bpm').val(),
		upper = $('#upper').val(),
		lower = $('#lower').val(),
		size,
		ms,
		hz;
	$('input').on('change', function(){
		bpm = $('#bpm').val();
		upper = $('#upper').val();
		lower = $('#lower').val();
		if(bpm < 20){
			$('#bpm').val(20);
			bpm = $('#bpm').val();
		}
		if(upper < 1){
			$('#upper').val(1);
			upper = $('#upper').val();
		}
		if(lower < 1){
			$('#lower').val(1);
			upper = $('#lower').val();
		}
		calc();
	});
	function calc(){
		$('.grid #head').empty();
		for(var i=0; i<upper; i++){
			$('.grid #head').append('<th>'+(i+1)+'</th>');
		}
		$('.grid tr').each(function(){
			var i = 0;
			size = $(this).find('td').length;
			$(this).find('td').each(function(){
				i++;
				ms = (((upper/lower*240)/size)/bpm * i) < 1
					? ((((upper/lower*240)/size)/bpm * i)*1000).toFixed(0)
					: (((upper/lower*240)/size)/bpm * i).toFixed(3).replace(/\./, ',');
				hz = (bpm/((upper/lower*240)/size) / i).toFixed(2);
				if(size == 1){
					$(this).html('<b class="ms">'+ms+' ms</b><br/><i class="hz">'+hz+' hz</i>');
				}
				else{
					$(this).html('<b class="ms">'+ms+'</b><br/><i class="hz">'+hz+'</i>');
				}
			});
		});
	};
	calc();
});