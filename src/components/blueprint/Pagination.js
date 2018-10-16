import React from 'react'
import { Pagination, Icon } from 'semantic-ui-react'

const PaginationExamplePagination = () => (
  <div>
    <div className="padd"><Pagination defaultActivePage={5} totalPages={10} /></div>
    <div className="padd">
      <Pagination
        defaultActivePage={10}
        ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
        firstItem={{ content: <Icon name='angle double left' />, icon: true }}
        lastItem={{ content: <Icon name='angle double right' />, icon: true }}
        prevItem={{ content: <Icon name='angle left' />, icon: true }}
        nextItem={{ content: <Icon name='angle right' />, icon: true }}
        totalPages={30}
      />
    </div>
  </div>
)

export default PaginationExamplePagination
