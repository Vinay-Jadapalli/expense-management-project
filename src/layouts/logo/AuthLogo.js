import React from 'react';
import { useSelector } from 'react-redux';

import { LogoDarkIcon } from '../../assets/images/logos/xtreme-dark-icon.svg';
import { LogoDarkText } from '../../assets/images/logos/xtreme-dark-text.svg';
import { LogoWhiteIcon } from '../../assets/images/logos/xtreme-white-icon.svg';
import { LogoWhiteText } from '../../assets/images/logos/xtreme-white-text.svg';

const AuthLogo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);

  return (
    <div className="p-4 d-flex justify-content-center gap-2">
      {isDarkMode !== false ? (
        <>
          <LogoWhiteIcon />
          <LogoWhiteText />
        </>
      ) : (
        <>
          <LogoDarkIcon />
          <LogoDarkText />
        </>
      )}
    </div>
  );
};

export default AuthLogo;





// import React from 'react';
// import { useSelector } from 'react-redux';

// // import { LogoDarkIcon } from '../../assets/images/logos/xtreme-dark-icon.svg';
// import { LogoDarkText } from '../../assets/images/logos/xtreme-dark-text.svg';
// import { LogoWhiteIcon } from '../../assets/images/logos/xtreme-white-icon.svg';
// import { LogoWhiteText } from '../../assets/images/logos/xtreme-white-text.svg';

// const AuthLogo = () => {
//   const isDarkMode = useSelector((state) => state.customizer.isDark);

//   return (
//     <div className="p-4 d-flex justify-content-center gap-2">
//       {isDarkMode !== false ? (
//         <>
//           <LogoWhiteIcon />
//           <LogoWhiteText />
//         </>
//       ) : ( null
//         // <>
//         //   <LogoDarkIcon />
//         //   <LogoDarkText />
//         // </>
//       )}
//     </div>
//   );
// };

// export default AuthLogo;
