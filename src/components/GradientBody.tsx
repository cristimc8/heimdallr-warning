import { background, Box } from '@chakra-ui/react';
import React from 'react';

const GradientBody = ({ height }) => {
  return (
    <Box
      background={
        'linear-gradient(186deg, rgba(0, 0, 0, 1) 4%, rgba(0, 0, 0, 1) 7%, rgba(3, 1, 43, 1) 88%, rgba(4, 2, 53, 1) 100%)'
      }
      h={height}
      m={0}
      backgroundRepeat={'no-repeat'}
      backgroundAttachment={'fixed'}
    ></Box>
  );
};

export default GradientBody;
