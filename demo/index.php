<!DOCTYPE html>
<html>
<head>
  <title>Magic Display Demo</title>
  <link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <script type="text/javascript" src="http://code.jquery.com/jquery-3.1.0.min.js"></script>
  <script type="text/javascript" src="../jquery.magic.display.min.js"></script>
</head>
<body>
  <div class="container">
    <h1>Magic Display - Demo</h1>
    <div class="large-container">
      <div class="row">
        <div class="box-B info">
          <h3>Magic Display is a jQuery plugin that makes the content of your website appear on scroll of the page.</h3>
          <h2>Scroll down to see the magic!</h2>
        </div>
      </div>
    </div>
    <div class="large-container">
      <h2 class="magic-display magic-left">Title #1</h2>
      <div class="row">
        <div class="box-A magic-display magic-top"></div>
      </div>
      <div class="row">
        <div class="box-C magic-display magic-bottom"></div>
      </div>
      <div class="row">
        <div class="box-A magic-display magic-top"></div>
      </div>
    </div>
    <div class="large-container">
      <h2 class="magic-display magic-left">Title #2</h2>
      <div class="row">
        <div class="box-A col-md-12 magic-display magic-right"></div>
      </div>
      <div class="row">
        <div class="box-B col-md-7 magic-display magic-left"></div>
        <div class="col-md-1"></div>
        <div class="box-C col-md-4 magic-display magic-right"></div>
      </div>
    </div>
    <div class="large-container">
      <h2 class="magic-display magic-left">Title #3</h2>
      <div class="row">
        <div class="box-B col-md-12 magic-display"></div>
      </div>
      <div class="row">
        <div class="box-C col-md-7 magic-display magic-right"></div>
        <div class="col-md-1"></div>
        <div class="box-C col-md-4 magic-display magic-left"></div>
      </div>
      <div class="row">
        <div class="box-B col-md-12 magic-display"></div>
      </div>
      <div class="row">
        <div class="box-A col-md-5 magic-display magic-left"></div>
        <div class="col-md-2"></div>
        <div class="box-B col-md-5 magic-display magic-right"></div>
      </div>
      <div class="row">
        <div class="box-B col-md-12 magic-bottom"></div>
      </div>
      <div class="row">
        <div id="footer" class="col-md-12">
          <h2 class="magic-display">Magic Display</h2>
        </div>
      </div>
    </div>
  </div>
  <script type="text/javascript">
  $(document).ready(function() {
    $('.magic-display').magicDisplay({
      duration: 1000,
      displayFullVisible: true
    });
  });
  </script>
</body>
</html>
