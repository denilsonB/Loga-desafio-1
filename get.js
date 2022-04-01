function get(path,data){
    path = path.replace(/\[(\w+)\]/g, '.$1'); 
    path = path.replace(/^\./, '');           
    var properties = path.split('.');
    
    for (var i = 0, n = properties.length; i < n; ++i) {
        var property = properties[i];
        try{
            if (property in data) {
                data = data[property];
        } else {
            return;
        }
    }catch{
        return undefined;
    }
    }
    return data;
}