var hours = document.getElementById('hours');
		var minutes = document.getElementById('minutes');
		var secondEl = document.getElementById('seconds');

		function initClock() {
			var date = new Date();
			var h = date.getHours() % 12;
			var m = date.getMinutes();
			var s = date.getSeconds();

			var hourDeg = (h * 30) + (0.5 * m);
			var minuteDeg = (m * 6) + (0.1 * s);
			var secondDeg = s * 6;

			hours.style.transform = 'rotate(' + hourDeg + 'deg)';
			minutes.style.transform = 'rotate(' + minuteDeg + 'deg)';
			seconds.style.Transform = 'rotate(' + secondDeg + 'deg)';

			setTimeout(initClock, 1000);
		};

		initClock();
