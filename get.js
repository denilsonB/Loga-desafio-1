function get(path,data){
    try{
        path = path.toString();//caso a entrada esteja em formato de array
        path = path.replaceAll(',','.')

        path = path.replace(/\[(\w+)\]/g, '.$1'); 
        path = path.replace(/^\./, '');         
        var properties = path.split('.');
        for (var i = 0, n = properties.length; i < n; ++i) {
            var property = properties[i];
            
                if (property in data) {
                    data = data[property];
            } else {
                return;
            }
        }
        return data;
        }catch{
            return undefined;
        }
    }
