
/* Smart HTML Elements v4.0.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-table",class extends Smart.ContentElement{static get properties(){return{columns:{value:null,type:"any?",reflectToAttribute:!1},dataSource:{value:null,type:"any?",reflectToAttribute:!1},sortMode:{value:"none",type:"string",allowedValues:["none","one","many"]}}}static get listeners(){return{"tableContainer.down":"downHandler"}}template(){return`<div id="container" class="smart-container">
					   <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class ="smart-table-container">
							<content></content>
                       </table>              
                </div>`}ready(){const a=this;a.dataBind()}_initColumns(){const a=this;a._columns=[],a.columnByDataField=[];for(let b,c=0;c<a.columns.length;c++){if(b=a.columns[c],"string"==typeof b&&a.dataSource.dataFields){const c=a.dataSource.dataFields.find(a=>{if(a.name===b)return a});b={label:b,dataField:b,dataType:c?c.dataType||"string":"string"}}a._columns.push(b),a.columnByDataField[b.dataField]=b}}_initRows(){const a=this;a.rows=[],a.rowById=[];const b=function(b,c){const d={data:b,boundIndex:c};a.rowById[d.uid]=d,a.rows.push(d)},c=function(){const b=a.rows[a.rows.length-1];delete a.rowById[b.uid],a.rows.pop()},d=function(b){const c=a.rows[a.rows.length-1];delete a.rowById[c.uid],a.rows.splice(b,1)};for(let c=0;c<a.dataSource.length;c++){const d=a.dataSource[c];b(d,c)}a.dataSource.notify(function(e){if(!a.dataSource._updating){const f=e.data;switch(a.rows.canNotify=!1,e.action){case"add":if(f.length)for(let c=0;c<f.length;c++)b(f[c],a.dataSource.length-f.length+c);else b(f,a.dataSource.length-1);break;case"update":if(f.length)for(let b=0;b<f.length;b++){const c=e.index[b];a.rows[c].data=f[b]}else{const b=e.index;a.rows[b].data=f}break;case"insert":b(f,e.index);for(let b=0;b<a.rows.length;b++){const c=a.rows[b];c.dataIndex=b}break;case"remove":d(e.index);break;case"removeLast":c();}a.rows.canNotify=!0,a.refresh()}}),a.rows=new Smart.ObservableArray(a.rows);for(let b=0;b<a.rows.length;b++){const c=a.rows[b];c.propertyChanged=function(){}}a.rows.notify(function(b){if(a.rows.canNotify&&!b.path){a.rows.canNotify=!1;const c=b.action;a.dataSource&&(a.dataSource.canNotify=!1,"add"===c?a.dataSource.add(a.rows[b.index]):"update"===c?a.dataSource.update(b.index,a.rows[b.index]):"remove"===c?a.dataSource.remove(b.index):void 0,a.dataSource.canNotify=!0,a.rows.canNotify=!0,a.refresh())}})}downHandler(){}refresh(){const a=this;let b="<thead><tr>",c="<tbody>";for(let c=0;c<a._columns.length;c++){const d=a._columns[c];b+="<th scope=\"col\">"+d.label+"</th>"}b+="</tr></thead>";for(let b=0;b<a.rows.length;b++){const d=a.rows[b];c+="<tr>";for(let b=0;b<a._columns.length;b++){const e=a._columns[b];c+="<td>"+d.data[e.dataField]+"</td>"}c+="</tr>"}c+="</tbody>",a.innerHTML=b+c;const d=a.querySelectorAll("th");for(let b=0;b<a._columns.length;b++){const c=a._columns[b];c.headerCellElement=d[b],c.headerCellElement.onclick=function(){"none"===a.sortMode||(!this.headerCellElement.sortIconContainerElement&&(this.headerCellElement.innerHTML+="<span class=\"sort-by\"></span>",this.headerCellElement.sortIconContainerElement=this.headerCellElement.lastChild),this.headerCellElement.sortIconContainerElement.classList.contains("asc")?a.sortBy(this.dataField,"desc"):this.headerCellElement.sortIconContainerElement.classList.contains("desc")?a.sortBy(this.dataField,null):a.sortBy(this.dataField,"asc"))}.bind(c)}if(a._sortColumns&&0<a._sortColumns.length)for(let b=0;b<a._sortColumns.length;b++){const c=a._sortColumns[b],d=a.columnByDataField[c.dataField];d.headerCellElement.sortIconContainerElement||(d.headerCellElement.innerHTML+="<span class=\"sort-by "+c.direction+"\"></span>",d.headerCellElement.sortIconContainerElement=d.headerCellElement.lastChild)}}dataBind(){const a=this;if(!a.dataSource){if(!a.columns){a.columns=[],a.dataFields=[];const b=document.querySelectorAll("th");for(let c=0;c<b.length;c++){const d=b[c].innerHTML.trim();a.columns.push({label:d,dataField:d,dataType:"string"}),a.dataFields.push(d)}}let b=[];if(!a.rows){const c=document.querySelectorAll("tr");for(let d=0;d<c.length;d++){const e=c[d],f={},g=e.querySelectorAll("td");if(0<g.length){for(let b=0;b<a.columns.length;b++){const c=a.columns[b];f[c.dataField]=g[b].innerHTML.trim()}b.push(f)}}a.dataSource=new Smart.DataAdapter({dataSource:b,dataFields:a.dataFields})}const c=a.querySelectorAll("table");1<c.length&&c[c.length-1].parentNode.removeChild(c[c.length-1])}a._initColumns(),a._initRows(),a.refresh()}sortBy(a,b){const c=this,d=c.columnByDataField[a],e=[],f=[],g=[],h=function(a){a.headerCellElement.sortIconContainerElement||(a.headerCellElement.innerHTML+="<span class=\"sort-by\"></span>",a.headerCellElement.sortIconContainerElement=a.headerCellElement.lastChild)},j=function(a){h(a),a.headerCellElement.sortIconContainerElement.classList.remove("desc"),a.headerCellElement.sortIconContainerElement.classList.remove("asc"),a.sortOrder=null},i=function(){if(c._sortColumns&&0<c._sortColumns.length)for(let a=0;a<c._sortColumns.length;a++){const b=c._sortColumns[a],d=c.columnByDataField[b.dataField];j(d)}c._sortColumns=[]},k=function(){c.dataSource._sort(c.dataSource.boundSource,e,f,g);for(let a=0;a<c.dataSource.length;a++){const b=c.rows[a],d=c.dataSource[a];b.data=d,b.boundIndex=d.boundIndex}c.refresh()};if(null===d||void 0===d)return void(c._sortColumns&&0<c._sortColumns.length&&(i(),k()));if("none"===c.sortMode||!c.dataSource)return;if(b&&d.sortOrder===b)return;let l=b||"asc";j(d),c._sortColumns||(c._sortColumns=[]);let m="string";for(let d=0;d<c.dataSource.dataFields.length;d++){const b=c.dataSource.dataFields[d];if(b.name===a){m=b.dataType;break}}let n=!0;for(let e=0;e<c._sortColumns.length;e++){const b=c._sortColumns[e];if(b.dataField===a)if(n=!1,"asc"===b.direction)b.direction="desc",l="desc";else if("desc"===b.direction){c._sortColumns.splice(e,1),j(d),l=null;break}}n&&("one"===c.sortMode&&i(),c._sortColumns.push({dataField:a,direction:l,dataType:m})),h(d),null===l?(d.headerCellElement.sortIconContainerElement.classList.remove("asc"),d.headerCellElement.sortIconContainerElement.classList.remove("desc")):(d.headerCellElement.sortIconContainerElement.classList.remove("asc"),d.headerCellElement.sortIconContainerElement.classList.remove("desc"),d.sortOrder=l,"desc"===l?d.headerCellElement.sortIconContainerElement.classList.add("desc"):d.headerCellElement.sortIconContainerElement.classList.add("asc"));for(let d=0;d<c._sortColumns.length;d++){const a=c._sortColumns[d];e.push(a.dataField),f.push(a.direction),g.push(a.dataType)}k()}clearSort(){this.sortBy(null)}});