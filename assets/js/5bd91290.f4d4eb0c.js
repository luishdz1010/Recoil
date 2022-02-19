"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3182],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3034:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={title:"selector(options)",sidebar_label:"selector()"},s=void 0,c={unversionedId:"api-reference/core/selector",id:"api-reference/core/selector",title:"selector(options)",description:'Selectors represent a function, or derived state in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a get function is provided, the selector is read-only and returns a RecoilValueReadOnly object.  If a set is also provided, it returns a writeable RecoilState object.',source:"@site/docs/api-reference/core/selector.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/selector",permalink:"/docs/api-reference/core/selector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/selector.md",tags:[],version:"current",frontMatter:{title:"selector(options)",sidebar_label:"selector()"},sidebar:"docs",previous:{title:"atom()",permalink:"/docs/api-reference/core/atom"},next:{title:"Loadable",permalink:"/docs/api-reference/core/Loadable"}},u=[{value:"Dynamic Dependencies",id:"dynamic-dependencies",children:[],level:3},{value:"Writeable Selectors",id:"writeable-selectors",children:[],level:3},{value:"Asynchronous Selectors",id:"asynchronous-selectors",children:[],level:3},{value:"Example (Synchronous)",id:"example-synchronous",children:[],level:3},{value:"Example (Asynchronous)",id:"example-asynchronous",children:[],level:3},{value:"Returning objects with callbacks",id:"returning-objects-with-callbacks",children:[],level:3},{value:"Cache policy configuration",id:"cache-policy-configuration",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Selectors")," represent a function, or ",(0,o.kt)("strong",{parentName:"p"},"derived state"),' in Recoil.  You can think of them as similar to an "idempotent" or "pure function" without side-effects that always returns the same value for a given set of dependency values.  If only a ',(0,o.kt)("inlineCode",{parentName:"p"},"get")," function is provided, the selector is read-only and returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"RecoilValueReadOnly")," object.  If a ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," is also provided, it returns a writeable ",(0,o.kt)("inlineCode",{parentName:"p"},"RecoilState")," object."),(0,o.kt)("p",null,"Recoil manages atom and selector state changes to know when to notify components subscribing to that selector to re-render.  If an object value of a selector is mutated directly it may bypass this and avoid properly notifying subscribing components.  To help detect bugs, Recoil will freeze selector value objects in development mode."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function selector<T>({\n  key: string,\n\n  get: ({\n    get: GetRecoilValue,\n    getCallback: GetCallback,\n  }) => T | Promise<T> | RecoilValue<T>,\n\n  set?: (\n    {\n      get: GetRecoilValue,\n      set: SetRecoilState,\n      reset: ResetRecoilState,\n    },\n    newValue: T | DefaultValue,\n  ) => void,\n\n  dangerouslyAllowMutability?: boolean,\n  cachePolicy_UNSTABLE?: CachePolicy,\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"type ValueOrUpdater<T> = T | DefaultValue | ((prevValue: T) => T | DefaultValue);\ntype GetCallback =\n  <Args, Return>(\n    callback: CallbackInterface => (...Args) => Return,\n  ) => (...Args) => Return;\n\ntype GetRecoilValue = <T>(RecoilValue<T>) => T;\ntype SetRecoilState = <T>(RecoilState<T>, ValueOrUpdater<T>) => void;\ntype ResetRecoilState = <T>(RecoilState<T>) => void;\n\ntype CachePolicy =\n  | {eviction: 'lru', maxSize: number}\n  | {eviction: 'keep-all'}\n  | {eviction: 'most-recent'};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key")," - A unique string used to identify the selector internally. This string should be unique with respect to other atoms and selectors in the entire application.  It needs to be stable across executions if used for persistence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get")," - A function that evaluates the value for the derived state.  It may return either a value directly or an asynchronous ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," or another atom or selector representing the same type.  It is passed an object as the first parameter containing the following properties:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get()")," - a function used to retrieve values from other atoms/selectors. All atoms/selectors passed to this function will be implicitly added to a list of ",(0,o.kt)("strong",{parentName:"li"},"dependencies")," for the selector. If any of the selector's dependencies change, the selector will re-evaluate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getCallback()")," - a function for creating Recoil-aware callbacks with a ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback#callback-interface"},"callback interface"),".  See ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector#returning-objects-with-callbacks"},"example")," below."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set?")," - If this property is set, the selector will return ",(0,o.kt)("strong",{parentName:"li"},"writeable")," state. A function that is passed an object of callbacks as the first parameter and the new incoming value.  The incoming value may be a value of type ",(0,o.kt)("inlineCode",{parentName:"li"},"T")," or maybe an object of type ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultValue")," if the user reset the selector.  The callbacks include:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get()")," - a function used to retrieve values from other atoms/selectors. This function will not subscribe the selector to the given atoms/selectors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set()")," - a function used to set the values of upstream Recoil state. The first parameter is the Recoil state and the second parameter is the new value.  The new value may be an updater function or a ",(0,o.kt)("inlineCode",{parentName:"li"},"DefaultValue")," object to propagate reset actions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reset()")," - a function used to reset to the default values of upstream Recoil state. The only parameter is the Recoil state."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - In some cases it may be desirable allow mutating of objects stored in selectors that don't represent state changes.  Use this option to override freezing objects in development mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cachePolicy_UNSTABLE")," - Defines the behavior of the internal selector cache. Can be useful to control the memory footprint in apps that have selectors with many changing dependencies.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"eviction")," - can be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"lru")," (which requires that a ",(0,o.kt)("inlineCode",{parentName:"li"},"maxSize")," is set), ",(0,o.kt)("inlineCode",{parentName:"li"},"keep-all")," (default), or ",(0,o.kt)("inlineCode",{parentName:"li"},"most-recent"),". An ",(0,o.kt)("inlineCode",{parentName:"li"},"lru")," cache will evict the least-recently-used value from the selector cache when the size of the cache exceeds ",(0,o.kt)("inlineCode",{parentName:"li"},"maxSize"),". A ",(0,o.kt)("inlineCode",{parentName:"li"},"keep-all")," policy will mean all selector dependencies and their values will be indefinitely stored in the selector cache. A ",(0,o.kt)("inlineCode",{parentName:"li"},"most-recent")," policy will use a cache of size 1 and will retain only the most recently saved set of dependencies and their values."),(0,o.kt)("li",{parentName:"ul"},"Note the cache stores the values of the selector based on a key containing all dependencies and their values. This means the size of the internal selector cache depends on both the size of the selector values as well as the number of unique values of all dependencies."),(0,o.kt)("li",{parentName:"ul"},"Note the default eviction policy (currently ",(0,o.kt)("inlineCode",{parentName:"li"},"keep-all"),") may change in the future.")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A selector with a simple static dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => get(myAtom) * 100,\n});\n")),(0,o.kt)("h3",{id:"dynamic-dependencies"},"Dynamic Dependencies"),(0,o.kt)("p",null,"A read-only selector has a ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," method which evaluates the value of the selector based on dependencies.  If any of those dependencies are updated, then the selector will re-evaluate.  The dependencies are dynamically determined based on the atoms or selectors you actually use when evaluating the selector.  Depending on the values of the previous dependencies, you may dynamically use different additional dependencies.  Recoil will automatically update the current data-flow graph so that the selector is only subscribed to updates from the current set of dependencies"),(0,o.kt)("p",null,"In this example ",(0,o.kt)("inlineCode",{parentName:"p"},"mySelector")," will depend on the ",(0,o.kt)("inlineCode",{parentName:"p"},"toggleState")," atom as well as either ",(0,o.kt)("inlineCode",{parentName:"p"},"selectorA")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"selectorB")," depending on the state of ",(0,o.kt)("inlineCode",{parentName:"p"},"toggleState"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const toggleState = atom({key: 'Toggle', default: false});\n\nconst mySelector = selector({\n  key: 'MySelector',\n  get: ({get}) => {\n    const toggle = get(toggleState);\n    if (toggle) {\n      return get(selectorA);\n    } else {\n      return get(selectorB);\n    }\n  },\n});\n")),(0,o.kt)("h3",{id:"writeable-selectors"},"Writeable Selectors"),(0,o.kt)("p",null,"A bi-directional selector receives the incoming value as a parameter and can use that to propagate the changes back upstream along the data-flow graph.  Because the user may either set the selector with a new value or reset the selector, the incoming value is either of the same type that the selector represents or a ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultValue")," object which represents a reset action."),(0,o.kt)("p",null,"This simple selector essentially wraps an atom to add an additional field.  It just passes through set and reset operations to the upstream atom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const proxySelector = selector({\n  key: 'ProxySelector',\n  get: ({get}) => ({...get(myAtom), extraField: 'hi'}),\n  set: ({set}, newValue) => set(myAtom, newValue),\n});\n")),(0,o.kt)("p",null,"This selector transforms the data, so it needs to check if the incoming value is a ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultValue"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const transformSelector = selector({\n  key: 'TransformSelector',\n  get: ({get}) => get(myAtom) * 100,\n  set: ({set}, newValue) =>\n    set(myAtom, newValue instanceof DefaultValue ? newValue : newValue / 100),\n});\n")),(0,o.kt)("h3",{id:"asynchronous-selectors"},"Asynchronous Selectors"),(0,o.kt)("p",null,"Selectors may also have asynchronous evaluation functions and return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," to the output value.  Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const myQuery = selector({\n  key: 'MyQuery',\n  get: async ({get}) => {\n    return await myAsyncQuery(get(queryParamState));\n  }\n});\n")),(0,o.kt)("h3",{id:"example-synchronous"},"Example (Synchronous)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState, DefaultValue, useResetRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) =>\n    set(\n      tempFahrenheit,\n      newValue instanceof DefaultValue ? newValue : (newValue * 9) / 5 + 32\n    ),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n  const resetTemp = useResetRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n  const reset = () => resetTemp();\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n      <br />\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"example-asynchronous"},"Example (Asynchronous)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {selector, useRecoilValue} from 'recoil';\n\nconst myQuery = selector({\n  key: 'MyDBQuery',\n  get: async () => {\n    const response = await fetch(getMyRequestUrl());\n    return response.json();\n  },\n});\n\nfunction QueryResults() {\n  const queryResults = useRecoilValue(myQuery);\n\n  return (\n    <div>\n      {queryResults.foo}\n    </div>\n  );\n}\n\nfunction ResultsSection() {\n  return (\n    <React.Suspense fallback={<div>Loading...</div>}>\n      <QueryResults />\n    </React.Suspense>\n  );\n}\n")),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide")," for more complex examples."),(0,o.kt)("h3",{id:"returning-objects-with-callbacks"},"Returning objects with callbacks"),(0,o.kt)("p",null,"Sometimes selectors can be used to return objects that contain callbacks.  It may be helpful for these callbacks to access Recoil state, such as for querying typeahead values or click handlers.  The following example uses a selector to generate menu items with a click handler that accesses Recoil state.  This can be useful when passing these objects to frameworks or logic outside the context of a React component."),(0,o.kt)("p",null,"There is symmetry between this callback and using ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),".  Note that the callback returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"getCallback()")," can be used as an async callback to access Recoil state later, it should not be called during the evaluation of the selector value itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const menuItemState = selectorFamily({\n  key: 'MenuItem',\n  get: itemID => ({get, getCallback}) => {\n    const name = get(itemNameQuery(itemID));\n    const onClick = getCallback(({snapshot}) => async () => {\n      const info = await snapshot.getPromise(itemInfoQuery(itemID));\n      displayInfoModal(info);\n    });\n    return {\n      title: `Show info for ${name}`,\n      onClick,\n    };\n  },\n});\n")),(0,o.kt)("p",null,"Example that can mutate state:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const menuItemState = selectorFamily({\n  key: 'MenuItem',\n  get: itemID => ({get, getCallback}) => {\n    const name = get(itemNameQuery(itemID));\n    const onClick = getCallback(({refresh}) => () => {\n      refresh(itemInfoQuery(itemID));\n    });\n    return {\n      title: `Refresh data for ${name}`,\n      onClick,\n    };\n  },\n});\n")),(0,o.kt)("h2",{id:"cache-policy-configuration"},"Cache policy configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cachePolicy_UNSTABLE")," property allows you to configure the caching behavior of a selector's internal cache. This property can be useful for reducing memory in applications that have a large number of selectors that have a large number of changing dependencies. For now the only configurable option is ",(0,o.kt)("inlineCode",{parentName:"p"},"eviction"),", but we may add more in the future."),(0,o.kt)("p",null,"Below is an example of how you might use this new property:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const clockState = selector({\n  key: 'clockState',\n  get: ({get}) => {\n    const hour = get(hourState);\n    const minute = get(minuteState);\n    const second = get(secondState); // will re-run every second\n\n    return `${hour}:${minute}:${second}`;\n  },\n  cachePolicy_UNSTABLE: {\n    // Only store the most recent set of dependencies and their values\n    eviction: 'most-recent',\n  },\n});\n")),(0,o.kt)("p",null,"In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},"clockState")," recalculates every second, adding a new set of dependency values to the internal cache, which may lead to a memory issue over time as the internal cache grows indefinitely. Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"most-recent")," eviction policy, the internal selector cache will only retain the most recent set of dependencies and their values, along with the actual selector value based on those dependencies, thus solving the memory issue."),(0,o.kt)("p",null,"Current eviction options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lru")," - evicts the least-recently-used value from the cache when the size exceeds ",(0,o.kt)("inlineCode",{parentName:"li"},"maxSize"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"most-recent")," - retains only the most recent value."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keep-all")," (",(0,o.kt)("em",{parentName:"li"},"default"),") - keeps all entries in the cache and does not evict.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,o.kt)("em",{parentName:"p"},"The default eviction policy (currently ",(0,o.kt)("inlineCode",{parentName:"em"},"keep-all"),") may change in the future."))))}m.isMDXComponent=!0}}]);