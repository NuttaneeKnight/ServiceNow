<div id="sc_cat_checkout" ng-class="{'panel panel-default': !c.isNative}" sn-atf-blacklist="IS_SERVICE_CATALOG" ng-keydown="c.onKeyDown($event)">
	<div class="padder-md checkout-modal-header text-base" ng-if="!c.isNative">
		<h1 class="h3">
			{{::checkoutPopupTitle}}
		</h1>
		<i class="fa fa-close pull-right" autofocus="true" tabindex="0" ng-click="c.cancel()" data-toggle="tooltip" data-original-title="${Close modal}" aria-role="button" aria-label="${Close modal}"></i>
	</div>
	<div class="wrapper-md clearfix b-t">
		<div class="form-group">
			<div class="row">
				<div class="col-sm-8" ng-class="{'m-t-xl': c.isNative}">
					<label for="requested-for" ng-class="{'m-l': c.isNative}">${Request For}
          </label>
          <i ng-if="!c.isNative" class="fa fa-info-circle" tabindex="0" data-toggle="tooltip" data-original-title="${Request for yourself or on behalf of another person}" data-placement="right" aria-label="${Request for yourself or on behalf of another person}"></i>
					<sn-record-picker id="requested-for"
                            field="c.requestedFor"
                            table="'sys_user'" 
                            display-field="c.data.reqForDispCol" 
                            display-fields="c.data.reqForDispCols" 
                            value-field="'sys_id'" 
                            search-fields="c.data.reqForSearchCols"
                            default-query="c.data.reqForQuery"
                            page-size="100"
                            options="{allowClear : false}"
                            sn-disabled="!c.data.disable_req_for">
					</sn-record-picker>
				</div>
        <div class="col-sm-8" ng-class="{'m-t-xl': c.isNative}">
					<label for="district" ng-class="{'m-l': c.isNative}">${District}
          </label>
          <i ng-if="!c.isNative" class="fa fa-info-circle" tabindex="0" data-toggle="tooltip" data-original-title="${District}" data-placement="right" aria-label="${District}"></i>
					<sn-record-picker id="district"
                            field="c.district"
                            table="'u_district'"
                            display-field="c.data.districtDispCol"
                            display-fields="c.data.districtDispCols"
                            value-field="'sys_id'"
                            search-fields="c.data.districtSearchCols"
                            default-query="c.data.districtQuery"
                            page-size="100"
                            options="{allowClear : false}"
                            sn-disabled="!c.data.disable_district">
					</sn-record-picker>
				</div>
        <div class="col-sm-8" ng-class="{'m-t-xl': c.isNative}">
					<label for="school" ng-class="{'m-l': c.isNative}">${School}</label>
          <i ng-if="!c.isNative" class="fa fa-info-circle" tabindex="0" data-toggle="tooltip" data-original-title="${School}" data-placement="right" aria-label="${School}"></i>
					<sn-record-picker id="school"
                            field="c.school"
                            table="'cmn_location'"
                            display-field="c.data.schoolDispCol"
                            display-fields="c.data.schoolDispCols"
                            value-field="'sys_id'"
                            search-fields="c.data.schoolSearchCols"
                            default-query="c.data.schoolQuery"
                            page-size="100"
                            options="{allowClear : false}"
                            sn-disabled="!c.data.disable_school">
					</sn-record-picker>
        </div>
        <!-- Short Description -->
        <div class="col-sm-8" ng-class="{'m-t-xl': c.isNative}">
  				<label for="sdesc" class="m-l" aria-label="${Short Description}" role="text">${Short Description}</label>
          <input type="text" id="sdesc" name="sdesc" class="form-control m-l">
        </div>
        <!-- Delivery Address -->
        <div class="padder-v col-sm-12" ng-if="c.allowDeliveryAddress()" ng-class="{'m-t-xl': c.isNative}">
          <button ng-if="!c.isNative" class="sc-section-toggle-button" aria-controls="deliver-to" ng-click="c.showDeliveryAddr = !c.showDeliveryAddr" aria-expanded="{{c.showDeliveryAddr}}">
			  ${Delivery Information} <span class="text-muted"> ${(Optional)}</span>
			  <i ng-if="::!c.isNative" ng-class="c.showDeliveryAddr ? 'fa fa-minus-square-o' : 'fa fa-plus-square-o'"  class="m-t-xs pull-left accordion-toggle"></i>
          </button>
          <label for="deliver-to" ng-if="c.isNative" tabindex="0" class="m-l" aria-label="${Delivery Information Optional}" role="text">${Delivery Information} <span aria-hidden="true" class="text-muted"> ${(Optional)}</span></label>
          <textarea class="form-control" ng-if="c.isNative || c.showDeliveryAddr" 
                    ng-model="c.deliverTo"  id="deliver-to" ng-model-options="{ updateOn: 'blur' }" 
                    ng-change="c.changeShippingInfo()" rows="3" aria-label="${Enter delivery information}"></textarea>
        </div>
        <!-- Special Instructions -->
        <div class="col-sm-12" ng-class="{'padder-v': !c.allowDeliveryAddress()}" ng-class="{'m-t-xl': c.isNative}">
		  <button ng-if="!c.isNative" class="sc-section-toggle-button" aria-controls="deliver-to" ng-click="c.showSpecialInstructions = !c.showSpecialInstructions" aria-expanded="{{c.showSpecialInstructions}}">
			  ${Special Instructions}  <span class="text-muted"> ${(Optional)}</span>
			  <i ng-if="::!c.isNative" ng-class="c.showSpecialInstructions ? 'fa fa-minus-square-o' : 'fa fa-plus-square-o'"  class="m-t-xs pull-left accordion-toggle"></i>
		  </button>
          <label for="special-instructions" ng-if="c.isNative" tabindex="0" aria-label="${Special Instructions Optional}" role="text" class="m-l">${Special Instructions}  <span aria-hidden="true" class="text-muted"> ${(Optional)}</span>
          </label>
          <textarea class="form-control" ng-if="c.isNative || c.showSpecialInstructions" 
                    ng-model="c.special_instructions" id="special-instructions" aria-label="${Enter Special Instructions}"
                    ng-model-options="{ updateOn: 'blur' }" ng-change="c.changeShippingInfo()" rows="3"></textarea>
        </div>
		</div>
    </div>
	</div>
  <div ng-if="c.isNative">
  	<div class="attachment-list" ng-if="c.data.action !== 'order_now'">
			<now-attachments-list template="sp_attachment_single_line" class="padder-b"></now-attachments-list>
    </div>
		<div ng-class="{'flex-center attachment-height': c.isNative}">
				<label ng-if="c.data.action !== 'order_now'" style="font-weight:normal;cursor:pointer;" class="padding-top-s">
					<span class="attachment-text" style="padding-left:28px;">${Add attachments}</span>
          <sp-attachment-button></sp-attachment-button>
				</label>
  	</div>
  </div>
	<div class="panel-footer clearfix" ng-if="!c.isNative">
    <div class="attachment-list" ng-if="c.data.action !== 'order_now'">
			<now-attachments-list template="sp_attachment_single_line" class="padder-b"></now-attachments-list>
    </div>
		<div>
				<label ng-if="c.data.action !== 'order_now'" style="font-weight:normal;cursor:pointer;" class="padding-top-s">
					<sp-attachment-button></sp-attachment-button>
					<span style="padding-left:4px;">${Add attachments}</span>
				</label>
			<div class="pull-right">
				<button name="cancel" ng-disabled="c.checkoutInProgress" ng-click="c.cancel()" class="btn btn-default">${Cancel}</button>
				<button ng-disabled="c.checkoutInProgress || !c.requestedFor.value" name="submit" ng-click="c.triggerCheckout()" sn-focus="true" class="btn sc-btn btn-primary m-l-xs">
					<span ng-show="!c.checkoutInProgress">{{::checkOutMsg}}</span>
					<span ng-show="c.checkoutInProgress">{{::m.checkingOutMsg}}</span>
				</button>
			</div>
		</div>
	</div>
</div>