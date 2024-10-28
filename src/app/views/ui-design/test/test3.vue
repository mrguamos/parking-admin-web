<template>
  <div class="order-list">
    <div class="header">
      <h1 class="text-title-page">Order List</h1>
      <div class="header-actions">
        <el-button text>
          <i class="material-icons">description</i>
          Manage Table Templates
        </el-button>
        <el-button text>
          <i class="material-icons">add</i>
          Add Order
        </el-button>
      </div>
    </div>

    <el-form :model="formData" label-position="top">
      <el-row :gutter="20">
        <el-col :span="18">
          <el-row :gutter="20">
            <el-col :span="8">
              <h3 class="text-tiny-uppercase">ORDER</h3>
              <el-form-item label="Order ID">
                <el-input v-model="formData.orderId"></el-input>
              </el-form-item>
              <el-form-item label="Order Item Qty">
                <el-input v-model="formData.orderItemQty"></el-input>
              </el-form-item>
              <el-form-item label="Status">
                <el-select v-model="formData.status" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Order Type">
                <el-select v-model="formData.orderType" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Order Type Code">
                <el-input v-model="formData.orderTypeCode"></el-input>
              </el-form-item>
              <el-form-item label="Customer">
                <el-select v-model="formData.customer" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Customer Sales Order #">
                <el-input v-model="formData.customerSalesOrder"></el-input>
              </el-form-item>
              <el-form-item label="Priority Points">
                <el-input v-model="formData.priorityPoints"></el-input>
              </el-form-item>
              <el-form-item label="Purchase Order">
                <el-input v-model="formData.purchaseOrder"></el-input>
              </el-form-item>
              <el-form-item label="Reference">
                <el-input v-model="formData.reference"></el-input>
              </el-form-item>
              <el-form-item label="Retailer">
                <el-input v-model="formData.retailer"></el-input>
              </el-form-item>
              <el-form-item label="Retailer Authorization(ARN)">
                <el-input v-model="formData.retailerAuthorization"></el-input>
              </el-form-item>
              <el-form-item label="Store #">
                <el-input v-model="formData.storeNumber"></el-input>
              </el-form-item>
              <el-form-item label="Sub Order Type">
                <el-select v-model="formData.subOrderType" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <h3 class="text-tiny-uppercase">SHIP ADDRESS AND SHIPMENT</h3>
              <el-form-item label="Ship To Address Name">
                <el-input v-model="formData.shipToAddressName"></el-input>
              </el-form-item>
              <el-form-item label="Ship To City">
                <el-input v-model="formData.shipToCity"></el-input>
              </el-form-item>
              <el-form-item label="Ship To State">
                <el-input v-model="formData.shipToState"></el-input>
              </el-form-item>
              <el-form-item label="Ship To Zip Code">
                <el-input v-model="formData.shipToZipCode"></el-input>
              </el-form-item>
              <el-form-item label="Commercial / Consumer">
                <el-radio-group v-model="formData.commercialConsumer">
                  <el-radio label="all">All</el-radio>
                  <el-radio label="commercial">Commercial</el-radio>
                  <el-radio label="consumer">Consumer</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Carrier">
                <el-select v-model="formData.carrier" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Entry ID">
                <el-input v-model="formData.entryId"></el-input>
              </el-form-item>
              <el-form-item label="Freight Term">
                <el-select v-model="formData.freightTerm" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Parcel Carrier Pick-up">
                <el-select v-model="formData.parcelCarrierPickup" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Ship method">
                <el-select v-model="formData.shipMethod" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Long Haul">
                <el-input type="textarea" v-model="formData.longHaul" rows="4"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <h3 class="text-tiny-uppercase">WISE</h3>
              <el-form-item label="Batch Commitment #">
                <el-select v-model="formData.batchCommitment" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Created By">
                <el-select v-model="formData.createdBy" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Dynamic Keyword">
                <el-input v-model="formData.dynamicKeyword"></el-input>
              </el-form-item>
              <el-form-item label="Item Group">
                <el-select v-model="formData.itemGroup" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Item Label">
                <el-input v-model="formData.itemLabel"></el-input>
              </el-form-item>
              <el-form-item label="Item Line Greater Than">
                <el-input v-model="formData.itemLineGreaterThan"></el-input>
              </el-form-item>
              <el-form-item label="Item Line Less Than Or Equal To">
                <el-input v-model="formData.itemLineLessThanOrEqualTo"></el-input>
              </el-form-item>
              <el-form-item label="Item">
                <el-select v-model="formData.item" placeholder="Select">
                  <!-- Add options here -->
                </el-select>
              </el-form-item>
              <el-form-item label="Label Code">
                <el-input v-model="formData.labelCode"></el-input>
              </el-form-item>
              <el-form-item label="Order Plan ID">
                <el-input v-model="formData.orderPlanId"></el-input>
              </el-form-item>
              <el-form-item label="SOID">
                <el-input v-model="formData.soid"></el-input>
              </el-form-item>
              <el-form-item label="SN List">
                <el-input type="textarea" v-model="formData.snList" rows="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

      <!-- Date fields -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="Appointment Time">
            <el-date-picker
              v-model="formData.appointmentTime"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Delivery Request Date">
            <el-date-picker
              v-model="formData.deliveryRequestDate"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Ship No Later">
            <el-date-picker
              v-model="formData.shipNoLater"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="Attempted Commit Date">
            <el-date-picker
              v-model="formData.attemptedCommitDate"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Edi Processed Time">
            <el-date-picker
              v-model="formData.ediProcessedTime"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Ship Not Before">
            <el-date-picker
              v-model="formData.shipNotBefore"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="Customer Order Time">
            <el-date-picker
              v-model="formData.customerOrderTime"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Order Plan Release Time">
            <el-date-picker
              v-model="formData.orderPlanReleaseTime"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Shipped Date">
            <el-date-picker
              v-model="formData.shippedDate"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="Date Created">
            <el-date-picker
              v-model="formData.dateCreated"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Schedule Date">
            <el-date-picker
              v-model="formData.scheduleDate"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Target Completion Date">
            <el-date-picker
              v-model="formData.targetCompletionDate"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
        </el-col>
        <el-col :span="6">
          <h3 class="text-tiny-uppercase">LOAD</h3>
          <el-form-item label="Load #">
            <el-input v-model="formData.loadNumber"></el-input>
          </el-form-item>
          <el-form-item label="BOL #">
            <el-input v-model="formData.bolNumber"></el-input>
          </el-form-item>
          <el-form-item label="Consolidation Category">
            <el-select v-model="formData.consolidationCategory" placeholder="Select">
              <!-- Add options here -->
            </el-select>
          </el-form-item>
          <el-form-item label="Consolidation #">
            <el-input v-model="formData.consolidationNumber"></el-input>
          </el-form-item>
          <el-form-item label="Consolidation Prefix">
            <el-input v-model="formData.consolidationPrefix"></el-input>
          </el-form-item>
          <el-form-item label="Great Than Consolidation Size">
            <el-input v-model="formData.greatThanConsolidationSize"></el-input>
          </el-form-item>
          <el-form-item label="Great Than Non Consolidation Size">
            <el-input v-model="formData.greatThanNonConsolidationSize"></el-input>
          </el-form-item>
          <el-form-item label="Less or Equal Than Consolidation Size">
            <el-input v-model="formData.lessOrEqualThanConsolidationSize"></el-input>
          </el-form-item>
          <el-form-item label="Less or Equal Than Non Consolidation Size">
            <el-input v-model="formData.lessOrEqualThanNonConsolidationSize"></el-input>
          </el-form-item>
          <el-form-item label="Master BOL">
            <el-input v-model="formData.masterBOL"></el-input>
          </el-form-item>

          <!-- Special filters -->
          <el-row>
            <el-col>
              <h3 class="text-tiny-uppercase">SPECIAL FILTERS</h3>
              <el-form-item label-position="left" label="Pick To Load">
                <el-switch v-model="formData.pickToLoad"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Is Import Delay">
                <el-switch v-model="formData.isImportDelay"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Is Rush">
                <el-switch v-model="formData.isRush"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Confirmed LH flag">
                <el-switch v-model="formData.confirmedLHFlag"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Contain Battery">
                <el-switch v-model="formData.containBattery"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Contain Oversize Item">
                <el-switch v-model="formData.containOversizeItem"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Is Delivery On Demand">
                <el-switch v-model="formData.isDeliveryOnDemand"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="Is International">
                <el-switch v-model="formData.isInternational"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="One Rate">
                <el-switch v-model="formData.oneRate"></el-switch>
              </el-form-item>
              <el-form-item label-position="left" label="With Uploaded Tracking">
                <el-switch v-model="formData.withUploadedTracking"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>


      

      <!-- Form actions -->
      <el-row>
        <el-col :span="24" class="form-actions">
          <el-button>Close</el-button>
          <el-button>Reset</el-button>
          <el-button type="primary">Search</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data() {
    return {
      formData: {
        orderId: '',
        orderItemQty: '',
        status: '',
        orderType: '',
        orderTypeCode: '',
        customer: '',
        customerSalesOrder: '',
        priorityPoints: '',
        purchaseOrder: '',
        reference: '',
        retailer: '',
        retailerAuthorization: '',
        storeNumber: '',
        subOrderType: '',
        shipToAddressName: '',
        shipToCity: '',
        shipToState: '',
        shipToZipCode: '',
        commercialConsumer: 'all',
        carrier: '',
        entryId: '',
        freightTerm: '',
        parcelCarrierPickup: '',
        shipMethod: '',
        longHaul: '',
        batchCommitment: '',
        createdBy: '',
        dynamicKeyword: '',
        itemGroup: '',
        itemLabel: '',
        itemLineGreaterThan: '',
        itemLineLessThanOrEqualTo: '',
        item: '',
        labelCode: '',
        orderPlanId: '',
        soid: '',
        snList: '',
        loadNumber: '',
        bolNumber: '',
        consolidationCategory: '',
        consolidationNumber: '',
        consolidationPrefix: '',
        greatThanConsolidationSize: '',
        greatThanNonConsolidationSize: '',
        lessOrEqualThanConsolidationSize: '',
        lessOrEqualThanNonConsolidationSize: '',
        masterBOL: '',
        appointmentTime: [],
        deliveryRequestDate: [],
        shipNoLater: [],
        attemptedCommitDate: [],
        ediProcessedTime: [],
        shipNotBefore: [],
        customerOrderTime: [],
        orderPlanReleaseTime: [],
        shippedDate: [],
        dateCreated: [],
        scheduleDate: [],
        targetCompletionDate: [],
        pickToLoad: false,
        isImportDelay: false,
        isRush: false,
        confirmedLHFlag: false,
        containBattery: false,
        containOversizeItem: false,
        isDeliveryOnDemand: false,
        isInternational: false,
        oneRate: false,
        withUploadedTracking: false,
      }
    }
  }
}
</script>

<style scoped>
.order-list {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>