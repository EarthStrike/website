function initFAQ() {
	document.querySelectorAll('.faq__question').forEach(function(question) {
		question.onclick = function() {
			event.preventDefault();

			Array.from(question.closest('.faq').children).forEach(function(li) {
				if (li.querySelector('.faq__question') == question) {
					li.classList.add('expanded');
					li.querySelector('.faq__answer').style.maxHeight = li.querySelector('.faq__answer').expandedHeight;
				} else {
					li.classList.remove('expanded');
					li.querySelector('.faq__answer').style.maxHeight = '0px';
				}
			});
		}
	});

	document.querySelectorAll('.faq__answer').forEach(function(answer) {
		var contentHeight = 0;
		Array.from(answer.children).forEach(function(child) {
			contentHeight += child.offsetHeight + 12;
		})

		answer.expandedHeight = contentHeight + 'px';
	});
}
