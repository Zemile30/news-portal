const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const UserIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 6h16M10 12h10M4 18h16" />
  </svg>
);

export const ChevronsRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 6l6 6-6 6M12 6l6 6-6 6" />
  </svg>
);

export const HeartIcon = ({ filled, ...props }) => (
  <svg {...base} width={14} height={14} {...props}
       fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" />
  </svg>
);

export const ShareIcon = (props) => (
  <svg {...base} width={14} height={14} {...props}>
    <path d="M12 15V4M8 8l4-4 4 4M5 12v8h14v-8" />
  </svg>
);

export const BookmarkIcon = ({ filled, ...props }) => (
  <svg {...base} width={14} height={14} {...props}
       fill={filled ? "currentColor" : "none"}>
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);

export const GridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="4" y="4" width="7" height="7" />
    <rect x="13" y="4" width="7" height="7" />
    <rect x="4" y="13" width="7" height="7" />
    <rect x="13" y="13" width="7" height="7" />
  </svg>
);

export const ListIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const StarIcon = (props) => (
  <svg {...base} width={14} height={14} fill="currentColor" stroke="none" {...props}>
    <path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z" />
  </svg>
);

