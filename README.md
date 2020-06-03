# combineclassnames

JS Utility for cleaner className template literals in React

## Usage

```sh
npm i combineclassnames
```

```jsx
import combineClassNames from 'combineclassnames';

const MyComponent = ({
  isCool,
  enabled = true,
  active = false,
  className
}) => (
  <div className={combineClassNames`
    my-component
    ${isCool ? 'cool' : 'not-cool'}
    ${enabled ? 'enabled' : '' }
    ${active ? 'active' : ''}
    ${className}
    `}
  />
);

ReactDOM.render(
  <MyComponent isCool enabled className='combined' />,
  document.getElementById('root')
);

// Result: <div class="my-component cool enabled combined"/>
```
