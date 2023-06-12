(function(table, query) {
    //get the UpdateSet Manager ready
    var um;
    if (typeof GlideUpdateManager2 != 'undefined')
        um = new GlideUpdateManager2();
    else
        um = new Packages.com.glide.update.UpdateManager2();

 

    //query all records
    var rec = new GlideRecord(table);
        rec.addQuery(query);
    rec.query();

 

    //Push returned records into the current update set
    var msg = ['The following records were added to the current Update Set:'],
        count = 0;
    while (rec.next()) {
        if (um.saveRecord(rec)) {
            count++;
            msg.push(rec.getUniqueValue() + ' @ ' + rec.getTableName() + ' [' + rec.getDisplayValue() + ']');
        } else {
            msg.push('RECORD NOT ADDED :: "' + rec.getUniqueValue() + '" @ "' + rec.getTableName() + '" [' + rec.getDisplayValue() + ']');
        }
    }

 

    msg.push("\nAdded " + count + " records.");
    gs.print(msg.join('\n'));

 

})('table', 'query');

