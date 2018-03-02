const axios = require('axios')
var addKey=document.getElementsByClassName('tableInputKey');
var addValue=document.getElementsByClassName('tableInputValue');
var addDesp=document.getElementsByClassName('tableInputDesp');
var url = document.getElementById('urlInput');
var param = document.getElementsByClassName('params');
var submit = document.getElementById('send');
var method = document.getElementById('method');
var dash = document.getElementById('body');

method.value = "GET";

console.log(addKey);

var params = "{";
var count;
for ( var i = 1; i <=addKey.length; i++) {
    count=i;
}
let temp=0,nextcount;
function myFunction() {
    console.log("addkey length",addKey.length);
    console.log("addkey length",addKey.length);
    console.log("addkey length",addKey.length);

    console.log("count",count+1);
    if((count+1)<addKey.length){
        for ( var i = 1; i <=addKey.length; i++) {
            count=i;
        }
        console.log("hello");
        temp=0;
    }
    console.log('addKey[',`${count-1}`,"].value: ",addKey[`${count-1}`].value);
    console.log('addValue[',`${count-1}`,"].value: ",addValue[`${count-1}`].value);
    console.log('addDesp[',`${count-1}`,"].value: ",addDesp[`${count-1}`].value);

    // to check for presence of multiple parameters in header
    if(count>2){
      params = params + "," + addKey[`${count-1}`].value;
    }

    params = params + addKey[`${count-1}`].value + ":" + addValue[`${count-1}`].value;
    console.log('data CHange',params);

   if(((addKey[`${count-1}`].value!=='')||(addValue[`${count-1}`].value!=='')||(addDesp[`${count-1}`].value!==''))&&(temp!=1)){
    var table = document.getElementById("myTable");
    var row = table.insertRow(count+1);
    var cell1=row.insertCell(0);
    var t1=document.createElement("input");
        t1.className = "tableInputKey";
        t1.onchange=myFunction;
        cell1.appendChild(t1);
    var cell2=row.insertCell(1);
    var t2=document.createElement("input");
        t2.className="tableInputValue"
        t2.onchange=myFunction;
        cell2.appendChild(t2);
    var cell3=row.insertCell(2);
    var t3=document.createElement("input");
        t3.className="tableInputDesp";
        t3.onchange=myFunction;
        cell3.appendChild(t3);
    var cell4=row.insertCell(3);
    var t4=document.createElement("input");
        t4.type="button"
        t4.value='x';
        t4.name=`${count+1}`;

        t4.class="btn";
        t4.onclick=deleteRow;
        cell3.appendChild(t4);
        temp=0;
        nextcount=count+1;
   }
}

function deleteRow(event){
    var table=document.getElementById("myTable");
    table.deleteRow(event.target.name);
    console.log(event.target.name);
}

function getUrl() {
  return url.value.length === 0 ? '/api' : url.value;
}

function getParams() {
  params = params + "}";
  return params;
}

function getData() {
  return getParams();
}

function getHeaders() {
  return headers.value.length === 0 ? null : JSON.parse(headers.value);
}

submit.onclick = function () {

  console.log('method',method.value);

  if(method.value == "GET"){
    console.log('got into get');
    axios.get(getUrl(), getParams())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }
  if(method.value == "PUT"){
    console.log('got into get');
    axios.put(getUrl(), getData())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }
  if(method.value == "POST"){
    console.log('got into post');
    axios.post(getUrl(), getData())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }
  if(method.value == "PATCH"){
    console.log('got into patch');
    axios.patch(getUrl(), getData())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }
  if(method.value == "HEAD"){
    console.log('got into head');
    axios.head(getUrl())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }
  if(method.value == "DELETE"){
    console.log('got into DELETE');
    axios.delete(getUrl())
      .then(function(res) {
        console.log('response',res.data);
        dash.innerHTML = JSON.stringify(res.data, null, 2);
        dash.value = JSON.stringify(res.data, null, 2);
      })
      .catch(function (res) {
        dash.innerHTML = JSON.stringify(res.data, null, 2);
      });
  }

};

url.onchange = function (){
  localStorage.setItem('url',url.value);
}

method.onchange = function () {
  console.log('Method select',method.value);
  localStorage.setItem('method', method.value);

};
