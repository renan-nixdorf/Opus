import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Opus | ${props.title}` || '';
  }, [props]);

  return <></>;
};

export default Head;
