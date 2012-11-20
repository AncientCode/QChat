$.fn.selectRange = function(start, end) {
	return this.each(function() {
		if (this.setSelectionRange) {
			this.focus();
			this.setSelectionRange(start, end);
		} else if (this.createTextRange) {
			var range = this.createTextRange();
			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	});
};

$.fn.setCaretToPos = function(pos) {
	this.selectRange(pos, pos);
};

$.fn.getCaret = function() {
	return this[0].selectionStart;
};

function say(user, message) {
	var content = '<div class="message"><span class="username">' + user + ': </span><span class="msgcontent">' + message + '</span></div>';
	$(".content").append(content);
	$(".content").scrollTop($(".content")[0].scrollHeight);
}

function sayInput() {
	say('test', $('.jqte_Content').html());
	$('.jqte_Content').html('');
}

$(function() {
	$(".content").scrollTop($(".content")[0].scrollHeight);
	$('textarea').jqte();
	
	$('.jqte_Content').keydown(function (e) {
		if (e.keyCode == 10 || e.keyCode == 13) {
			sayInput();
		}
	});
	
	$('button').button().click(sayInput);
});