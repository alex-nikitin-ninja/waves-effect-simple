# waves-effect-simple

This is simple and easy to use VanillaJS framework which adds waves effect to any block element on
the page.

## Usage
### Connect CSS and JS files
```
<link href="/vendor/waves-effect-simple/src/waves-effect-simple.css" rel="stylesheet">
<script src="/vendor/waves-effect-simple/src/waves-effect-simple.js"></script>
```
### Append necessary class 
just append `.waves-effect-simple` class to the necessary element
```
<p class="waves-effect-simple">Lorem ipsum dolor.</p>
```

### Dark waves 
If you wish to use dark colors instead of white, you can add class `.waves-effect-simple-dark` to
already existing `.waves-effect-simple`
```
<p class="waves-effect-simple waves-effect-simple-dark">Lorem ipsum dolor.</p>
```

## Customization
For example you want to make blue color waves instead of default white or dark.

In that case just create an entry
`.waves-effect-simple.waves-effect-simple-blue .waves-ripple`
in your site styles css file and change the background of the element to blue color:
```
.waves-effect-simple.waves-effect-simple-dark .waves-ripple {
    background: -moz-radial-gradient(center, ellipse cover, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 255, 0.8) 100%);
    background: -webkit-radial-gradient(center, ellipse cover, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 255, 0.8) 100%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 255, 0) 0%, rgba(0, 0, 255, 0.8) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a80000FF', GradientType=1);
}
```
After that you can use it by adding this class to existing `.waves-effect-simple`
```
<p class="waves-effect-simple waves-effect-simple-blue">Lorem ipsum dolor.</p>
```

## Demo
It's applied in the top menu on my webste https://alex.nikitin.ninja/

More samples are coming soon.