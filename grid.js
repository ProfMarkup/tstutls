function grid(a){
	var a = a||[2, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 98],
			i = 0,
			l = a.length,
			f = document.createDocumentFragment(),
			e = document.createElement('span');

	e.className = '_grid_column';
	
	for (; i < l; i++){
		c = e.cloneNode();
		c.style.left = a[i] + '%';
		f.appendChild(c);
	}

	document.body.appendChild(f);

	return true;
}

//	 var styles = document.createTextNode('.column_ {position: fixed;z-index: 999;top: 0;display: block;height: 100%;border-right: 1px dashed #4affff;} * html .column_ {position: absolute; }'),
//			 styleNode = document.createElement('style');
//
//
//	styleNode.appendChild(styles);
//alert('lala');
//	return false;
//	styleNode.setAttribute('type', 'text/css');
//	document.body.appendChild(styleNode);
