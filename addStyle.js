function addStyle(r) {
	var h = document.getElementsByTagName('head')[0],
    s = document.createElement('style'),
    r = document.createTextNode(r||'');

	s.type = 'text/css';

	if (s.styleSheet) {
    s.styleSheet.cssText = r.nodeValue;
	} else {
		s.appendChild(r);
	}

	h.appendChild(s);
}
