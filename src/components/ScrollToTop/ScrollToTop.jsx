import { ScrollToTop } from 'react-to-top';

const ScrollOnTop = () => {
  return (
    <div>
      <button type="button">
        <ScrollToTop
          bgColor="#32a8a4"
          size={60}
          strokeWidth={2}
          symbolSize={25}
        />
      </button>
    </div>
  );
};

export default ScrollOnTop;