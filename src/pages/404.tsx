import { Button, Result } from 'antd';
import {history} from 'umi'

const noFoundPage = () => (
  <Result
    status="404"
    title="404"
    extra={
      <Button type="primary" onClick={()=>history.push('./')}>
        back Home
      </Button>
    }
  />
);

export default noFoundPage;