/** 
 * GlideRecordSecure class inherited from GlideRecord
 *      Has all the same methods
 *      Performs ACL checking
 * Used to secure Script Includes
 * Replaces canWrite(), canRead(), canUpdate(), canDelete() GlideRecord methods
 * 
 * Will be less lines of code
 * 
 * */ 


var incidentGRS = new GlideRecordSecure('incident')
incidentGRS.query()
while(incidentGRS.next()) {
    //action goes here
}
