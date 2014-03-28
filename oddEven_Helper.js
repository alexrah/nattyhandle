  // Handlebars.registerHelper('stripeRows', function (rows, fn) {
  function stripeRows (rows, fn){
        var buffer = [],
            i, len;
        
        for (i = 0, len = rows.length; i < len; ++i) {
            var row = rows[i];
            row.rowClass = (i + 1) % 2 === 0 ? 'even' : 'odd';

            // Render the block once for each row.
            // buffer.push(fn(row));
            buffer += fn(item);
        }
        
        return buffer;
    }
