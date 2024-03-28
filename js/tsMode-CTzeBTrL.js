var e;import{t,m as i}from"./index-BYIAYquO.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.46.0(21007360cad28648bdf46282a2592cb47c3a7a6f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var s,r,n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,c=(e,t,i,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))l.call(e,r)||r===i||n(e,r,{get:()=>t[r],enumerable:!(s=o(t,r))||s.enumerable});return e},d={};c(d,s=i,"default"),r&&c(r,s,"default");var u=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=d.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(d.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},g={};function p(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=p(r,t,i);return s}function m(e){return e?e.map((e=>e.text)).join(""):""}g["lib.d.ts"]=!0,g["lib.decorators.d.ts"]=!0,g["lib.decorators.legacy.d.ts"]=!0,g["lib.dom.d.ts"]=!0,g["lib.dom.iterable.d.ts"]=!0,g["lib.es2015.collection.d.ts"]=!0,g["lib.es2015.core.d.ts"]=!0,g["lib.es2015.d.ts"]=!0,g["lib.es2015.generator.d.ts"]=!0,g["lib.es2015.iterable.d.ts"]=!0,g["lib.es2015.promise.d.ts"]=!0,g["lib.es2015.proxy.d.ts"]=!0,g["lib.es2015.reflect.d.ts"]=!0,g["lib.es2015.symbol.d.ts"]=!0,g["lib.es2015.symbol.wellknown.d.ts"]=!0,g["lib.es2016.array.include.d.ts"]=!0,g["lib.es2016.d.ts"]=!0,g["lib.es2016.full.d.ts"]=!0,g["lib.es2017.d.ts"]=!0,g["lib.es2017.full.d.ts"]=!0,g["lib.es2017.intl.d.ts"]=!0,g["lib.es2017.object.d.ts"]=!0,g["lib.es2017.sharedmemory.d.ts"]=!0,g["lib.es2017.string.d.ts"]=!0,g["lib.es2017.typedarrays.d.ts"]=!0,g["lib.es2018.asyncgenerator.d.ts"]=!0,g["lib.es2018.asynciterable.d.ts"]=!0,g["lib.es2018.d.ts"]=!0,g["lib.es2018.full.d.ts"]=!0,g["lib.es2018.intl.d.ts"]=!0,g["lib.es2018.promise.d.ts"]=!0,g["lib.es2018.regexp.d.ts"]=!0,g["lib.es2019.array.d.ts"]=!0,g["lib.es2019.d.ts"]=!0,g["lib.es2019.full.d.ts"]=!0,g["lib.es2019.intl.d.ts"]=!0,g["lib.es2019.object.d.ts"]=!0,g["lib.es2019.string.d.ts"]=!0,g["lib.es2019.symbol.d.ts"]=!0,g["lib.es2020.bigint.d.ts"]=!0,g["lib.es2020.d.ts"]=!0,g["lib.es2020.date.d.ts"]=!0,g["lib.es2020.full.d.ts"]=!0,g["lib.es2020.intl.d.ts"]=!0,g["lib.es2020.number.d.ts"]=!0,g["lib.es2020.promise.d.ts"]=!0,g["lib.es2020.sharedmemory.d.ts"]=!0,g["lib.es2020.string.d.ts"]=!0,g["lib.es2020.symbol.wellknown.d.ts"]=!0,g["lib.es2021.d.ts"]=!0,g["lib.es2021.full.d.ts"]=!0,g["lib.es2021.intl.d.ts"]=!0,g["lib.es2021.promise.d.ts"]=!0,g["lib.es2021.string.d.ts"]=!0,g["lib.es2021.weakref.d.ts"]=!0,g["lib.es2022.array.d.ts"]=!0,g["lib.es2022.d.ts"]=!0,g["lib.es2022.error.d.ts"]=!0,g["lib.es2022.full.d.ts"]=!0,g["lib.es2022.intl.d.ts"]=!0,g["lib.es2022.object.d.ts"]=!0,g["lib.es2022.regexp.d.ts"]=!0,g["lib.es2022.sharedmemory.d.ts"]=!0,g["lib.es2022.string.d.ts"]=!0,g["lib.es2023.array.d.ts"]=!0,g["lib.es2023.d.ts"]=!0,g["lib.es2023.full.d.ts"]=!0,g["lib.es5.d.ts"]=!0,g["lib.es6.d.ts"]=!0,g["lib.esnext.d.ts"]=!0,g["lib.esnext.full.d.ts"]=!0,g["lib.esnext.intl.d.ts"]=!0,g["lib.scripthost.d.ts"]=!0,g["lib.webworker.d.ts"]=!0,g["lib.webworker.importscripts.d.ts"]=!0,g["lib.webworker.iterable.d.ts"]=!0;var h=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:o,column:a}=s;return{startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a}}},b=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!g[e.path.slice(1)])}getOrCreateModel(e){const i=d.Uri.parse(e),s=d.editor.getModel(i);if(s)return s;if(this.isLibFile(i)&&this._hasFetchedLibFiles)return d.editor.createModel(this._libFiles[i.path.slice(1)],"typescript",i);const r=t.getExtraLibs()[e];return r?d.editor.createModel(r.content,"typescript",i):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},f=class extends h{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():d.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{d.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(d.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(d.editor.onWillDisposeModel(n)),this._disposables.push(d.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of d.editor.getModels())n(e)}});const o=()=>{for(const e of d.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(o)),this._disposables.push(this._defaults.onDidExtraLibsChange(o)),d.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const o=await Promise.all(i);if(!o||e.isDisposed())return;const a=o.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),l=a.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?d.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(l),e.isDisposed()||d.editor.setModelMarkers(e,this._selector,a.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:o,column:a}=e.getPositionAt(i+s),l=[];return t.reportsUnnecessary&&l.push(d.MarkerTag.Unnecessary),t.reportsDeprecated&&l.push(d.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:o,endColumn:a,message:p(t.messageText,"\n"),code:t.code.toString(),tags:l,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:o,column:a}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:o,startColumn:a,endLineNumber:l,endColumn:c,message:p(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return d.MarkerSeverity.Error;case 3:return d.MarkerSeverity.Info;case 0:return d.MarkerSeverity.Warning;case 2:return d.MarkerSeverity.Hint}return d.MarkerSeverity.Info}},_=class e extends h{get triggerCharacters(){return["."]}async provideCompletionItems(t,i,s,r){const n=t.getWordUntilPosition(i),o=new d.Range(i.lineNumber,n.startColumn,i.lineNumber,n.endColumn),a=t.uri,l=t.getOffsetAt(i),c=await this._worker(a);if(t.isDisposed())return;const u=await c.getCompletionsAtPosition(a.toString(),l);if(!u||t.isDisposed())return;return{suggestions:u.entries.map((s=>{let r=o;if(s.replacementSpan){const e=t.getPositionAt(s.replacementSpan.start),i=t.getPositionAt(s.replacementSpan.start+s.replacementSpan.length);r=new d.Range(e.lineNumber,e.column,i.lineNumber,i.column)}const n=[];return void 0!==s.kindModifiers&&-1!==s.kindModifiers.indexOf("deprecated")&&n.push(d.languages.CompletionItemTag.Deprecated),{uri:a,position:i,offset:l,range:r,label:s.name,insertText:s.name,sortText:s.sortText,kind:e.convertKind(s.kind),tags:n}}))}}async resolveCompletionItem(t,i){const s=t,r=s.uri,n=s.position,o=s.offset,a=await this._worker(r),l=await a.getCompletionEntryDetails(r.toString(),o,s.label);return l?{uri:r,position:n,label:l.name,kind:e.convertKind(l.kind),detail:m(l.displayParts),documentation:{value:e.createDocumentationString(l)}}:s}static convertKind(e){switch(e){case D.primitiveType:case D.keyword:return d.languages.CompletionItemKind.Keyword;case D.variable:case D.localVariable:return d.languages.CompletionItemKind.Variable;case D.memberVariable:case D.memberGetAccessor:case D.memberSetAccessor:return d.languages.CompletionItemKind.Field;case D.function:case D.memberFunction:case D.constructSignature:case D.callSignature:case D.indexSignature:return d.languages.CompletionItemKind.Function;case D.enum:return d.languages.CompletionItemKind.Enum;case D.module:return d.languages.CompletionItemKind.Module;case D.class:return d.languages.CompletionItemKind.Class;case D.interface:return d.languages.CompletionItemKind.Interface;case D.warning:return d.languages.CompletionItemKind.File}return d.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=m(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${y(i)}`;return t}};function y(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var w=class e extends h{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case d.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case d.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,i,s,r){const n=t.uri,o=t.getOffsetAt(i),a=await this._worker(n);if(t.isDisposed())return;const l=await a.getSignatureHelpItems(n.toString(),o,{triggerReason:e._toSignatureHelpTriggerReason(r)});if(!l||t.isDisposed())return;const c={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:m(e.documentation)},t.label+=m(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=m(i.displayParts),o={label:n,documentation:{value:m(i.documentation)}};t.label+=n,t.parameters.push(o),s<r.length-1&&(t.label+=m(e.separatorDisplayParts))})),t.label+=m(e.suffixDisplayParts),c.signatures.push(t)})),{value:c,dispose(){}}}},S=class extends h{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getQuickInfoAtPosition(s.toString(),r);if(!o||e.isDisposed())return;const a=m(o.documentation),l=o.tags?o.tags.map((e=>y(e))).join("  \n\n"):"",c=m(o.displayParts);return{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:a+(l?"\n\n"+l:"")}]}}},x=class extends h{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);return o&&!e.isDisposed()?o.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?d.languages.DocumentHighlightKind.Write:d.languages.DocumentHighlightKind.Text}))))):void 0}},v=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const o=await n.getDefinitionAtPosition(s.toString(),r);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const a=[];for(let l of o){const e=this._libFiles.getOrCreateModel(l.fileName);e&&a.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return a}},k=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const a=await o.getReferencesAtPosition(r.toString(),n);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>d.Uri.parse(e.fileName)))),e.isDisposed())return;const l=[];for(let c of a){const e=this._libFiles.getOrCreateModel(c.fileName);e&&l.push({uri:e.uri,range:this._textSpanToRange(e,c.textSpan)})}return l}},C=class extends h{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;const n=(t,i)=>{var s;return{name:t.text,detail:"",kind:F[t.kind]||d.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:null==(s=t.childItems)?void 0:s.map((e=>n(e,t.text))),containerName:i}};return r.childItems?r.childItems.map((e=>n(e))):[]}},D=((e=class{}).unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e),F=Object.create(null);F[D.module]=d.languages.SymbolKind.Module,F[D.class]=d.languages.SymbolKind.Class,F[D.enum]=d.languages.SymbolKind.Enum,F[D.interface]=d.languages.SymbolKind.Interface,F[D.memberFunction]=d.languages.SymbolKind.Method,F[D.memberVariable]=d.languages.SymbolKind.Property,F[D.memberGetAccessor]=d.languages.SymbolKind.Property,F[D.memberSetAccessor]=d.languages.SymbolKind.Property,F[D.variable]=d.languages.SymbolKind.Variable,F[D.const]=d.languages.SymbolKind.Variable,F[D.localVariable]=d.languages.SymbolKind.Variable,F[D.variable]=d.languages.SymbolKind.Variable,F[D.function]=d.languages.SymbolKind.Function,F[D.localFunction]=d.languages.SymbolKind.Function;var I,A,P=class extends h{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},T=class extends P{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getFormattingEditsForRange(r.toString(),n,o,P._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},L=class extends P{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,o=e.getOffsetAt(t),a=await this._worker(n);if(e.isDisposed())return;const l=await a.getFormattingEditsAfterKeystroke(n.toString(),o,i,P._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},O=class extends P{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=P._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,o,l,a);if(!d||e.isDisposed())return{actions:[],dispose:()=>{}};return{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,t.span),text:t.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},N=class extends h{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),o=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const l=await a.getRenameInfo(n,o,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await a.findRenameLocations(n,o,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const u of c){const e=this._libFiles.getOrCreateModel(u.fileName);if(!e)throw new Error(`Unknown file ${u.fileName}.`);d.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.textSpan),text:i}})}return{edits:d}}},K=class extends h{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),o=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(s);if(e.isDisposed())return null;return{hints:(await a.provideInlayHints(r,n,o)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?d.languages.InlayHintKind.Parameter:d.languages.InlayHintKind.Type}};function M(e){A=V(e,"typescript")}function R(e){I=V(e,"javascript")}function E(){return new Promise(((e,t)=>{if(!I)return t("JavaScript not registered!");e(I)}))}function H(){return new Promise(((e,t)=>{if(!A)return t("TypeScript not registered!");e(A)}))}function V(e,t){const i=[],s=new u(t,e),r=(...e)=>s.getLanguageServiceWorker(...e),n=new b(r);return function(){const{modeConfiguration:s}=e;!function(e){for(;e.length;)e.pop().dispose()}(i),s.completionItems&&i.push(d.languages.registerCompletionItemProvider(t,new _(r))),s.signatureHelp&&i.push(d.languages.registerSignatureHelpProvider(t,new w(r))),s.hovers&&i.push(d.languages.registerHoverProvider(t,new S(r))),s.documentHighlights&&i.push(d.languages.registerDocumentHighlightProvider(t,new x(r))),s.definitions&&i.push(d.languages.registerDefinitionProvider(t,new v(n,r))),s.references&&i.push(d.languages.registerReferenceProvider(t,new k(n,r))),s.documentSymbols&&i.push(d.languages.registerDocumentSymbolProvider(t,new C(r))),s.rename&&i.push(d.languages.registerRenameProvider(t,new N(n,r))),s.documentRangeFormattingEdits&&i.push(d.languages.registerDocumentRangeFormattingEditProvider(t,new T(r))),s.onTypeFormattingEdits&&i.push(d.languages.registerOnTypeFormattingEditProvider(t,new L(r))),s.codeActions&&i.push(d.languages.registerCodeActionProvider(t,new O(r))),s.inlayHints&&i.push(d.languages.registerInlayHintsProvider(t,new K(r))),s.diagnostics&&i.push(new f(n,e,t,r))}(),r}export{h as Adapter,O as CodeActionAdaptor,v as DefinitionAdapter,f as DiagnosticsAdapter,x as DocumentHighlightAdapter,T as FormatAdapter,P as FormatHelper,L as FormatOnTypeAdapter,K as InlayHintsAdapter,D as Kind,b as LibFiles,C as OutlineAdapter,S as QuickInfoAdapter,k as ReferenceAdapter,N as RenameAdapter,w as SignatureHelpAdapter,_ as SuggestAdapter,u as WorkerManager,p as flattenDiagnosticMessageText,E as getJavaScriptWorker,H as getTypeScriptWorker,R as setupJavaScript,M as setupTypeScript};
