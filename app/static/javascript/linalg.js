jQuery(document).ready(function() {
	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('paste', function (evt) {
    const clipboardItems = evt.clipboardData.items;
    const items = [].slice.call(clipboardItems).filter(function (item) {
    // Filter the image items only
    return item.type.indexOf('image') !== -1;
    });
    if (items.length === 0) {
      return;
    }

    const item = items[0];
    const blob = item.getAsFile();

    const imageEle = document.getElementById('preview');
      imageEle.src = URL.createObjectURL(blob);
    });
});

var AppVariables = {};

function loadFile(event) {
	var img_src = URL.createObjectURL(event.target.files[0]);
  AppVariables.img_src = img_src
};

function submitImage() {
  const image_input_paste = document.querySelector("#preview");
  const image_input_upload = AppVariables.img_src;
  console.log(image_input_upload);

  let image_input = '';

  if (image_input_paste.src != '') {
    image_input = image_input_paste.src;
  } else if (image_input_upload != undefined) {
    image_input = image_input_upload;
  } else {
    alert('Please input an image before submitting');
  }

  if (image_input) {
    document.getElementById('step2').style.display = "block";
  }
  let cropped_image = document.getElementById("cropped");
  cropped_image.src = image_input;
}
