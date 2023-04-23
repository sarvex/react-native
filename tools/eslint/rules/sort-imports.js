/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * To regenerate this file, please run this command on Meta's monorepo:
 * @codegen-command : xplat/js/tools/sort-imports/scripts/build.sh
 * @generated SignedSource<<7b94a136bcb0a75c0ed8a3e4fea96e2b>>
 * @nolint
 */
"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function t(e){var t=e.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}const n=e(require("path")).default,r=__dirname.split(n.sep).includes("xplat");function i(e){if(("Literal"===e.type||"JSXText"===e.type)&&"string"==typeof e.value)return e.value;if("BinaryExpression"===e.type&&"+"===e.operator){const t=i(e.left),n=i(e.right);if(null!=t&&null!=n)return t+n}return null}function o(e){if("Identifier"===e.type)return e.name;if("ThisExpression"===e.type)return"this";if("MemberExpression"===e.type){const t=o(e.object),n=e.computed?i(e.property):o(e.property);if(null!=t&&null!=n)return t+"."+n}else if("TypeCastExpression"===e.type)return o(e.expression);return null}function a(e){return e.callee?o(e.callee):null}function l(e,t,n){const r=e.getSourceCode().getText(),i=function(e,t){if(t.line<1)throw new RangeError("Line number "+t.line+" is before the start of file");const n=/\r\n|\r|\n|\u2028|\u2029/g;let r={index:0};for(let i=1;i<t.line;++i)if(r=n.exec(e),null==r)throw new RangeError("Line number "+t.line+" is past the end of file");if(null==r)throw new RangeError("Line number "+t.line+" is past the end of file");return r.index+(r[0]||"").length}(r,t)+t.column+n;return function(e,t){if(t<0)throw new RangeError("computed offset "+t+" is a negative index");if(t>=e.length)throw new RangeError("computed offset "+t+" is past the end of file");const n=/\r\n|\r|\n|\u2028|\u2029/g;let r,i={index:0},o=0;do{r=i,i=n.exec(e),++o}while(i&&i.index<t);return{line:o,column:t-r.index-(r[0]||"").length}}(r,i)}function s(e,t){let n;return e.variables.some((function(e){return!(!e.defs.length||e.name!==t)&&(n=e,!0)})),n||(null==e.upper?null:s(e.upper,t))}const u=e=>"string"==typeof e&&e.charCodeAt(0)>=97,c=e=>"string"==typeof e&&e.charCodeAt(0)<=90;function p(e){return null!=e&&"VariableDeclaration"===e.type&&"Program"===e.parent.type&&1===e.declarations.length&&null!=e.declarations[0].init&&m(e.declarations[0].init)}function f(e){return null!=e&&"VariableDeclarator"===e.type&&"VariableDeclaration"===e.parent.type&&"Program"===e.parent.parent.type&&1===e.parent.declarations.length&&m(e.init)}function m(e){return null!=e&&(d(e)||y(e)||h(e))}function g(e){return null!=e&&"CallExpression"===e.type&&e.callee&&"Identifier"===e.callee.type&&"requireNUX"===e.callee.name&&2===e.arguments.length&&"Literal"===e.arguments[0].type}function d(e){return"CallExpression"===e.type&&e.callee&&"Identifier"===e.callee.type&&"require"===e.callee.name&&1===e.arguments.length&&"Literal"===e.arguments[0].type}function y(e){return"CallExpression"===e.type&&"Identifier"===e.callee.type&&"requireDeferred"===e.callee.name&&1===e.arguments.length&&"Literal"===e.arguments[0].type&&"string"==typeof e.arguments[0].value}function h(e){return"CallExpression"===e.type&&"Identifier"===e.callee.type&&"requireDeferredForDisplay"===e.callee.name&&1===e.arguments.length&&"Literal"===e.arguments[0].type&&"string"==typeof e.arguments[0].value}function x(e){return"ImportDeclaration"===e.type&&(null==e.importKind||"value"===e.importKind)}function b(e){return"ImportDeclaration"===e.type&&("type"===e.importKind||"typeof"===e.importKind)}function C(e){return x(e)||b(e)}function S(e){return null!=e&&"CallExpression"===e.type&&e.callee&&"Identifier"===e.callee.type&&"JSResource"===e.callee.name&&1===e.arguments.length&&"Literal"===e.arguments[0].type}function v(e){return null!=e&&"CallExpression"===e.type&&e.callee&&"Identifier"===e.callee.type&&"JSResourceForInteraction"===e.callee.name&&2===e.arguments.length&&"Literal"===e.arguments[0].type}function E(e){return null!=e&&"CallExpression"===e.type&&"Identifier"===e.callee.type&&"ClientJSResource"===e.callee.name&&1===e.arguments.length&&"Literal"===e.arguments[0].type&&"string"==typeof e.arguments[0].value}function I(e){if(null==e||"CallExpression"!==e.type||null==e.callee)return!1;let t;return"Identifier"===e.callee.type&&(t=e.callee),"MemberExpression"===e.callee.type&&"Identifier"===e.callee.object.type&&(t=e.callee.object),null!=t&&"requireCond"===t.name&&e.arguments.length>0}function T(e){return 0===e.indexOf("m#")?e.substring(2):e}function R(e,t,n=1){return"CallExpression"!==e.type||e.arguments.length!==n||null!=t&&"string"==typeof t&&a(e)!==t||"Literal"!==e.arguments[0].type||"string"!=typeof e.arguments[0].value?null:T(e.arguments[0].value)}function D(e,t,n){const r=e.arguments;return I(e)?3!==r.length?null:(null==t||r[0]&&"Literal"===r[0].type&&r[0].value===t)&&(null==n||r[1]&&"Literal"===r[1].type&&r[1].value===n)?r[2]&&"ObjectExpression"===r[2].type?r[2].properties.reduce(((e,t)=>{if("Property"===t.type&&"Literal"===t.value.type){let n;if("Identifier"===t.key.type)n=t.key.name;else{if("Literal"!==t.key.type)return e;n=String(t.key.value)}e[n]="string"==typeof t.value.value?T(t.value.value):null}return e}),{}):r[2]&&"Literal"===r[2].type&&"string"==typeof r[2].value?T(r[2].value):null:null:null}function w(e){return R(e,"JSResource")}function N(e){return null==e?null:m(e)?"string"!=typeof e.arguments[0].value?null:T(e.arguments[0].value):null}function q(e,t){const n=e.getSourceCode().ast.body.find((e=>"VariableDeclaration"===e.type&&1===e.declarations.length&&"VariableDeclarator"===e.declarations[0].type&&null!=e.declarations[0].init&&N(e.declarations[0].init)===t));return n||null}function k(e){let t=e;for(;"TypeCastExpression"===t.type;)t=t.expression;return t}function L(e){if("value"!==e.importKind)return!0;return e.specifiers.every((e=>"ImportSpecifier"===e.type&&("type"===e.importKind||"typeof"===e.importKind)))}function O(e,t){const n=e.getSourceCode().ast.body.find((e=>"ImportDeclaration"===e.type&&e.source.value===t&&!L(e)));return n||null}var P={asAnyKindOfRequireCall:function(e){return m(e)?e:null},asAnyKindOfRequireVariableDeclaration:function(e){return p(e)?e:null},asAnyKindOfRequireVariableDeclarator:function(e){return f(e)?e:null},getAnyRequiredModuleName:function(e,t=Object.freeze({})){const n=N(e)||w(e)||function(e){return R(e,"JSResourceForInteraction",2)}(e)||function(e){if(!g(e))return null;if(2!==e.arguments.length)return null;if("string"!=typeof e.arguments[1].value)return null;return T(e.arguments[1].value)}(e);return null!=n?n:D(e,t.condType,t.condition)},getBaseNode:function(e){let t=e;for(;"MemberExpression"===t.type;)t=t.object;return t},getBinding:s,getBootloadedModuleNames:function(e){return"ExpressionStatement"===e.type&&e.expression&&"CallExpression"===e.expression.type&&e.expression.callee&&"MemberExpression"===e.expression.callee.type&&e.expression.callee.object&&"Bootloader"===e.expression.callee.object.name&&e.expression.callee.property&&"loadModules"===e.expression.callee.property.name&&e.expression.arguments.length>0&&"ArrayExpression"===e.expression.arguments[0].type&&e.expression.arguments[0].elements.length>0?e.expression.arguments[0].elements.map((e=>"Literal"===e.type&&"string"==typeof e.value?e.value:null)).filter(Boolean):null},getCalleeName:a,getConstantStringExpression:i,getCurrentClassName:function(e){const t=e.getAncestors().find((e=>"ClassDeclaration"===e.type));return t&&"ClassDeclaration"===t.type&&null!=t.id?t.id.name:null},getEnglishForNth:function(e){return["first","second","third","fourth","fifth","sixth"][e]},getFullyQualifiedIdentifier:o,getJSResourceModuleName:w,getJSXMemberOrNamespaceRoot:function(e){let t=e;for(;"JSXIdentifier"!==t.type;)if("JSXMemberExpression"===t.type)t=t.object;else{if("JSXNamespacedName"!==t.type)throw new Error("unexpected "+t.type);t=t.namespace}return t},getLocOffset:function(e,t,n){return l(e,t.loc.start,n)},getLocOffsetOfLoc:l,getName:function(e){const t=k(e);return"Identifier"===t.type?t.name:"Literal"===t.type?String(t.value):null},getObjectPropertyName:function(e){if("Property"!==e.type&&"PropertyDefinition"!==e.type&&"MethodDefinition"!==e.type)return null;const t=e.key;return"Identifier"!==t.type||e.computed?function(e){switch(e.type){case"Literal":switch(e.literalType){case"bigint":return e.bigint;case"null":return"null";case"regexp":return`/${e.regex.pattern}/${e.regex.flags}`;default:return String(e.value)}case"TemplateLiteral":if(0===e.expressions.length&&1===e.quasis.length)return e.quasis[0].value.cooked}return null}(t):t.name},getParamComments:function(e,t){return t.params.map((function(t){const n=e.getSourceCode().getCommentsBefore(t);return n[n.length-1]}))},getPropertyName:function(e){return"MemberExpression"!==e.type?null:e.computed?i(e.property):"Identifier"!==e.property.type?null:e.property.name},getPropTokens:function(e,t){const n=e.getSourceCode().getTokens(t),r=[];return n.forEach(((e,t,n)=>{"JSXIdentifier"===e.type&&"Punctuator"===n[t+1].type&&"="===n[t+1].value&&r.push(e)})),r},getRequireCondModules:D,getRequireModuleName:N,getRequireModuleNode:q,getReturnComment:function(e,t){return e.getSourceCode().getCommentsBefore(t.body)[0]},getValueImportNode:O,hasValueImport:function(e){return e.getSourceCode().ast.body.some((e=>"ImportDeclaration"===e.type&&!L(e)))},getVariable:function(e,t){let n=t;for(;n;){const t=n.set.get(e);if(t)return t;n=n.upper}return null},insertRequireStatement:function(e,t,n,r=""){if(""===n)throw new Error("Name must be a string with length larger than 0");const i=`const ${n} = require('${n}${r}');`,o=[];e.getSourceCode().ast.body.forEach((e=>{if("VariableDeclaration"===e.type&&1===e.declarations.length&&"VariableDeclarator"===e.declarations[0].type&&e.declarations[0].init){const t=N(e.declarations[0].init);null!=t&&o.push({name:t,node:e})}}));const a=o.find((e=>e.name>=n));if(a){if(a.name.replace(r,"")===n)return[];const e=o[0];if(u(a.name)&&c(n)){if(e!==a){const e=a.node.range[0];return[t.removeRange([e-1,e-1]),t.insertTextBefore(a.node,i+"\n\n")]}return[t.insertTextBefore(a.node,i+"\n\n")]}return[t.insertTextBefore(a.node,i+"\n")]}if(o.length>0){const e=o[o.length-1],r=c(e.name)&&u(n)?"\n":"";return[t.insertTextAfter(e.node,"\n"+i+r)]}{const n=e.getSourceCode().ast.body,r=n[0];return"ExpressionStatement"===r.type&&"Literal"===r.expression.type&&"use strict"===r.expression.value?[t.insertTextBefore(n[1],i+"\n")]:[t.insertTextBefore(n[0],i+"\n")]}},insertValueImportStatement:function(e,t,n,r=""){if(""===n)throw new Error("Name must be a string with length larger than 0");const i=`import ${n} from '${n}${r}';`,o=[];e.getSourceCode().ast.body.forEach((e=>{if(x(e)){const t=function(e){if(m(e))return"string"!=typeof e.arguments[0].value?null:T(e.arguments[0].value);if(C(e))return e.source.value;return null}(e);null!=t&&o.push({name:t,node:e})}}));const a=o.find((e=>e.name>=n));if(a){if(a.name.replace(r,"")===n)return[];const e=o[0];if(u(a.name)&&c(n)){if(e!==a){const e=a.node.range[0];return[t.removeRange([e-1,e-1]),t.insertTextBefore(a.node,i+"\n\n")]}return[t.insertTextBefore(a.node,i+"\n\n")]}return[t.insertTextBefore(a.node,i+"\n")]}if(o.length>0){const e=o[o.length-1],r=c(e.name)&&u(n)?"\n":"";return[t.insertTextAfter(e.node,"\n"+i+r)]}{const n=e.getSourceCode().ast.body,r=n[0];return"ExpressionStatement"===r.type&&"Literal"===r.expression.type&&"use strict"===r.expression.value?[t.insertTextBefore(n[1],i+"\n")]:[t.insertTextBefore(n[0],i+"\n")]}},isAnyKindOfImport:C,isAnyKindOfModuleCall:function(e){return m(e)||I(e)||S(e)||v(e)||E(e)||g(e)},isAnyKindOfRequireCall:m,isAnyKindOfRequireVariableDeclaration:p,isAnyKindOfRequireVariableDeclarator:f,isClientJSResource:E,isFbSourceRepo:r,isGraphQLTemplate:function(e){return"Identifier"===e.tag.type&&"graphql"===e.tag.name&&1===e.quasi.quasis.length},isInsideMethod:function(e,t){return e.getAncestors().some((e=>"MethodDefinition"===e.type&&"Identifier"===e.key.type&&e.key.name===t))},isJSResource:S,isJSResourceForInteraction:v,isModuleRef:function(e){return"Literal"===e.type&&"string"==typeof e.value&&e.value.startsWith("m#")},isOnlyTypeImport:L,isOnlyTypeExport:function(e){return"type"===e.exportKind},isReferenced:function(e){const t=e.parent;switch(t.type){case"MemberExpression":case"JSXMemberExpression":return t.property===e&&!0===t.computed||t.object===e;case"MetaProperty":case"ImportDefaultSpecifier":case"ImportNamespaceSpecifier":case"ImportSpecifier":case"LabeledStatement":case"RestElement":case"ObjectPattern":case"ArrayPattern":return!1;case"Property":case"MethodDefinition":return t.key===e&&t.computed;case"VariableDeclarator":case"ClassDeclaration":case"ClassExpression":return t.id!==e;case"ArrowFunctionExpression":case"FunctionDeclaration":case"FunctionExpression":for(let n=0;n<t.params.length;n++)if(t.params[n]===e)return!1;return"ArrowFunctionExpression"!==t.type&&t.id!==e;case"ExportSpecifier":return("ExportNamedDeclaration"!==t.parent.type||!t.parent.source)&&t.local===e;case"JSXAttribute":return t.name!==e;case"PropertyDefinition":return t.value===e;case"CatchClause":return t.param!==e;case"AssignmentExpression":case"AssignmentPattern":return t.right===e}return!0},isRequire:d,isRequireCond:I,isRequireDeferred:y,isRequireDeferredForDisplay:h,isTestOrExample:function(e){const t=e.getFilename();return null!=t.match(/\/__tests__\//)||null!=t.match(/\.react\.example\.js/)},isFlowTypeFile:function(e){return null!=e.getFilename().match(/\.js\.flow$/)},isThisExpression:function(e){return"ThisExpression"===k(e).type},isTypeImportDeclaration:b,isValueImportDeclaration:x,removeRequireStatement:function(e,t,n,r=""){const i=q(e,`${n}${r}`);if(i){const[e,n]=i.range;return[t.removeRange([e,n]),t.removeRange([n,n+1])]}return[]},removeValueImportStatement:function(e,t,n,r=""){const i=O(e,`${n}${r}`);if(i){const[e,n]=i.range;return[t.removeRange([e,n]),t.removeRange([n,n+1])]}return[]},replaceValueImportStatement:function(e,t,n,r="",i,o=""){const a=O(e,`${n}${r}`);return a?[t.replaceText(a,`import ${i} from '${i}${o}';`)]:[]},resolveVariable:function(e,t){const n=s(e.getScope(),t.name);if(null==n)return null;const r=n.defs[0];if(null!=r&&"FunctionName"===r.type)return r.node;const i=n.references.find((e=>e.writeExpr));return null!=i?i.writeExpr:null},stripModuleRef:T,uncast:k};var j=t(Object.freeze({__proto__:null,isCommaOrSemiToken:function(e){return"Punctuator"===e.type&&(","===e.value||";"===e.value)}}));const{isCommaOrSemiToken:B}=j;var F={getInlineComments:function(e,t,n=B){const r=e.ast.comments.filter((e=>e.loc.start.line===t.loc.end.line&&e.range[0]>t.range[1])).sort(((e,t)=>e.range[0]-t.range[0])),i=[];let o=t;for(const t of r){const r=e.getTokensBetween(o,t);if(r.length>0){if(!n)break;if(!r.every(n))break}i.push(t),o=t}return i},getLeadingComments:function(e,t,n){const r=e.getCommentsBefore(t),i=[];let o=t;for(let t=r.length-1;t>=0;t-=1){const a=r[t];if(a===n)break;if(a.loc.end.line===o.loc.start.line){i.unshift(a),o=a;continue}if(a.loc.end.line!==o.loc.start.line-1)break;const l=e.getTokenBefore(a);if(l&&l.loc.end.line===a.loc.start.line)break;i.unshift(a),o=a}return i}};var M=function(e){return e.getSourceCode().ast.docblock?.comment};const{getInlineComments:A,getLeadingComments:V}=F,{isCommaOrSemiToken:$}=j;function K(e){return"@"===e[0]||":"===e[0]}const J=/\d{1,3}(\.\d+)?%/;function _(e){switch(typeof e){case"number":return{isSafeNumericString:!0,isPercentage:!1};case"boolean":return{isSafeNumericString:!1,isPercentage:!1}}return isNaN(e)||isNaN(parseFloat(e))?J.test(e)?{isSafeNumericString:!0,isPercentage:!0}:{isSafeNumericString:!1,isPercentage:!1}:{isSafeNumericString:!0,isPercentage:!1}}function X(e){return e.reduce((([e,t],[n,r])=>[Math.min(e,n),Math.max(t,r)]),[Number.MAX_SAFE_INTEGER,0])}var U={compareNames:function(e,t,n=!1){if("number"==typeof e&&"number"==typeof t)return e-t;const r=String(e),i=String(t);if(""===r&&""!==i)return-1;if(""!==r&&""===i)return 1;if(""===r&&""===i)return 0;const{isSafeNumericString:o,isPercentage:a}=_(r),{isSafeNumericString:l,isPercentage:s}=_(i);if(o&&l){const e=Number.parseFloat(r),t=Number.parseFloat(i);if(e===t){if(!a&&s)return-1;if(a&&!s)return 1}return e-t}if(n){const e=K(r),t=K(i);if(!e&&t)return-1;if(e&&!t)return 1}const u=o||r[0].toLowerCase()===r[0].toUpperCase(),c=l||i[0].toLowerCase()===i[0].toUpperCase();if(!u&&c)return 1;if(u&&!c)return-1;if(!u&&!c){const e=r[0].toLowerCase()===r[0],t=i[0].toLowerCase()===i[0];if(!e&&t)return-1;if(e&&!t)return 1}return r.localeCompare(i,"en",{caseFirst:"upper",sensitivity:"base"})},getEncompassingRange:X,getNodeTextWithComments:function(e,t,n,{shouldIncludeNextTokenInRange:r=$,ensureTextFollowsNode:i,inlineCommentIgnoreToken:o}={}){const a=A(e,t,o),l=[...V(e,t,n).map((({range:e})=>e)),t.range,...a.map((({range:e})=>e))],s=e.getTokenAfter(t);s&&!0===r?.(s)&&l.push(s.range);const u=X(l);let c=e.text.slice(u[0],u[1]);const p=t.range[1]-u[0];if(null!=i){e.getTokenAfter(t)?.value!==i&&(c=c.slice(0,p)+i+c.slice(p))}return{range:u,text:c}},isComma:function(e){return"Punctuator"===e.type&&","===e.value}};const z=P,{getInlineComments:G,getLeadingComments:Q}=F,W=M,{compareNames:H}=U,Y=0,Z={default:1,namespace:2,named:3},ee={default:4,namespace:5,named:6},te={default:7,namespace:8,named:9},ne=0,re=1,ie=2,oe=3,ae=99;var le={meta:{fixable:"code",messages:{incorrectOrder:"Requires should be sorted alphabetically"}},create(e){const t=e.getSourceCode(),n=function(e){const t=W(e);if(null!=t)return t;const n=e.getSourceCode().ast,r=n.body.length>0?n.body[0]:n,i=e.getSourceCode().getCommentsBefore(r)[0];return i&&"Block"===i.type?i:null}(e);if(n&&(n.value.includes("* @generated")||n.value.includes("* @partially-generated")))return{};const r=Object.freeze({typeImport:{priority:10,uppercase:[],lowercase:[],tiebreakFunction:s},valueImport:{priority:20,uppercase:[],lowercase:[],tiebreakFunction:s},requiresUsedByOtherRequires:{priority:30,uppercase:[],lowercase:[],tiebreakFunction:u},require:{priority:40,uppercase:[],lowercase:[],tiebreakFunction:u}}),i=[];let o=null,a=null;const l=new Set;return{Program(n){for(const e of n.body)switch(e.type){case"ImportDeclaration":if("type"===e.importKind||"typeof"===e.importKind)g(r.typeImport,e,e.source.value,!0);else{const n=t.getLastToken(e.source,(e=>"from"===e.value));0===e.specifiers.length&&null==n?d(e):g(r.valueImport,e,e.source.value)}break;case"VariableDeclaration":{const t=e.declarations[0]?.init;if(1!==e.declarations.length||null==t){d(e);break}f(t,e);break}default:d(e)}const s=[];for(const e of Object.keys(r)){const t=r[e];s.push({priority:t.priority,nodes:t.uppercase.sort(((e,n)=>c(e,n,t.tiebreakFunction)))}),s.push({priority:t.priority+5,nodes:t.lowercase.sort(((e,n)=>c(e,n,t.tiebreakFunction)))})}function u(e){return[e.leadingComments.length?e.leadingComments.map((e=>t.getText(e))).join("\n")+"\n":"",e.inlineComments.length?" "+e.inlineComments.map((e=>t.getText(e))).join(" "):""]}const p=s.filter((e=>0!==e.nodes.length)).sort(((e,t)=>e.priority-t.priority)).map((e=>e.nodes.map((e=>{const[n,r]=u(e),i=function(e,t){const n=t.node,r=e.getText(n),i=(()=>{if("ImportDeclaration"===n.type&&null!=n.specifiers.find((e=>"ImportSpecifier"===e.type))){const t=e.getFirstToken(n,(e=>"Punctuator"===e.type&&"{"===e.value)),r=e.getFirstToken(n,(e=>"Punctuator"===e.type&&"}"===e.value));return null==t||null==r?null:e.getText().substring(t.range[0],r.range[1])}if("VariableDeclaration"===n.type&&"ObjectPattern"===n.declarations[0].id.type){const t=n.declarations[0].id.typeAnnotation,r=e.getText(n.declarations[0].id);return t?r.substr(0,t.range[0]-n.declarations[0].id.range[0]):r}return null})();if(null==i)return r;let o=[],a=null;"ImportDeclaration"===n.type?o=n.specifiers.map((t=>"ImportDefaultSpecifier"===t.type||"ImportNamespaceSpecifier"===t.type?null:{leadingComments:e.getCommentsBefore(t),name:t.imported.name,node:t})).filter(Boolean):"VariableDeclaration"===n.type&&"ObjectPattern"===n.declarations[0].id.type&&(o=n.declarations[0].id.properties.map((t=>{if("ExperimentalRestProperty"===t.type||"RestElement"===t.type)return a=t,null;const n=t.key,r="Literal"===n.type?String(n.value):"Identifier"===n.type?t.computed?null:n.name:null;return null==r?null:{leadingComments:e.getCommentsBefore(t),name:r,node:t}})).filter(Boolean));if(o.length<=1)return r;const l=i.indexOf("\n")>=0,s=o.sort(((e,t)=>H(e.name,t.name))).map((e=>e.node));null!=a&&s.push(a);const u=s.map((t=>{const n=e.getCommentsBefore(t).map((t=>e.getText(t))),r=n.length?n.join(""):"";return l?(r?"  "+r+"\n":"")+"  "+e.getText(t):(r?r+" ":"")+e.getText(t)})),c=(()=>{const t=[];if("ImportDeclaration"===n.type){if(t.push(...e.getCommentsBefore(n.source)),l&&null!=n.specifiers.find((e=>"ImportSpecifier"===e.type))){const r=e.getTokenBefore(n.source,(e=>"Punctuator"===e.type&&"}"===e.value));null!=r&&t.push(...e.getCommentsBefore(r))}}else if("VariableDeclaration"===n.type&&"ObjectPattern"===n.declarations[0].id.type){const r=e.getLastToken(n.declarations[0].id);null!=r&&t.push(...e.getCommentsBefore(r))}return t})(),p=l&&c.length?c.map((t=>"  "+e.getText(t))).join("\n")+"\n":"",f=l?"\n"+u.map((e=>e.includes("...")?`${e}\n`:`${e},\n`)).join("")+p:u.join(", ");return r.replace(i,(()=>`{${f}}`))}(t,e);return n+i+r})).join("\n"))).join("\n\n"),m=o;if(null==m||null==a)return;const y=m.leadingComments.length?m.leadingComments[0].range[0]:m.node.range[0],h=a.inlineComments.length>0?a.inlineComments[a.inlineComments.length-1].range[1]:a.node.range[1];t.getText(m.node,m.node.range[0]-y,h-m.node.range[1])!==p&&e.report({node:m.node,messageId:"incorrectOrder",fix(e){const n=i.filter((({node:e})=>e.range[0]>=y&&e.range[1]<=h)).map((e=>{const[n,r]=u(e),i=t.getText(e.node);return{range:e.node.range,text:n+i+r}})).flat().concat(t.getAllComments().filter((e=>e.range[0]>=y&&e.range[1]<=h&&!l.has(e))).map((e=>({range:e.range,text:t.getText(e)})))).sort(((e,t)=>e.range[0]-t.range[0]||e.range[1]-t.range[1])).map((({text:e})=>e)).join("\n");return e.replaceTextRange([y,h],[p,n].filter(Boolean).join("\n\n"))}})}};function s(e){if(0===e.specifiers.length)return Y;const t=(()=>{switch(e.importKind){default:case"value":return Z;case"type":return ee;case"typeof":return te}})();return e.specifiers.find((e=>"ImportDefaultSpecifier"===e.type))?t.default:e.specifiers.find((e=>"ImportNamespaceSpecifier"===e.type))?t.namespace:t.named}function u(e){if("ExpressionStatement"===e.type)return ne;switch(e.declarations[0].id.type){case"Identifier":return re;case"ObjectPattern":return ie;case"ArrayPattern":return oe}return ae}function c(e,t,n){const r=H(e.moduleName,t.moduleName);if(0!==r)return r;const i=n(e.node)-n(t.node);return 0!==i?i:e.node.loc.start.line-t.node.loc.start.line}function p(e,t){if(null==e)throw new Error("Missing required module name");return null!=t?`${e}_${t}`:e}function f(e,n,i){const o=z.getRequireModuleName(e);if(z.isRequire(e)){const e=p(o,i);g("requireCond"===e||"requireDeferred"===e||"requireDeferredForDisplay"===e?r.requiresUsedByOtherRequires:r.require,n,p(o,i))}else if(z.isRequireDeferred(e)||z.isRequireDeferredForDisplay(e))g(r.require,n,p(o,i));else{if(z.isRequireCond(e)){if("VariableDeclaration"===n.type){const e=t.getText(n.declarations[0].id);return void g(r.require,n,p(e,i))}}else{if("MemberExpression"===e.type)return void f(e.object,n,p(t.getText(e.property),i));if("CallExpression"===e.type)return void f(e.callee,n,i)}d(n)}}function m(e){e.leadingComments.forEach((e=>l.add(e))),e.inlineComments.forEach((e=>l.add(e)));t.getCommentsInside(e.node).forEach((e=>l.add(e)))}function g(e,r,i,l=!1){const s={inlineComments:G(t,r),leadingComments:Q(t,r,n),moduleName:i,node:r};if(l)e.uppercase.push(s);else{const t=i[0]||"";t.toLowerCase()===t?e.lowercase.push(s):e.uppercase.push(s)}null==o&&(o=s),a=s,m(s)}function d(e){const r={inlineComments:G(t,e),leadingComments:Q(t,e,n),node:e};i.push(r),m(r)}}};const se=le;var ue={...se,create:e=>e.getSourceCode().getText().includes("@generated SignedSource<<")?{}:se.create(e)};module.exports=ue;
