import Link from 'next/link';
import { UserButton, currentUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';

export default async function Header() {
  const user: User | null = await currentUser();
  const isLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-40 bg-white w-full border-b border-b-slate-200 shadow-sm">
      <div className="h-16 py-4 container mx-auto">
        <nav className="flex justify-between mx-10">
          <Link
            href="/"
            className="hover:text-slate-600 cursor-pointer flex items-center"
          >
            <Logo />
            <span className="text-2xl mb-2 font-medium">OpsBuddy</span>
          </Link>
          <div className="flex items-center gap-5">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">Dashboard</Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <Link href="/sign-in">Log in</Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
function Logo() {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="31.000000pt" height="34.000000pt" viewBox="0 0 1200.000000 1200.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M760 6000 l0 -5240 5240 0 5240 0 0 5240 0 5240 -5240 0 -5240 0 0
      -5240z m5685 3789 c59 -29 95 -88 95 -154 -1 -27 -76 -652 -169 -1387 l-167
      -1338 1555 -2 c1696 -3 1572 1 1638 -61 60 -56 67 -148 19 -220 -13 -18 -836
      -1010 -1829 -2203 -1231 -1477 -1822 -2179 -1853 -2202 -36 -25 -57 -32 -92
      -32 -101 0 -182 78 -182 175 1 27 76 652 169 1387 l167 1338 -1555 2 c-1696 3
      -1572 -1 -1638 61 -60 56 -67 148 -19 220 13 18 836 1010 1829 2203 1231 1477
      1822 2179 1853 2202 56 39 115 43 179 11z"/>
      </g>
    </svg>
  );
}

// function Logo() {
//   return (
//     <svg
//       width={31}
//       height={34}
//       viewBox="0 0 31 34"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <g filter="url(#filter0_d_195_2681)">
//         <path
//           d="M9.187 9.516c1.815 8.432 5.975 22.26 5.975 8.962C15.162 5.527 42.516 14.286 6 2"
//           stroke="url(#paint0_linear_195_2681)"
//           strokeWidth={3}
//           strokeLinecap="round"
//           shapeRendering="crispEdges"
//         />
//       </g>
//       <defs>
//         <filter
//           id="filter0_d_195_2681"
//           x={0.5}
//           y={0.5}
//           width={30}
//           height={33}
//           filterUnits="userSpaceOnUse"
//           colorInterpolationFilters="sRGB"
//         >
//           <feFlood floodOpacity={0} result="BackgroundImageFix" />
//           <feColorMatrix
//             in="SourceAlpha"
//             values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//             result="hardAlpha"
//           />
//           <feOffset dy={4} />
//           <feGaussianBlur stdDeviation={2} />
//           <feComposite in2="hardAlpha" operator="out" />
//           <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
//           <feBlend
//             in2="BackgroundImageFix"
//             result="effect1_dropShadow_195_2681"
//           />
//           <feBlend
//             in="SourceGraphic"
//             in2="effect1_dropShadow_195_2681"
//             result="shape"
//           />
//         </filter>
//         <linearGradient
//           id="paint0_linear_195_2681"
//           x1={13.9886}
//           y1={2}
//           x2={9.57972}
//           y2={32.3101}
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#1A1A24" />
//           <stop offset={0.745342} stopColor="#1E2028" stopOpacity={0.54} />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// }
