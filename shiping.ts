import { defineType } from 'sanity';

export default defineType({
  name: 'shipment',
  type: 'document',
  title: 'Shipment',
  fields: [
    {
      name: 'carrier',
      type: 'string',
      title: 'Shipping Carrier',
      description: 'The carrier handling the shipment (e.g., FedEx, UPS, USPS).',
    },
    {
      name: 'trackingNumber',
      type: 'string',
      title: 'Tracking Number',
      description: 'The tracking number provided by the carrier.',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Shipment Status',
      options: {
        list: ['pending', 'shipped', 'in transit', 'delivered', 'returned'],
      },
    },
    {
      name: 'shipmentDate',
      type: 'datetime',
      title: 'Shipment Date',
      description: 'The date the shipment was created.',
    },
    {
      name: 'shipEngineID',
      type: 'string',
      title: 'ShipEngine Shipment ID',
      description: 'The unique ID assigned by ShipEngine for this shipment.',
    },
    {
      name: 'metadata',
      type: 'object',
      title: 'Metadata',
      fields: [
        {
          name: 'labelURL',
          type: 'url',
          title: 'Shipping Label URL',
        },
        {
          name: 'estimatedDeliveryDate',
          type: 'datetime',
          title: 'Estimated Delivery Date',
        },
        {
          name: 'cost',
          type: 'number',
          title: 'Shipping Cost',
        },
      ],
    },
  ],
});
