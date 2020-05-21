import React from 'react';

import * as Math from './lib';

import { ghUrl} from './utils';
import Icon from './components/icon';

const compareStr = (a:string, b: string) => {
  if (a > b) {
    return 1
  }

  if (a < b) {
    return -1
  }

  return 0;
}

/**
 * 
 * @param props 
 * - items: list of items
 * - depth: level of nesting
 */
const List = (props:{items:[string, Object][], depth?:number}) => {
  const { items, depth = 1 } = props;

  if (items.length === 0) {
    return null;
  }

  // sort items
  const itemsArraySorted = items.sort((a, b) => compareStr(a[0], b[0]))

  return <ul>
    {itemsArraySorted.map((item) => {
      const [k, v] = item;
      const searchString:string = `https://github.com/Nexysweb/math-ts/search?q=${k}&unscoped_q=${k}`
      const label = <a href={searchString}>{k}</a> 
      // differentiate link based on nesting? depth === 1 ? <a href="{searchString}"/>{k}</a> : k
      const sub = v === null ? null : <List items={Object.entries(v)} depth={depth+1}/>
      return <li key={k}>
        {label}
        {sub}
      </li>
    })}
  </ul>
}

function App() {
  return <div className="container">
    <p>Source can be found in <a href={ghUrl}><Icon name="code"/></a></p>

    <h3>List of Available Modules</h3>

    <List items={Object.entries(Math)}/>
  </div>;
}

export default App;
