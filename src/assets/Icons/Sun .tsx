import React from 'react';
import { Svg, Path, Rect, ClipPath, G, Defs } from 'react-native-svg';

const Sun: React.FC = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clipPath="url(#clip0_31_455)">
        <Path
          d="M16 1.33337V4.00004M16 28V30.6667M30.6667 16H28M4.00004 16H1.33337M26.3709 5.62914L24.4853 7.51476M7.51476 24.4853L5.62914 26.3709M26.3709 26.3709L24.4853 24.4853M7.51476 7.51476L5.62914 5.62914M24 16C24 20.4183 20.4183 24 16 24C11.5818 24 8.00004 20.4183 8.00004 16C8.00004 11.5818 11.5818 8.00004 16 8.00004C20.4183 8.00004 24 11.5818 24 16Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_31_455">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Sun;
