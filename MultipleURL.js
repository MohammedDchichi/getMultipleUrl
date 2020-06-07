let tabOFExtensions= [
    "ca","cz","ch","cl","ae","al","am","com.ar","com.co","com.au","com.br","com.by",
    "com.cy","com.uy","com.mt","com.ee","com.es","com.eg","com.ng","ug","gr","ie","is"
    ,"pt","pe","mx","my","md","li","lu","lt","fr","fi","nl","no","bg","ba","be","dk"
    ,"de","ru","ro","mk","kr","se","si","rs","sn","is","co.uk","co.il","co.za","co.at"
    ,"co.nz","co.id","hu","hr","sk","jp","sg"
    ];    

let button =  document.getElementById("button-url");

button.addEventListener('click', event => {
    let urlBase = document.getElementById('urlBase').value;
    console.log(urlBase);
    let tabsResult= [];
    let extensions = document.getElementById("extension").value;
    console.log(extensions);
    let urlTemp=urlBase;
    for(let i=0;i<tabOFExtensions.length;i++){
         urlTemp=urlTemp.replace(extensions,tabOFExtensions[i]);
         tabsResult.push(urlTemp);
         console.log(urlTemp);
         urlTemp=urlBase;
    }
let table = document.getElementById("table");
generateTable(table,tabsResult);

  });

  function getExtensionUrl(filename){
    return filename.split(/[#?]/)[0].split('.').pop().trim();
  }

  function generateTable(table, data) {
    clearTable();
    for (let element of data) {
      let row = table.insertRow();
        let cell = row.insertCell();
        cell.innerHTML = element;
    }
    function clearTable(){
        var tb = document.getElementById('table');
        while(tb.rows.length > 1) {
        tb.deleteRow(1);
}
    }
  }


