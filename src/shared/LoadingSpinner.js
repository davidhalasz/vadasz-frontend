import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'} w-full h-full flex justify-center`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
