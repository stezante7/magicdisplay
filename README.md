# jQuery Magic Display
Magic Display is a jQuery plugin that makes the content of your website appear on scroll of the page. See a  [demo here](http://www.stefanozante.com/magicdisplay/demo).

## Installation
Include the jQuery library to your HTML and you are ready to go:
```HTML
<script type="text/javascript" src="jquery.magic.display.js"></script>
```

## How to use it?
Using Magic display is very simple, you only need to initialise the plugin and then add class `.magic-display` to each element you want to animate.

Here an example:

**JavaScript**
```JavaScript
$(document).ready(function() {
  $('.magic-display').magicDisplay();
});
```

**HTML**

Fade in
```HTML
<div class="magic-display">Fade in</div>
```

Appear from top/right/bottom/left
```HTML
<div class="magic-display magic-top">Appear from top</div>
<div class="magic-display magic-right">Appear from right</div>
<div class="magic-display magic-bottom">Appear from bottom</div>
<div class="magic-display magic-left">Appear from left</div>
```

### Additional Options

You can also use additional options to customise your Magic Display.

| Option             | Description                     | Default  |
| ------------------ | ------------------------------- | -----:|
| duration           | Animation duration (in milli secs) | 1000 (1 sec) |
| minWidth           | Plugin is enabled only if the screen width is grater or equals than minWidth. This option allows you to disable the plugin on mobile devices. eg. `minWidth: 1024`      |   null (always on) |
| displayFullVisible | Animation starts only when the whole element can be visible.    |    false (Animation starts as soon as *part* of the element can be visible) |

You can then use these options as shown in the example:

```JavaScript
$(document).ready(function() {
  $('.magic-display').magicDisplay({
    duration: 500,
    minWidth: 1024,
    displayFullVisible: true
  });
});
```

## Notes
- This plugin is compatible with latest versions of all most common browsers. And it also compatible with IE10 or grater.

## License
This plugin is available under the MIT license.
