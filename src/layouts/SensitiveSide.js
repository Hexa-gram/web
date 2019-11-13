import Sidebar from '@/components/Sidebar';

function DetailBasicLayout(props) {
  const tabs = [
    { name: '文件', path: '/detail/sensitive/file' },
    { name: '截图', path: '/detail/sensitive/pic' },
  ]

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar tabs={tabs} ></Sidebar>
      <div style={{ flex: 1 }}>{props.children}</div>
    </div>
  );
}

export default DetailBasicLayout;
