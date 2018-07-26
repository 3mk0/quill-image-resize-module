Quill.register('modules/imageResize', ImageResize)

var quill = new Quill('#editor', {
	theme: 'snow',
	modules: {
		imageResize: {
            parchment: Quill.import('parchment')
        }
	}
});
