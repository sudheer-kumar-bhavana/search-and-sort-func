//This function decides if sorting is to be done in ascending or descending order using the variable
//asc_r_dsc and then calls the respective function below
function sorting(asc_r_dsc, sortfiled, tabledata) {

    if (asc_r_dsc === 'dsc') {
        return descending(sortfiled, tabledata);
    } else {
        return ascending(sortfiled, tabledata);
    }
}


function ascending(sortfiled, tabledata) {

    for (var i = 0; i < tabledata.length; i++) {
        for (var j = 0; j < tabledata.length; j++) {
            var temp;
            if (tabledata[i][sortfiled] < tabledata[j][sortfiled]) {
                temp = tabledata[i];
                tabledata[i] = tabledata[j];
                tabledata[j] = temp;
            }
        }
    }
    return tabledata;
}


function descending(sortfiled, tabledata) {

    for (var i = 0; i < tabledata.length; i++) {
        for (var j = 0; j < tabledata.length; j++) {
            var temp;
            if (tabledata[i][sortfiled] > tabledata[j][sortfiled]) {
                temp = tabledata[i];
                tabledata[i] = tabledata[j];
                tabledata[j] = temp;
            }
        }
    }
    return tabledata;
}
