import WrapperLayout from '../layouts/wrapper';
import NavigationContainer from '../containers/navigation';

const HeaderTemplate = ({ page }) => {
  return (
    <header>
      <WrapperLayout maxWidth="1112px" justifyContent="space-between">
        
        <div>Leaf: Title</div>
        <NavigationContainer page={page} />
      </WrapperLayout>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          height: 72px;
          border-bottom: 1px solid var(--color-blue--85);
          box-shadow: 0 4px 4px -2px var(--color-blue--95);
          background: white;
        }

        div {
          color: var(--color-black--25);
        }
      `}</style>
    </header>
  );
};

export default HeaderTemplate;
