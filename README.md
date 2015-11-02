# react-atv-img
A port of [@drewwilson](https://github.com/drewwilson)’s amazing [atvImg](https://github.com/drewwilson/atvImg) (Apple TV 3D parallax effect) library in React.

## Install
`npm install --save react-atv-img`

## API
### Props

``` javascript
static propTypes = {
  layers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isStatic: PropTypes.bool,  
  staticFallback: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
```

#### Data
- `layers`: Required. An array of image URLs. The images will be stacked on top of each other and the _last_ element will be at the top.
- `isStatic`: Optional. A boolean value. It disables the parallax effect when it evaluates to `true`, and shows the flattened image (`staticFallback`) instead.
- `staticFallback`: Optional. A flattened image that contains all the layers.

#### Styling: use the following options to set up the width/height of the entire component
- `className`: Optional.
- `style`: Optional.

### Example

``` javascript
<AtvImg
  layers={[
    'http://kloc.pm/images/back.png',
    'http://kloc.pm/images/front.png',
  ]}
  staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
  isStatic={false}
  className={'thisIsOptional'}
  style={{ width: 320, height: 190 }}
/>
```
