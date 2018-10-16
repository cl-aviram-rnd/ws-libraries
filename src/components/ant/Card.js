import React from 'react'
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';

const { Meta } = Card;

export default class CardExample extends React.Component {
  state = {
    loading: true,
  }

  onChange = (checked) => {
    this.setState({ loading: !checked });
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        <div className="padd">
          <Switch checked={!loading} onChange={this.onChange} />

          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>

          <Card
            style={{ width: 300, marginTop: 16 }}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Skeleton loading={loading} avatar active>
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card>
        </div>
        <div className="padd">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>,
        </div>
      </div>
    );
  }
}