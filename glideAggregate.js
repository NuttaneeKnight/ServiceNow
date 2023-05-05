/**
 * Glide Aggregate
 * 
 * Extension of GlideRecord class
 * Used when performing aggregate queries(count, min, max, sum, avg)
 *      Reports
 *      Calculations
 * Only works on the number fields. 
 * 
 */

var count = new GlideAggregate('incident')
count.addAggregate('COUNT')
count.query()
var incidents = 0;
if(count.next()) {
    incidents = count.getAggregate('COUNT')
}