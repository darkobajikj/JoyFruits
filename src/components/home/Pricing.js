import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Lemons',
    content: [
      {
        price: '$3',
        space: 'Unlimited Order',
        support: '24/7 available',
        backup: 'Money Refund',
        access: 'Pay with Paypal or Card'
      }
    ]
  },
  {
    title: 'Oranges',
    content: [
      {
        price: '$2.6',
        space: 'Unlimited Order',
        support: '24/7 available',
        backup: 'Money Refund',
        access: 'Pay with Paypal or Card'
      }
    ]
  },
  {
    title: 'GrapeFruit',
    content: [
      {
        price: '$7',
        space: 'Unlimited Order',
        support: '24/7 available',
        backup: 'Money Refund',
        access: 'Pay with Paypal or Card'
      }
    ]
  }
];

function Pricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Fruit Price</h2>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="danger" size="large">Buy Now</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default Pricing;