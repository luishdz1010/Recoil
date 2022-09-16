"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7413],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(g,s(s({ref:n},p),{},{components:t})):o.createElement(g,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6434:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={title:"\uac1c\ubc1c \ub3c4\uad6c",sidebar_label:"\uac1c\ubc1c \ub3c4\uad6c"},l=void 0,c={unversionedId:"guides/dev-tools",id:"guides/dev-tools",title:"\uac1c\ubc1c \ub3c4\uad6c",description:"Recoil\uc740 \uc0c1\ud0dc\uc758 \ubcc0\uacbd\uc744 \uad00\ucc30\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/guides/dev-tools.md",sourceDirName:"guides",slug:"/guides/dev-tools",permalink:"/ko/docs/guides/dev-tools",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/guides/dev-tools.md",tags:[],version:"current",frontMatter:{title:"\uac1c\ubc1c \ub3c4\uad6c",sidebar_label:"\uac1c\ubc1c \ub3c4\uad6c"},sidebar:"docs",previous:{title:"\ud2b8\ub79c\uc9c0\uc158",permalink:"/ko/docs/guides/transitions"},next:{title:"<RecoilRoot />",permalink:"/ko/docs/api-reference/core/RecoilRoot"}},p=[{value:"<em>IMPORTANT NOTE</em>",id:"important-note",children:[],level:2},{value:"Observing All State Changes (\ubaa8\ub4e0 \uc0c1\ud0dc\uc758 \ubcc0\ud654 \uad00\ucc30)",id:"observing-all-state-changes-\ubaa8\ub4e0-\uc0c1\ud0dc\uc758-\ubcc0\ud654-\uad00\ucc30",children:[],level:2},{value:"Observing State Changes On-Demand (On-Demand \ubc29\uc2dd\uc5d0 \ub530\ub77c \uc0c1\ud0dc \ubcc0\ud654 \uad00\ucc30\ud558\uae30)",id:"observing-state-changes-on-demand-on-demand-\ubc29\uc2dd\uc5d0-\ub530\ub77c-\uc0c1\ud0dc-\ubcc0\ud654-\uad00\ucc30\ud558\uae30",children:[],level:2},{value:"Time Travel",id:"time-travel",children:[],level:2},{value:"Inspecting current state (\ud604\uc7ac \uc0c1\ud0dc \uac80\uc0ac)",id:"inspecting-current-state-\ud604\uc7ac-\uc0c1\ud0dc-\uac80\uc0ac",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recoil\uc740 \uc0c1\ud0dc\uc758 \ubcc0\uacbd\uc744 \uad00\ucc30\ud558\uace0 \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\ub3c4\ub85d \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"important-note"},(0,a.kt)("em",{parentName:"h2"},"IMPORTANT NOTE")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\uc774 API\ub294 \ud604\uc7ac \uac1c\ubc1c\uc911\uc774\uba70 \ubc14\ub014 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uc18d\uc801\uc778 \uad00\uc2ec \ubc14\ub78d\ub2c8\ub2e4..."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"observing-all-state-changes-\ubaa8\ub4e0-\uc0c1\ud0dc\uc758-\ubcc0\ud654-\uad00\ucc30"},"Observing All State Changes (\ubaa8\ub4e0 \uc0c1\ud0dc\uc758 \ubcc0\ud654 \uad00\ucc30)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilSnapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilSnapshot()")))," \uacfc \uac19\uc740 hook\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransactionObserver"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilTransactionObserver_UNSTABLE()")))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \uad6c\ub3c5\ud558\uace0 \uc0c8\ub85c\uc6b4 \uc0c1\ud0dc\uc758 ",(0,a.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/Snapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Snapshot")))," \uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,"\ud55c\ubc88 Snapshot\uc744 \uc5bb\uc73c\uba74 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getLodable()")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getPromise()"))," , \uadf8\ub9ac\uace0 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getInfo_UNSTABLE()"))," \uacfc \uac19\uc740 \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\ub97c \uac10\uc2dc\ud560 \uc218 \uc788\uc73c\uba70, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getNodes_UNSTABLE()"))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc54c\ub824\uc9c4 atom\uc758 set\ub97c \uc21c\ud68c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver(): React.Node {\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    console.debug('The following atoms were modified:');\n    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {\n      console.debug(node.key, snapshot.getLoadable(node));\n    }\n  }, [snapshot]);\n\n  return null;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")),(0,a.kt)("h2",{id:"observing-state-changes-on-demand-on-demand-\ubc29\uc2dd\uc5d0-\ub530\ub77c-\uc0c1\ud0dc-\ubcc0\ud654-\uad00\ucc30\ud558\uae30"},"Observing State Changes On-Demand (On-Demand \ubc29\uc2dd\uc5d0 \ub530\ub77c \uc0c1\ud0dc \ubcc0\ud654 \uad00\ucc30\ud558\uae30)"),(0,a.kt)("p",null,"\ud639\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/useRecoilCallback"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilCallback()")))," hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud544\uc694\uc5d0 \ub530\ub77c ",(0,a.kt)("a",{parentName:"p",href:"https://recoiljs.org/docs/api-reference/core/Snapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Snapshot")))," \uc744 \uc5bb\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugButton(): React.Node {\n  const onClick = useRecoilCallback(\n    ({snapshot}) => async () => {\n      console.debug('Atom values:');\n      for (const node of snapshot.getNodes_UNSTABLE()) {\n        const value = await snapshot.getPromise(node);\n        console.debug(node.key, value);\n      }\n    },\n    [],\n  );\n\n  return <button onClick={onClick}>Dump State</button>;\n}\n")),(0,a.kt)("h2",{id:"time-travel"},"Time Travel"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useGotoRecoilSnapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useGotoRecoilSnapshot()")))," hook\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc81c\uacf5\ub41c ",(0,a.kt)("inlineCode",{parentName:"p"},"Snapshot"),"\uacfc \ub9e4\uce58\ub418\ub3c4\ub85d \uc804\uccb4 Recoil \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc608\uc81c\ub294 \uc774\uc804\uc758 \uc804\uc5ed \uc0c1\ud0dc\ub85c \ub3cc\uc544\uac00 \ubcf5\uad6c\ud558\ub294 \ub2a5\ub825\uc744 \uc774\uc6a9\ud574 \uc0c1\ud0dc \ubcc0\uacbd \ud788\uc2a4\ud1a0\ub9ac\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4"),(0,a.kt)("p",null,"Snapshot\uc740 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getID()"))," \uba54\uc11c\ub4dc\ub3c4 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getID()"))," \ub294 ",(0,a.kt)("inlineCode",{parentName:"p"},"snapshot")," \ud788\uc2a4\ud1a0\ub9ac\uc758 \uc5c5\ub370\uc774\ud2b8\ub97c \ub9c9\uae30 \uc704\ud574 \uc774\uc804\uc5d0 \uc54c\ub824\uc9c4 \uc0c1\ud0dc\ub85c \ub418\ub3cc\uc544\uac00\ub294\uc9c0 \uc54c\uc544\ub0b4\ub294\ub370\uc5d0 \ub3c4\uc6c0\uc744 \uc90d\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    if (snapshots.every((s) => s.getID() !== snapshot.getID())) {\n      setSnapshots([...snapshots, snapshot]);\n    }\n  }, [snapshot]);\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>Restore</button>\n        </li>\n      ))}\n    </ol>\n  );\n}\n")),(0,a.kt)("h2",{id:"inspecting-current-state-\ud604\uc7ac-\uc0c1\ud0dc-\uac80\uc0ac"},"Inspecting current state (\ud604\uc7ac \uc0c1\ud0dc \uac80\uc0ac)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useGetRecoilValueInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetRecoilValueInfo_UNSTABLE()")),"\ub294 \ud604\uc7ac \uc0c1\ud0dc\ub97c \uc5ff\ubcf4\uace0 atom \ubc0f Selector\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc5bb\ub294 \ub370 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucf5c\ubc31\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \uc774\uac83\uc740 \ud604\uc7ac ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshot")),"\uc5d0\uc11c ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#debug-information"},(0,a.kt)("inlineCode",{parentName:"a"},"getInfo_UNSTABLE()")),"\uc744 \ud638\ucd9c\ud558\ub294 \uac83\uacfc \uac19\uc2b5\ub2c8\ub2e4. \ub2e8, Atom\ub97c \uad6c\ub3c5\ud558\ub294 React \ucef4\ud3ec\ub10c\ud2b8 \uc138\ud2b8\uc640 \uac19\uc740 \ucd94\uac00 \uc815\ubcf4\ub97c \uc81c\uacf5\ud560 \uc218 \uc788\ub294 \uc810\uc744 \uc81c\uc678\ud558\uace0 \uc774\ub294 \ubcc0\uacbd\ub420 \uc218 \uc788\uc73c\uba70 Recoil \uc0c1\ud0dc\uc758 \uc2a4\ub0c5\uc0f7\uacfc \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);